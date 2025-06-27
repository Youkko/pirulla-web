import React, { useState, useCallback } from "react"
import { Props } from "@/interfaces"
import styles from "./Ajuda.module.css"
import Image from 'next/image';

const Ajuda: React.FC<Props> = ({id}) => {
	const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const textToCopy = "00020126440014BR.GOV.BCB.PIX0122pirulla@vakinha.com.br5204000053039865802BR5916TRANSFEERA IP SA6009Sao Paulo62070503***6304D4C2";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset após 2 segundos
      })
      .catch(err => {
        console.error('Falha ao copiar texto: ', err);
      });
  }, []);

  return (
    <div id={id} className={`${styles.component}`}>
      <h1 className={`${styles.h1} ${styles.tituloBloco}`}>O Pirulla PRECISA da sua ajuda!</h1>

      <h1 className={`${styles.h1}`}>Atualização &#8212; 27/06/2025</h1>
      <div className={`${styles.textBlock}`}>
        <p>Gostaríamos de comunicar que, na última quarta-feira (26 de Junho), o Pirulla foi transferido para um centro de reabilitação. Embora ainda siga como paciente do hospital e tenha exames pendentes, essa etapa simboliza um avanço importante, voltado para a recuperação funcional com apoio especializado.</p>
        <p>Ele já iniciou as terapias de reabilitação, que incluem fisioterapia, fonoaudiologia e terapia ocupacional, e está sendo acompanhado de perto por uma equipe multiprofissional. Aos poucos, vai retomando seu jeitinho: já começaram as primeiras reclamações.</p>
        <p>Mais uma vez, agradecemos imensamente por todo o apoio, carinho e generosidade. <a href="https://www.vakinha.com.br/vaquinha/pirulla" target="_blank">A vaquinha oficial</a> continua ativa para quem quiser contribuir com o tratamento e a manutenção dos projetos durante esse período.</p>
        <p>Seguimos confiantes e esperançosos.</p>
        <p className={`${styles.bold} ${styles.right}`}>&#8212; Equipe d’Os Três Elementos</p>
      </div>

      <h1 className={`${styles.h1}`}>Atualização &#8212; 21/06/2025</h1>
      <div className={`${styles.textBlock}`}>
        <p>O quadro do Pirulla permanece estável. Ele segue hospitalizado, em reabilitação, e passando por uma nova bateria de exames, já que a equipe médica ainda busca compreender a causa do AVC ocorrido em 25 de maio.</p>
        <p>Agradecemos, mais uma vez, por todo o apoio, carinho e mobilização que temos recebido. Além da vaquinha oficial que continua no ar, queremos convidar quem estiver em São Paulo para participar de uma ação solidária muito especial:</p>
        <p className={`${styles.bold} ${styles.center}`}>Hamburgada Solidária pelo Pirulla</p>
        <span><Image className={`${styles.sevenkingslogo}`} src="/img/7k.svg" width={0} height={0} alt="Logotipo da Seven Kings" title="Seven Kings" /></span>
        <p className={`${styles.bold} ${styles.center}`}>📍 Seven Kings - unidade Perdizes (SP)</p>
        <p className={`${styles.bold} ${styles.center}`}>📅 25/06/2025, a partir das 19h</p>
        <div>
          <iframe
            className={`${styles.mapa}`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316.066728119129!2d-46.6696839240623!3d-23.53130237882055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce581cc919d821%3A0x85a077986c7aa027!2sR.%20Dr.%20C%C3%A2ndido%20Espinheira%2C%20812%20-%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005004-000!5e0!3m2!1sen!2sbr!4v1750826845676!5m2!1sen!2sbr"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p className={`${styles.center}`}>Um burguer exclusivo será servido, e toda a renda das vendas será revertida para a família do Pirulla, ajudando a custear sua recuperação.</p>
        <p className={`${styles.center}`}>É uma oportunidade de se reunir com amigos, celebrar a ciência e apoiar de forma concreta alguém que marcou a vida de tanta gente com seu trabalho.</p>
        <p className={`${styles.center}`}>Muito obrigado por continuarem com a gente nessa corrente.</p>
        <p className={`${styles.bold} ${styles.right}`}>&#8212; Equipe d’Os Três Elementos</p>
      </div>
      
      <h1 className={`${styles.h1}`}>Atualização &#8212; 13/06/2025</h1>
      <div className={`${styles.textBlock}`}>
        <p>Gostaríamos de comunicar que o Pirulla recebeu alta da UTI, mas segue hospitalizado, em acompanhamento médico. Ele está estável e já iniciou as primeiras etapas da reabilitação, que será uma parte essencial de sua recuperação. Neste momento, também passa por uma nova bateria de exames, pois a equipe médica ainda busca identificar a causa do AVC ocorrido em 25 de maio.</p>
        <p>Sabemos o quanto ele é querido por tanta gente e, por isso, queremos reforçar que todo o apoio recebido até aqui, como mensagens, homenagens, visualizações e doações, tem sido fundamental.</p>
        <p>Para quem quiser contribuir com sua recuperação e oferecer suporte à família e à equipe que trabalha com ele, está no ar uma vaquinha recorrente. Os recursos arrecadados ajudarão a custear o tratamento, os cuidados de reabilitação, a continuidade dos projetos e a estabilidade financeira neste período de afastamento.</p>
        <p>A campanha conta com o apoio direto da equipe do Vakinha. Além de garantir os cuidados que ele precisa, essa mobilização ajuda a manter vivo o trabalho de divulgação científica que o Pirulla construiu com tanto empenho ao longo dos anos.</p>
        <p>Seguimos confiantes na recuperação e, quando houver novas informações relevantes, atualizaremos por aqui de forma responsável e respeitosa.</p>
        <p className={`${styles.bold} ${styles.right}`}>&#8212; Equipe d’Os Três Elementos</p>
      </div>
      
      <h1 className={`${styles.h1}`}>Atualização &#8212; 06/06/2025</h1>
      <div className={`${styles.textBlock}`}>
        <p>Queremos atualizar vocês sobre o estado de saúde do nosso amigo Pirulla. Ele segue internado, acordado e respondendo bem às primeiras avaliações médicas. Ainda é cedo para falar sobre progressos ou eventuais desafios, mas estamos confiantes e otimistas com a recuperação.</p>
        <p>Gostaríamos de expressar nosso profundo agradecimento a todos os fãs, seguidores, amigos e colegas divulgadores científicos que têm colaborado generosamente, seja por meio da vaquinha, visualizações de vídeos em seu canal ou com mensagens de carinho e admiração. Esse apoio faz toda a diferença para o Pirulla, para sua família e para todos nós.</p>
        <p>Pedimos que continuem respeitando a privacidade dele e de sua família neste momento.</p>
        <p>Assim que houver informações relevantes que possam ser compartilhadas, atualizaremos por aqui de forma responsável.</p>
        <p className={`${styles.bold} ${styles.right}`}>&#8212; Equipe d’Os Três Elementos</p>
      </div>
      
      <h1 className={`${styles.h1}`}>Publicação inicial &#8212; 30/05/2025</h1>
      <div className={`${styles.textBlock}`}>
        <p>Comunicamos que nosso amigo Pirulla sofreu um AVC (acidente vascular cerebral) na noite do domingo, 25 de maio de 2025, em sua casa, em São Paulo. Ele foi prontamente atendido e está internado em uma UTI (unidade de terapia intensiva), recebendo os cuidados necessários. Apesar do quadro ser estável, ainda inspira atenção, e não há, por enquanto, uma estimativa segura sobre sua recuperação.</p>
        <p>Diante dessa situação, a comunidade de divulgadores científicos e amigos próximos estão se mobilizando para apoiar sua família e ajudar a manter seus canais em funcionamento, durante esse período de afastamento. Pedimos que evitem especulações e respeitem o tempo de recuperação e a privacidade do Pirulla e de seus familiares. Assim que houver informações consistentes que possam ser compartilhadas, atualizaremos por aqui.</p>
        <p>Todas as informações serão divulgadas nos canais oficiais: no Canal do Pirulla, <a href="https://www.youtube.com/@Pirulla25/community" target="_blank">na aba comunidades</a>, e nas redes d’Os Três Elementos [<a href="https://www.instagram.com/ostreselementospodcast/" target="_blank">instagram</a>] [<a href="https://www.youtube.com/@ostreselementos/community" target="_blank">youtube</a>].</p>
        <p>Agradecemos, desde já, todo o apoio e solidariedade que temos recebido.</p>
        <p className={`${styles.bold} ${styles.right}`}>&#8212; Equipe d’Os Três Elementos</p>
      </div>
      
      
      <h1 className={`${styles.h1}`}>Como você pode ajudar</h1>
      <div className={`${styles.textBlock} ${styles.formas}`}>
        <p>Se puder contribuir financeiramente, acesse a vaquinha criada através do botão abaixo:</p>
        <div className={`${styles.vakinha}`}>
          <a href="https://www.vakinha.com.br/vaquinha/pirulla" target="_blank">
            <Image src="/img/vakinha.svg" width={408} height={140} alt="Vakinha para o Pirulla" title="Vakinha para o Pirulla" />
          </a>
        </div>
        <span className={`${styles.bold}`}>IMPORTANTE:</span> por motivos contábeis, doações feitas através do site Vakinha tem um valor mínimo de R$ 25,00. Para doar valores menores, use a chave pix <span className={`${styles.bold}`}>pirulla@vakinha.com.br</span> (QR Code abaixo). Lembrando que agora você pode programar a transferência via pix para ser recorrente, selecionando a periodicidade no próprio aplicativo do banco, antes de finalizar a transferência.<br />
        <div className={`${styles.qr}`}>
          <a href="#"
								onClick={(e) => {
									e.preventDefault();
									handleCopy();
								}}
								style={{ cursor: 'pointer' }}
          >
            {isCopied ? 'Código Pix Copia-e-cola copiado!' : 'Toque no QR code para obter o código pix copia-e-cola'}<br /><br />
            <Image src="/img/qr.png" width={500} height={500} alt="QR Code do pix pirulla@vakinha.com.br" title="QR Code do pix pirulla@vakinha.com.br" />
          </a>
        </div>
        <p>Tornando-se membro do <a className={`${styles.bold}`} href="https://www.youtube.com/@Pirulla25" target="_blank">Canal do Pirulla</a>, do canal <a className={`${styles.bold}`} href="https://www.youtube.com/@ostreselementos" target="_blank">Os Três Elementos</a> e assinando o canal de <a className={`${styles.bold}`} href="https://www.youtube.com/@CortesdoPirullaOficial" target="_blank">Cortes do Pirulla</a>.</p>
        <p>Adicionalmente (ou se não puder contribuir financeiramente), maratonar os vídeos do canal do Pirulla ajuda a manter o canal vivo para o algoritmo. Sugerimos deixar <a href="https://youtube.com/playlist?list=PL2VViescWCYG4Ebta1WpW8gkmlUdygGbZ&si=1AGRJXgC8E7oN0KT" target="_blank">esta playlist</a> tocando.</p>
        <p>Maratonar os vídeos do canal <a className={`${styles.bold}`} href="https://www.youtube.com/@ostreselementos" target="_blank">Os Três Elementos</a> também ajuda, pois o projeto é mais uma fonte de renda do Pirulla. Sugerimos deixar <a href="https://www.youtube.com/playlist?list=PLY_qEheajeSrg9xpHj8EWvxxwClsG7YA1" target="_blank">esta playlist</a> tocando.</p>
      </div>
    </div>
	)
}

export default Ajuda