import { useContext, useState } from "react";
import CartContext from '../../store/cart-context';
import Modal from "../UI/Modal";
import CartItem from './CartItem';
import CartUserForm from './CartUserForm';
import classes from './Cart.module.css';

const Cart = (props) => {
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [customerName, setCustomerName] = useState(null);
    const ctx = useContext(CartContext)
    const totalAmount = ctx.totalAmount.toFixed(2);
    const itemsLength = +ctx.items.length;

    const showFormHandler = () => {
        setShowOrderForm(true)
    };
    const formSubmitHandler = () => {
        //on form submission here
    };

    let showOrderBtn, content, emptyCart;
    showOrderBtn = itemsLength > 0 && !showOrderForm;
    emptyCart = itemsLength < 1 && !showOrderBtn;
    if (showOrderBtn) {
        content = <button type="button" onClick={showFormHandler} className={classes.button85}>Order</button>;
    }
    if (emptyCart && !showOrderBtn) {
        content = "Cart is empty!😞";
    }

    const orderPlacedContent = <p className="fs-5 bg-primary-subtle text-center shadow p-1 m-1 mt-3 animate__animated animate__bounce"><span className='text-capitalize'>{customerName + "'s "}</span>Order placed!🎉 </p>

    const showOrderPlacedHandler = (enteredName) => {
        setCustomerName(enteredName);
        setOrderPlaced(true);
    };


    return (
        <div className={`d-flex justify-content-center align-items-start position-relative`}>
            <Modal onHideCart={props.onHideCart}>
                <p className="d-inline p-2 pe-3 fs-5 fw-semibold text-center border border-start-0 border-danger-subtle rounded-end bg-danger bg-opacity-10 border-3">Your Cart</p>

                <div className={`${classes.cartDiv}`}>
                    {ctx.items.map((item) =>
                        <CartItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                            onAdd={ctx.addItem.bind(null, {
                                ...item,
                                amount: +1
                            })}
                            onRemove={ctx.removeItem.bind(null, item.id)}
                        />
                    )}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div><span className="fw-semibold fst-italic">Total amount :</span> <span className="fs-4">{totalAmount}</span></div>
                    {content}
                </div>
                <div>
                    {orderPlaced && orderPlacedContent}
                </div>



                {showOrderForm && !emptyCart && <CartUserForm onOrderPlaced={showOrderPlacedHandler} onSubmit={formSubmitHandler} onCancel={props.onHideCart} />}

            </Modal>
        </div>
    );
};
export default Cart;