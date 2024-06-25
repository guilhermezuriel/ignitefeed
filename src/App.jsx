import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './css/global/global.css';
import styles from './css/modules/App.module.css';
import Post from './components/Post';
function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat',
      },
      content: [
        { type: 'paragraph', content: 'Fala galera' },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa, galera!',
        },
        { type: 'link', content: 'james.design/doctorcare' },
      ],
      publishedAt: new Date('2024-06-12 18:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat',
      },
      content: [
        { type: 'paragraph', content: 'Fala galera' },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa, galera!',
        },
        { type: 'link', content: 'james.design/doctorcare' },
      ],
      publishedAt: new Date('2024-06-12 20:00:00'),
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
