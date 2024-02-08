import styles from '../css/modules/Sidebar.module.css';
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.cover}>
        <img
          src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user picture"
        />
        <div className={styles.profile}>
          <img src="https://github.com/guilhermezuriel.png" />
          <strong>Guilherme Zuriel</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">
            <span>Edite seu Perfil</span>
          </a>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;
