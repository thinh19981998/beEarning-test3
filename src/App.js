import styles from './App.module.scss'
import './fonts/ClearSans-Medium.ttf';
import './fonts/ClearSans-Regular.ttf';
import './fonts/ClearSans-Bold.ttf';
import CreateWallet from './pages/CreateWallet';

function App() {
  return (
    <div className={styles['app']}>
      <CreateWallet />
    </div>
  );
}

export default App;
