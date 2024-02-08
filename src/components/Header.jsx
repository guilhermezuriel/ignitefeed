import styles from '../css/modules/Header.module.css';
import IgniteSimbol from '../assets/Ignitesimbol.svg';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <div className={styles.headerImg}>
          <img src={IgniteSimbol} alt="" />
        </div>
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
};

export default Header;
