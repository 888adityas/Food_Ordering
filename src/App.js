import { useState } from 'react';
import './App.css';
import Searchbar from './components/layout/SearchBar';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/cart-provider';
import NavbarBrand from './components/layout/NavbarBrand';
import FoodSlogan from './components/foodSlogan/FoodSlogan';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (<>

    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <NavbarBrand />
      <FoodSlogan />
      <Searchbar onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>

  </>);
}

export default App;
