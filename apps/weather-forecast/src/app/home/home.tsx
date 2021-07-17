import "./home.module.scss";
import { Landing } from "../landing/landing";
import { GetForecastForm } from "../get-forecast-form/get-forecast-form";
import { ForecastHistory } from "../forecast-history/forecast-history";

export interface HomeProps {}

export const Home = ({}) => {
  return (
    <div>
      <Landing />
      <GetForecastForm />
      <ForecastHistory />
    </div>
  );
};

export default Home;
