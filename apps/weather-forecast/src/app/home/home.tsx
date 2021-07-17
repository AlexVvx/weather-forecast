import './home.module.scss';
import { useState, useEffect } from 'react';

/* eslint-disable-next-line */
export interface HomeProps { }

export const Home = ({ }) => {
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  const [count, setCount] = useState(0);
  return (<div>
    <p>clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>click</button>
    {/* pogoda.by */}
  </div>)
}

// export function Home(props: HomeProps) {
//   return (
//     <div>
//       {/* https://6.pogoda.by/ */}
//       <h1>Welcome to home!</h1>
//     </div>
//   );
// }

export default Home;
