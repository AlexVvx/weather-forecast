import Menu from "../menu/menu";
import "./landing.module.scss";

export interface LandingProps {}

export function Landing(props: LandingProps) {
  return (
    <div>
      <Menu />
      <h1>Welcome to landing!</h1>
    </div>
  );
}

export default Landing;
