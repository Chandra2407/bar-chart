import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { data } from './constants/data';

function App() {
  const [size, setSize] = useState(0)

  useEffect(() => {
      setSize(window.screen.width)
    // window.addEventListener('resize', resize)
    // return () => {
    //   window.removeEventListener('resize', resize)
    // }
    console.log(window.screen.width,size)
  }, [window.screen.width])

  return (
    <div className="App">
      {
        data.map(e => {
          return <BarChart data={e} />
        })
      }
    </div>
  );
}

export default App;
