import { Props } from "@/interfaces"
import styles from "./Ajuda.module.css"

const Ajuda: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={`${styles.component}`}>
      <h1 className={`${styles.h1} ${styles.tituloBloco}`}>O Pirulla PRECISA da sua ajuda!</h1>
      <div className={`${styles.vakinha}`}>
        <a href="https://www.vakinha.com.br/vaquinha/pirulla" target="_blank">
          <img src="/img/vakinha.svg" width={408} height={140} title="Vakinha para o Pirulla" />
        </a>
      </div>
      <div className={`${styles.textBlock}`}>
        <p>Comunicamos que nosso amigo Pirulla sofreu um AVC (acidente vascular cerebral) na noite do domingo, 25 de maio de 2025, em sua casa, em São Paulo.</p>
        <p>Ele foi prontamente atendido e está internado em uma UTI (unidade de terapia intensiva), recebendo os cuidados necessários.</p>
        <p>Apesar do quadro ser estável, ainda inspira atenção, e não há, por enquanto, uma estimativa segura sobre sua recuperação.</p>
        <p>Diante dessa situação, a comunidade de divulgadores científicos e amigos próximos estão se mobilizando para apoiar sua família e ajudar a manter seus canais em funcionamento, durante esse período de afastamento.</p>
        <p>Pedimos que evitem especulações e respeitem o tempo de recuperação e a privacidade do Pirulla e de seus familiares. Assim que houver informações consistentes que possam ser compartilhadas, atualizaremos por aqui.</p>
        <p>Todas as informações serão divulgadas nos canais oficiais: no Canal do Pirulla, <a href="https://www.youtube.com/@Pirulla25/community" target="_blank">na aba comunidades</a>, e nas redes d’Os Três Elementos [<a href="https://www.instagram.com/ostreselementospodcast/" target="_blank">instagram</a>] [<a href="https://www.youtube.com/@ostreselementos/community" target="_blank">youtube</a>].</p>
        <p>Agradecemos, desde já, todo o apoio e solidariedade que temos recebido.</p>
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
    </div>    
	)
}

export default Ajuda