import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from "../../store/cart-context";
import './MealItem.module.css';
import LazyLoad from '../../assets/lazyLoad.png'


const MealItem = (props) => {
    const ctx = useContext(CartContext);
    const items = ctx.items;


    const addToCartHandler = (amount) => {
        const currItemIndex = items.findIndex(item => item.id === props.id);
        const currItem = items[currItemIndex]

        if (currItem && currItem.amount > 9) {
            return;
        } else {
            ctx.addItem({
                key: props.id,
                id: props.id,
                name: props.name,
                price: props.price,
                amount: amount,
            })
        }

    }
    return (<>

        <div className="card shadow border-0 animate__animated animate__zoomIn" style={{ width: "18rem" }} >
            <img src={props.imgUrl === "" ? LazyLoad : props.imgUrl} className="card-img-top" alt="props.name" loading="lazy" width="25" height="200" />
            <div className="card-body d-flex flex-column justify-content-between">
                {/* <p className="card-text">{props.description}</p> */}
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title text-capitalize">{props.name}</h5>
                    <h6>₹{props.price}</h6>
                </div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </div>
        {/* src\assets\food images\samosa.jpg
        G:\Udemy React-23\self_project1\src\assets\food images\samosa.jpg */}
    </>)
};
export default MealItem;