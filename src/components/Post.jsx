import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/thailalemes.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Thaila Lemes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="12 de Junho ás 08:00h" dateTime="2023-06-12 08:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. </p>
          <p>O nome do projeto é DoctorCare 🚀 </p>
          
          <p><a href=""> jane.design/doctorcare </a></p>
          <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>
            Deixe seu feedback
        </strong>

        <textarea placeholder="Deixe um comentario"/>
        <footer>
            <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}
