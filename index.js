import React, { useState } from 'react';

const App = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [itemPrices, setItemPrices] = useState({});
  const [inventory, setInventory] = useState([]);

  const setItemPrice = () => {
    const itemPrice = parseFloat(price);
    if (isNaN(itemPrice) || itemPrice <= 0) {
      setMessage("Error: Price must be a number greater than zero");
      return;
    }
    setItemPrices({ ...itemPrices, [itemName]: itemPrice });
    setMessage(`The price of ${itemName}  ${price} ETH`);
  };


  const purchaseItem = () => {
    const itemPrice = itemPrices[itemName];
    if (itemPrice === undefined) {
      setMessage(`Error: Price is not set for ${itemName}`);
      return;
    }

    const item = { name: itemName, price: itemPrice };
    setInventory([...inventory, item]);
    setMessage(`You may reedem the book `);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100vh', fontFamily: 'Geneva', background: 'transparent' }}>
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '20px', border: '2px solid #000', borderRadius: '10px', }}>
        <h1 style={{ color: '#000', textAlign: 'center' }}>Books Cart</h1>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Book Title " 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '2px solid #ccc', fontSize: '16px',fontFamily: 'Geneva', width: 'calc(50% - 10px)' }}
          />
          <input 
            type="text" 
            placeholder="Amount of Book in ETH" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            style={{ padding: '8px', borderRadius: '5px', border: '2px solid #ccc', fontSize: '16px',fontFamily: 'Geneva', width: 'calc(40% - 10px)' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={setItemPrice} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#0000FF', color: '#ffffff', cursor: 'pointer', fontSize: '14px',fontFamily: 'Geneva', marginRight: '10px' }}
          >
            Book Cost
          </button>
          <button 
            onClick={purchaseItem} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#0000FF', color: '#ffffff', cursor: 'pointer', fontSize: '14px',fontFamily: 'Geneva', marginLeft: '10px',  }}
          >
            Reedem Book
          </button>
        </div>
        <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{message}</p>
        <div>
        <h2 style={{ color: '#000',fontFamily: "Geneva"}}>Reedem Book</h2> 
          <ul>
            {inventory.map((item, index) => (
              <li key={index}>{item.name} - {item.price} ETH</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
