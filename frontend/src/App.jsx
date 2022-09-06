import { useState } from "react";
import "./App.css";
import MarketPlace from "./components/connectWallet";

function App() {

  const [currentAccount, setCurrentAccount] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [input, setInput] = useState({
    productName: "",
    productPrice: ""
  });

  const getContract = async () => {
    const marketPlace = await MarketPlace();
    // console.log(marketPlace);
    const account = (await marketPlace.signer.getAddress()).valueOf();
    setCurrentAccount(account);

    const getProducts = await marketPlace.getProducts();
    setProductDetails(getProducts);

    return marketPlace;
  };

  function handleInputChange(event) {
    const {name, value} = event.target;

    setInput((product) => {
      return {
        ...product,
        [name]: value
      }
    })
  }

  async function submitProduct(event) {
    event.preventDefault();
    console.log(input.productName, input.productPrice);
    const contract = await getContract();
    await contract.addProduct(input.productName, input.productPrice);
  }

  getContract();

  return (
    <div className="App">
      <h1>Basic Marketplace</h1>
      <div id="marketPlace">Your marketPlace address is : {currentAccount}</div>

      <div>
        <h2>Add new item</h2>
        <div>
          <form onSubmit={submitProduct}>
            <label>
              <input name="productName" onChange={handleInputChange} value={input.productName} placeholder="Product name.." />
            </label>

            <label>
              <input name="productPrice" onChange={handleInputChange} value={input.productPrice} placeholder="Asking Price" />
            </label>
          </form>
          <div>
            <button type="button" onClick={submitProduct} className="btn">
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
