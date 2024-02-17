import styles from '../css/modules/Post.module.css';
import React from 'react';

const Post = () => {
  const [comment, setComment] = React.useState('');
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/guilhermezuriel.png"
            alt="profile pic"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Zuriel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="8 de fevereiro de 2024" dateTime="2024-02-08 20:23:20">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do
          projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={comment}
          onChange={({ target }) => {
            setComment(target.value);
          }}
        />
        {comment && <button type="submit">Comentar</button>}
      </form>
    </article>
  );
};

export default Post;
