
import Header from './components/Header';
import Hero from './components/Hero';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { useEffect, useState } from 'react';
import { ToastContainer , toast  } from 'react-toastify';
import { saveCoins, getCoins } from './ls/LS';

function App() {

  const [coin, setCoin] = useState(0);
  const [newCoin, setNewCoin] = useState(null);

    // Load coins from localStorage on mount
    useEffect(() => {
      const currentData = getCoins();
      setCoin(currentData);
   
     },[]);

     const coinHandler = (e) => {
      e.preventDefault();
      const earnedAmount = 80000;
    
      setCoin((prevCoin) => {
        const updatedCoin = prevCoin + earnedAmount;
        setNewCoin(updatedCoin); // Only store newly earned amount for toast
        saveCoins(updatedCoin); // ✅ Directly save correct value
        return updatedCoin;
      });
    };
    



  useEffect(()=>{
    if (newCoin!==null) {
      toast.success(`congrats! you've earned ${newCoin} Coins`,{
        position: "top-center",
      })
    }
  },[newCoin])
  
  return (
    <>
      <main>
        <Header coin={coin} />
        <Hero coinHandler={coinHandler} />
        <Contents />
        <Newsletter />
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App



