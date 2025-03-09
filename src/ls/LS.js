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


// ** LS for selected Players =====>

const selectedPlayerGetLS = ()=>{
    const LS = localStorage.getItem('selected-players');
    return LS ? JSON.parse(LS) : [];
}

const selectedPlayerSaveLS = (player)=>{
    localStorage.setItem('selected-players', JSON.stringify(player))
}

const addSelectedPlayers = (id)=>{
    const getLS = selectedPlayerGetLS();
    if (!getLS.includes(id)) {
        getLS.push(id)
        selectedPlayerSaveLS(getLS)
    }
}

const removeSelectedPlayer = id =>{
    const getLS = selectedPlayerGetLS();
    const removePlayer = getLS.filter(ids=>ids!==id);
    selectedPlayerSaveLS(removePlayer);
}

export {getCoins, addCoins, saveCoins, getUIChange, saveUI, addSelectedPlayers, selectedPlayerGetLS, removeSelectedPlayer}
