import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './css/global/global.css';
import styles from './css/modules/App.module.css';
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
