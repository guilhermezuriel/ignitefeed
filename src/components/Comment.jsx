import styles from '../css/modules/Comment.module.css';
import Trash from '../../src/assets/trash.svg?react';
import { Avatar } from './Avatar';
import React from 'react';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  const [likeCount, setLikeCount] = React.useState(0);
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guilhermezuriel.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Zuriel</strong>
              <time>Cerca de 1hr atrás</time>
            </div>
            <button title="Deletar" onClick={handleDeleteComment}>
              <Trash />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nM2UPUsDQRCGgx/4ga0gplALtbHQys5WBCvRKo0iaG2ljWwjyGXeh+VimsPOQvDstBYEg4WooP4hWTCQIneclyAODOws7z47szu7lcpfGzBmZttAtWeYc24AuAfOgfc4jkd6ze4YOAtjSTfe+8XSMDNblfTonBtyzo0CH2FcCtZsNieAF+/97E92u5JOS2cHXAM77VjSc71enyoL2wMu27GZrQFfkg46PWxoZnO5sCAIpSZJMt4xN9MFdijpRNKbmS1lAiVdSFovWo2ZHUmq5QFb4UaLAiVtAg9Jkgx3FQCvRWEda24lLfQFKGkl9GeapoN9AYZ3LqmV2VLAUxAVBUZRNC3pM47jySxgw8w2fpFhA9jPE1TDr+K9Xy4IxMy2ckVRFM1LugvnWcCvMlvm39o3cyjHdd9gv6YAAAAASUVORK5CYII=" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
