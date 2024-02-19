import styles from '../css/modules/Comment.module.css';
import Trash from '../../src/assets/trash.svg?react';
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/guilhermezuriel.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Zuriel</strong>
              <time>Cerca de 1hr atrás</time>
            </div>
            <button title="Deletar">
              <Trash />
            </button>
          </header>
          <p>Muito bom, Devon. Parabéns!</p>
        </div>
        <footer>
          <button>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nM2UPUsDQRCGgx/4ga0gplALtbHQys5WBCvRKo0iaG2ljWwjyGXeh+VimsPOQvDstBYEg4WooP4hWTCQIneclyAODOws7z47szu7lcpfGzBmZttAtWeYc24AuAfOgfc4jkd6ze4YOAtjSTfe+8XSMDNblfTonBtyzo0CH2FcCtZsNieAF+/97E92u5JOS2cHXAM77VjSc71enyoL2wMu27GZrQFfkg46PWxoZnO5sCAIpSZJMt4xN9MFdijpRNKbmS1lAiVdSFovWo2ZHUmq5QFb4UaLAiVtAg9Jkgx3FQCvRWEda24lLfQFKGkl9GeapoN9AYZ3LqmV2VLAUxAVBUZRNC3pM47jySxgw8w2fpFhA9jPE1TDr+K9Xy4IxMy2ckVRFM1LugvnWcCvMlvm39o3cyjHdd9gv6YAAAAASUVORK5CYII=" />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
