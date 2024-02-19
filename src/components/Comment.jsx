import styles from '../css/modules/Comment.module.css';

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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASklEQVR4nGNgGCmggYGB4T8a7iDXsP8U4oG3gIFUxQykq6e/Bf9J5I9awDAaRAyjqWgEBhEhMPgseEJGPfCEFAv8SLTkCVTPMAQA9hCmk99l5FAAAAAASUVORK5CYII=" />
            </button>
          </header>
          <p>Muito bom, Devon. Parabéns!</p>
        </div>
        <footer>
          <button>Aplaudir</button>
          <span>03</span>
        </footer>
      </div>
    </div>
  );
}
