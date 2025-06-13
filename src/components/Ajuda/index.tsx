import { Props } from "@/interfaces"
import styles from "./Ajuda.module.css"
import Image from 'next/image';

const Ajuda: React.FC<Props> = ({id}) => {
	return (
    <div id={id} className={`${styles.component}`}>
      <h1 className={`${styles.h1} ${styles.tituloBloco}`}>O Pirulla PRECISA da sua ajuda!</h1>
      <div className={`${styles.textBlock}`}>
        <p>Comunicamos que nosso amigo Pirulla sofreu um AVC (acidente vascular cerebral) na noite do domingo, 25 de maio de 2025, em sua casa, em São Paulo. Ele foi prontamente atendido e está internado em uma UTI (unidade de terapia intensiva), recebendo os cuidados necessários. Apesar do quadro ser estável, ainda inspira atenção, e não há, por enquanto, uma estimativa segura sobre sua recuperação.</p>
        <p>Diante dessa situação, a comunidade de divulgadores científicos e amigos próximos estão se mobilizando para apoiar sua família e ajudar a manter seus canais em funcionamento, durante esse período de afastamento. Pedimos que evitem especulações e respeitem o tempo de recuperação e a privacidade do Pirulla e de seus familiares. Assim que houver informações consistentes que possam ser compartilhadas, atualizaremos por aqui.</p>
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
      <h1 className={`${styles.h1}`}>Atualização &#8212; 13/06/2025</h1>
      <div className={`${styles.textBlock}`}>
        <p>Gostaríamos de comunicar que o Pirulla recebeu alta da UTI, mas segue hospitalizado, em acompanhamento médico. Ele está estável e já iniciou as primeiras etapas da reabilitação, que será uma parte essencial de sua recuperação. Neste momento, também passa por uma nova bateria de exames, pois a equipe médica ainda busca identificar a causa do AVC ocorrido em 25 de maio.</p>
        <p>Sabemos o quanto ele é querido por tanta gente e, por isso, queremos reforçar que todo o apoio recebido até aqui, como mensagens, homenagens, visualizações e doações, tem sido fundamental.</p>
        <p>Para quem quiser contribuir com sua recuperação e oferecer suporte à família e à equipe que trabalha com ele, está no ar uma vaquinha recorrente. Os recursos arrecadados ajudarão a custear o tratamento, os cuidados de reabilitação, a continuidade dos projetos e a estabilidade financeira neste período de afastamento.</p>
        <p>A campanha conta com o apoio direto da equipe do Vakinha. Além de garantir os cuidados que ele precisa, essa mobilização ajuda a manter vivo o trabalho de divulgação científica que o Pirulla construiu com tanto empenho ao longo dos anos.</p>
        <p>Seguimos confiantes na recuperação e, quando houver novas informações relevantes, atualizaremos por aqui de forma responsável e respeitosa.</p>
        <p className={`${styles.bold} ${styles.right}`}>&#8212; Equipe d’Os Três Elementos</p>
      </div>
      <h1 className={`${styles.h1}`}>Como você pode ajudar</h1>
      <div className={`${styles.textBlock}`}>
        <p>Se puder contribuir financeiramente, acesse a vaquinha criada através do botão abaixo:</p>
        <div className={`${styles.vakinha}`}>
          <a href="https://www.vakinha.com.br/vaquinha/pirulla" target="_blank">
            <Image src="/img/vakinha.svg" width={408} height={140} alt="Vakinha para o Pirulla" title="Vakinha para o Pirulla" />
          </a>
        </div>
        <p>Outra forma de contribuição é tornando-se membro do canal.&nbsp;</p>
        <p>Adicionalmente (ou se não puder contribuir financeiramente), maratonar os vídeos ajuda a manter o canal vivo para o algoritmo. Sugerimos deixar <a href="https://youtube.com/playlist?list=PL6YDp0v-GYFWXRrlG7EE0B3plFqdb_3Zj&si=x_0y2pPLs40UK144" target="_blank">esta playlist</a> tocando.</p>
      </div>
    </div>    
	)
}

export default Ajuda