import { useState } from 'react';
import './App.css';
import Wallet from "./components/connectWallet";

function App()  {

  const [currentAccount, setCurrentAccount] = useState("");
  let getProducts;
 
  const getData = async() => {
    const wallet = await Wallet();
    // console.log(wallet);
    const account = (await wallet.signer.getAddress()).valueOf();
    setCurrentAccount(account);

    getProducts = await wallet.getProducts();
    console.log(getProducts);
  }

  getData();

  return (
    <div className="App">
      <h1>Basic Marketplace</h1>
      <div id='wallet'>Your wallet address is : {currentAccount}</div>

      <div>
        <h2>Add new item</h2>
        <div>
          <input type="text"  id='new_itemName' placeholder='Item name..'/>
          <input type="text" id='new_askingPrice' placeholder='Asking Price'/>

          <div>
            <button type='button' className='btn'>Add Item</button>
          </div>
        </div>
      </div>

      <div>
        <h2>All Items</h2>

          {getProducts.map((data, i) => {
            console.log(data);
            return (
              <div key={i} id='itemTemplate'>
              <div className='card' >
                <div className='container'>
                  <strong>Item Name</strong>: {""}<br />
                  <strong>Item Creator</strong>: {""}<br />
                  <strong>Item Owner</strong>: {""}<br />
                  <strong>Asking Price</strong>: {""}<br />
                  <strong>Item Status</strong>: {""}<br />
                  <button type='button' className='buyBtn' itemID='0'>Buy</button>
                </div>
              </div>
            </div>
           )
          })}   
      </div>
    </div>
  );
}

export default App;
