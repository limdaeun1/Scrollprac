import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

import { Link, useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import D from "./components/D";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/b') {
        document.querySelector('.b')?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    }
  }, [location.pathname]);

  return <>
      <Link to='/a'>
        <button>A</button>
      </Link>
      <Link to='/b'>
        <button>B</button>
      </Link>
      <Link to='/c'>
        <button>C</button>
      </Link>
      <A />
      <B />
      <C />
      <D />
  </>
}

export default App;