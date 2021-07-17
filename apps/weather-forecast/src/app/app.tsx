import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { Home } from './home/home';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to weather-forecast!</h1>
      </header>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
