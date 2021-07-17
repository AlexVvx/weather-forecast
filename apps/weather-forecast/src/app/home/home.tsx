import './home.module.scss';
import { useState, useEffect } from 'react';

export interface HomeProps { }

export const Home = ({ }) => {
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  const [count, setCount] = useState(0);
  return (<div>
    <p>clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>click</button>
  </div>)
}

export default Home;
