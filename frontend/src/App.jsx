import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Basic Marketplace</h1>
      <div id='wallet'>0x1234</div>

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
        <div id='addItems'>
          {/* load items */}
        </div>

        <div id='itemTemplate'>
          <div className='card'>
            <div className='container'>
              <strong>Item Name</strong>: <span className='itemName'></span><br />
              <strong>Item Creator</strong>: <span className='itemCreator'></span><br />
              <strong>Item Owner</strong>: <span className='itemOwner'></span><br />
              <strong>Asking Price</strong>: <span className='askingPrice'></span><br />
              <strong>Item Status</strong>: <span className='itemStatus'></span><br />
              <button type='button' className='buyBtn' itemID='0'>Buy</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
