const getCoins = () => {
    const getLS = localStorage.getItem('coins');
    return getLS ? JSON.parse(getLS) : 0; 
}

const saveCoins = (coins) => {
    localStorage.setItem('coins', JSON.stringify(coins));
}

// ✅ Fix addCoins so it doesn't double-add
const addCoins = (amount) => {
    const currentCoins = getCoins();
    const updatedCoins = currentCoins + amount;
    saveCoins(updatedCoins);
};

const getUIChange = ()=>{
    const getLS = localStorage.getItem('UI');
    return getLS ? JSON.parse(getLS) : '';
}

const saveUI =(UI)=>{
    localStorage.setItem('UI', JSON.stringify(UI))
}



export {getCoins, addCoins, saveCoins, getUIChange, saveUI}