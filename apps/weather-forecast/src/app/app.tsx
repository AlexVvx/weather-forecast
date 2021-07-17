import styles from "./app.module.scss";

import { ReactComponent as Logo } from "./logo.svg";
import { Home } from "./home/home";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { forecastReducer } from './reducers';
import forecastSaga from "./sagas/forecast.saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(forecastReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(forecastSaga)

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
