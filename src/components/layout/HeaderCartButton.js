import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const totalCartItems = ctx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0)
    const [animationClass, setAnimationClass] = useState();
    const btnAnimation = !animationClass ? "img-fluid " : "img-fluid animate__animated animate__headShake";

    useEffect(() => {
        const timer = setTimeout(() => {
            if (totalCartItems === 0) {
                setAnimationClass(false)
            } else (
                setAnimationClass(true)
            )
        }, 150)

        return () => {
            setAnimationClass(false)
            clearTimeout(timer)
        }
    }, [totalCartItems])

    return (<>
        <button type="button" className={` btn btn-light position-relative shadow `} onClick={props.onShowCart}>
            <img className={btnAnimation} width="30" height="25" src="https://cdn-icons-png.flaticon.com/512/6680/6680292.png" alt="cart" />

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCartItems}
            </span>
        </button>
    </>);
}

export default HeaderCartButton;