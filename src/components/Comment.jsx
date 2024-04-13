import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/thailalemes.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thaila Lemes</strong>
              <time title="31 de Marco as 01:08" dateTime="2024-03-31 01:08:30">
                Cerca de 1h atras
              </time>
            </div>

            <button title="Deletar comentario">
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabens!</p>
        </div>
        <footer>
            <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
