import { useState } from "react";
import "./App.css";
import Wallet from "./components/connectWallet";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [productDetails, setProductDetails] = useState([]);

  const getData = async () => {
    const wallet = await Wallet();
    // console.log(wallet);
    const account = (await wallet.signer.getAddress()).valueOf();
    setCurrentAccount(account);

    const getProducts = await wallet.getProducts();
    setProductDetails(getProducts);
  };

  getData();

  return (
    <div className="App">
      <h1>Basic Marketplace</h1>
      <div id="wallet">Your wallet address is : {currentAccount}</div>

      <div>
        <h2>Add new item</h2>
        <div>
          <input type="text" id="new_itemName" placeholder="Item name.." />
          <input type="text" id="new_askingPrice" placeholder="Asking Price" />

          <div>
            <button type="button" className="btn">
              Add Item
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2>All Items</h2>

        {productDetails.map((data, i) => {
          return (
            <div key={i} className="card">
              <div className="container">
                <strong>Item Name</strong>: {data.itemName}
                <br />
                <strong>Item Creator</strong>: {data.creator}
                <br />
                <strong>Item Owner</strong>: {data.owner}
                <br />
                <strong>Asking Price</strong>: {data.askingPrice.toString()}
                <br />
                <strong>Item Status</strong>:{" "}
                {data.isSold.toString().toUpperCase()}
                <br />
                <button type="button" className="buyBtn" itemID="0">
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
