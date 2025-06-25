import { Props } from "@/interfaces"
import styles from "./Canal.module.css"
import MembersVideos from './MembersVideos';

const Canal: React.FC<Props> = ({ id }) => {
	return (
    <div id={id} className={`${styles.component}`}>
      <h1 className={`${styles.tituloBloco} ${styles.left}`}>
        Olá pessoas, esse é<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mais um vídeo meu<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aqui na internet!</h1>
      <div className={`${styles.textBlock}`}>
        <p>Conteúdo.</p>
      </div>
      <div className={`${styles.membersVideos}`}>
        <MembersVideos />
      </div>
    </div>
	)
}

export default Canal