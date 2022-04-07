import React,{useEffect, useState} from 'react'

const Coin = () => {
    const [loading , setLoading] = useState(true);
    const [coins, setCoins] = useState([]); 
  
    useEffect(()=>{
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resoponse) => resoponse.json() )
      .then((json)=>{
        setCoins(json);
        setLoading(false);
      });
    },[])
    return (
    <div>
      <h1>The Coins! {loading ?"":`(${coins.length})`}</h1>
      <br/>
      {loading ? <strong>Loading...</strong>:<select>
        {coins.map((coin)=>
          <option>
            {coin.name}({coin.symbol}): $ {coin.quotes.USD.price}USD
          </option>
        )}
      </select>}
      
    </div>
    
    );
}

export default Coin