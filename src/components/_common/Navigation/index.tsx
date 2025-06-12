"use client";
import { useState, useEffect, useRef } from "react"
import { MenuProps } from "@/interfaces"
import { useSections } from "@/context";
import styles from "./Navigation.module.css"

const Navigation: React.FC<MenuProps> = ({
  activeSection: initialActiveSection = 'home'
}) => {
  const { sections, titles } = useSections();
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const [expanded, setExpanded] = useState(false);
  const objectRefs = useRef<(HTMLObjectElement | null)[]>([]);

  // Função de scroll melhorada
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(sectionId);
    }
  };

  // Função de verificação de seção ativa
  const isActive = (sectionName: string): boolean => {
    return activeSection === sectionName;
  };

  const checkActiveSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Ajuste para 1/3 da tela
    
    // Se estiver no topo absoluto da página
    if (scrollPosition < 100) { // Threshold de 100px
      return sections[0]; // Retorna a primeira seção
    }
  
    let currentSection = sections[0]; // Default para a primeira seção
  
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition > offsetTop - 50 && // 50px de margem
            scrollPosition < offsetTop + offsetHeight) {
          currentSection = section;
        }
      }
    });
  
    return currentSection;
  };

  // Função para atualizar cores do SVG
  const updateSvgColors = (index: number, isHover: boolean = false) => {
    const object = objectRefs.current[index];
    if (!object) return;
  
    // Função interna para tentar aplicar as cores
    const applyColors = () => {
      const svgDoc = object.contentDocument;
      if (!svgDoc) return;
  
      const targetGroup = svgDoc.getElementById('Icon');
      if (!targetGroup) return;
  
      const style = getComputedStyle(document.documentElement);
      const normalColor = style.getPropertyValue('--text-menubar-button').trim();
      const hoverColor = style.getPropertyValue('--text-menubar-button-hover').trim();
      
      targetGroup.setAttribute(
        'stroke',
        isActive(sections[index]) || isHover ? hoverColor : normalColor
      );
    };
  
    // Tenta aplicar imediatamente
    applyColors();
  
    // Se o SVG não estiver pronto, adiciona um listener
    if (!object.contentDocument) {
      object.addEventListener('load', applyColors);
      return () => object.removeEventListener('load', applyColors);
    }
  };

  // Efeito para detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = checkActiveSection();
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]); // Restauramos activeSection nas dependências

  useEffect(() => {
    // Verifica o estado expandido do localStorage
    const savedState = localStorage.getItem('navExpanded');
    if (savedState !== null) {
      setExpanded(savedState === 'true');
    }
  
    // Verifica a seção ativa após a hidratação
    const initialActiveSection = checkActiveSection();
    setActiveSection(initialActiveSection);
  }, []);

  useEffect(() => {
    // Atualiza todas as cores após a hidratação e expansão
    const timer = setTimeout(() => {
      sections.forEach((_, idx) => {
        updateSvgColors(idx);
      });
    }, 300); // Pequeno delay para garantir que tudo esteja carregado
  
    return () => clearTimeout(timer);
  }, [expanded, activeSection]); // Dependências do efeito

  useEffect(() => {
    // Verificação inicial sincronizada
    const initialActiveSection = checkActiveSection();
    if (initialActiveSection !== activeSection) {
      setActiveSection(initialActiveSection);
    }
  
    // Forçar atualização dos SVGs após hidratação
    const timer = setTimeout(() => {
      sections.forEach((_, index) => {
        updateSvgColors(index);
      });
    }, 300);
  
    return () => clearTimeout(timer);
  }, []); // Executa apenas no mount

  return (
    <div className={`${styles.menucontainer} ${expanded ? styles.expanded : ""}`}>
      <object
        type="image/svg+xml"
        data={`/img/pi${expanded ? "_full" : ""}.svg`}
        aria-label="Canal do Pirulla"
        className={expanded ? styles.logoPiFull : styles.logoPiSmall}
      />
      <div className={`${styles.navWrapper} ${expanded ? styles.expanded : ""}`}>
        <nav className={`${styles.menubar}`}>
          <button 
            className={styles.expandButton}
            onClick={() => {
              const newState = !expanded;
              setExpanded(newState);
              localStorage.setItem('navExpanded', String(newState));
            }}
            aria-label={expanded ? "Retrair menu" : "Expandir menu"}
          >{expanded ? "◄" : "►"}</button>
          <div className={styles.buttonBlock}>
            {sections.map((section, index) => (
              <button
                key={section}
                className={`${styles.navItem} ${expanded ? styles.expanded : ""} ${isActive(section) ? styles.active : ''
                  }`}
                onClick={() => scrollToSection(section)}
                onMouseEnter={() => {
                  updateSvgColors(index, true);
                }}
                onMouseLeave={() => {
                  updateSvgColors(index, false);
                }}
                aria-label={section}
                data-tooltip={titles[index]}
                title={!expanded ? titles[index] : undefined}
              >
                <span className={`${styles.buttonContent} ${expanded ? styles.expanded : ""}`}>
                  <object
                    ref={el => {
                      if (el) {
                        objectRefs.current[index] = el;
                        if (el.contentDocument?.readyState === 'complete') {
                          updateSvgColors(index);
                        }
                      }
                    }}
                    type="image/svg+xml"
                    data={`/img/icons/${section}.svg`}
                    aria-label={!expanded ? titles[index] : ""}
                    aria-hidden="true"
                    onLoad={() => {
                      updateSvgColors(index);
                      setTimeout(() => updateSvgColors(index), 300);
                    }}
                    style={{ 
                      cursor: 'pointer', 
                      pointerEvents: 'none',
                    }}
                    className={styles.icon}
                  />
                  {expanded && <span>{titles[index]}</span>}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;