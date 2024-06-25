import { format, formatDistanceToNow } from 'date-fns';
import styles from '../css/modules/Post.module.css';
import React from 'react';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ptBR, ta } from 'date-fns/locale';

const Post = ({ author, publishedAt, content }) => {
  const [newCommmentText, setNewCommentText] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const publishedAtDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleCreateNewComment() {
    event.preventDefault();
    const newCommment = event.target.comment.value;
    setComments([...comments, newCommment]);
    setNewCommentText('');
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}r</span>
          </div>
        </div>
        <time
          title={publishedAtDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommmentText}
          name="comment"
          onChange={({ target }) => {
            setNewCommentText(target.value);
          }}
        />
        {comments && <button type="submit">Comentar</button>}
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />;
        })}
      </div>
    </article>
  );
};

export default Post;
