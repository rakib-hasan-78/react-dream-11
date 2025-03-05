
import Header from './components/Header';
import Hero from './components/Hero';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { useState } from 'react';

function App() {

  const [coin, getCoin] = useState(0);
  const coinHandler = (e)=>{
    e.preventDefault();
    getCoin(coin=> coin+80000);
  }
  return (
    <>
      <main>
        <Header coin={coin} />
        <Hero coinHandler={coinHandler} />
        <Contents />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App



