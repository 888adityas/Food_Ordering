import { useContext, useEffect, useState } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './SearchBar.module.css';
import CartContext from '../../store/cart-context';
const Header = (props) => {
   const ctx = useContext(CartContext);
   const searchMeal = ctx.searchMeal;
   const [currentSearchVal, setCurrentSearchVal] = useState('');

   const submitHandler = (event) => {
      setCurrentSearchVal(event.target.value);
      // searchMeal(currentSearchVal)
   }
   useEffect(() => {
      const timer = setTimeout(() => {
         searchMeal(currentSearchVal)
      }, 350)
      return () => {
         clearTimeout(timer)
      }
   }, [currentSearchVal, searchMeal])



   return (<>
      <div className={`navbar p-3 mx-md-5 rounded ${classes.stickyTop} ${classes.backDropBlur} ${classes.headerBg}`}>
         <div className="container-fluid">
            <div className="d-flex w-50">
               <input onChange={submitHandler} className="form-control shadow me-2" placeholder="Search Meal" type="search" value={currentSearchVal}
               />
            </div>
            <HeaderCartButton onShowCart={props.onShowCart} />
         </div>
      </div>
   </>);
}

export default Header;