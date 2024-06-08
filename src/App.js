import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';

const { getData } = require('./db/db')
const foods = getData();
const telegram = window.Telegram.WebApp

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    telegram.ready()
  })

  const addItem = (food) => {
    const exist = cartItems.find(x => x.id === food.id);
    if (exist) {
      setCartItems(cartItems.map((item) => {
        return item.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : item;
      }))
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }])
    }
  }
  const removeItem = (food) => {
    const exist = cartItems.find(x => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(x => x.id !== food.id))
    } else {
      setCartItems(cartItems.map((item) => {
        return item.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : item;
      }))
    }
  }

  const onCheckout = () => {
    telegram.MainButton.text = "Pay ;)";
    telegram.MainButton.show();
  }
  return (
    <div className="App">
      <h1 className='heading'>Order Food On Your Telegram</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => {
          return <Card food={food} key={food.id} addItem={addItem} removeItem={removeItem} />
        })}
      </div>
    </div>
  );
}

export default App;
