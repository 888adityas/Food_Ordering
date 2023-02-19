import { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const CartUserForm = (props) => {
    const ctx = useContext(CartContext);

    const [enteredName, setEnteredName] = useState('');
    const [nameInputTouched, setNameInputTouched] = useState(false);

    const [enteredNumber, setEnteredNumber] = useState('');
    const [numberInputTouched, setNumberInputTouched] = useState(false);

    const [enteredCity, setEnteredCity] = useState('');
    const [cityInputTouched, setCityInputTouched] = useState(false);

    const [formIsValid, setFormIsValid] = useState(false);

    const nameClasses = !enteredName && nameInputTouched ? `${classes.invalid} form-control animate__animated animate__headShake` : "form-control";
    const nameValidClass = enteredName.length > 2 && enteredName > 'a'
        && enteredName < 'z' && nameInputTouched && `${classes.valid}`;

    const numberClasses = !enteredNumber && numberInputTouched ? `${classes.invalid} form-control animate__animated animate__headShake` : "form-control ";
    const numberValidClass = enteredNumber.toString() > !('a') && enteredNumber.length === 10 && numberInputTouched && classes.valid;

    const cityClasses = !enteredCity && cityInputTouched ? `${classes.invalid} form-control animate__animated animate__headShake` : "form-control";
    const cityValidClass = enteredCity.length > 2 && enteredCity > 'a'
        && enteredCity < 'z' && cityInputTouched && classes.valid;

    const btnClasses = !formIsValid ? `${classes.btnInvalid} ` : 'btn btn-success';

    const nameInputHandler = (e) => {
        setNameInputTouched(true);
        setEnteredName(e.target.value);
        if (e.target.value.length > 2
            && e.target.value > 'a'
            && e.target.value < 'z'
            && enteredNumber.length === 10
            && enteredNumber.toString() > !('a')
            && enteredCity.length > 2
            && enteredCity > 'a'
            && enteredCity < 'z') {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    };
    const numberInputHandler = (e) => {
        setNumberInputTouched(true);
        setEnteredNumber(e.target.value);
        if (enteredName > 'a'
            && enteredName < 'z'
            && enteredName.length > 2
            && e.target.value.length === 10
            && e.target.value.toString() > !('a')
            && enteredCity.length > 2
            && enteredCity > 'a'
            && enteredCity < 'z') {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    };
    const cityInputHandler = (e) => {
        setCityInputTouched(true);
        setEnteredCity(e.target.value);
        if (e.target.value.length > 2
            && e.target.value > 'a'
            && e.target.value < 'z'
            && enteredName.length > 2
            && enteredName > 'a'
            && enteredName < 'z'
            && enteredNumber.length === 10
            && enteredNumber.toString() > !('a')) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    };



    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (formIsValid) {
            ctx.clearCart();
            props.onOrderPlaced(enteredName)
            props.onSubmit()

        }
    }

    return (<>
        <div className={`${classes.userForm} mt-3`}>
            <form className="me-3" onSubmit={formSubmitHandler}>

                <div className='d-flex align-items-center'>
                    <input onChange={nameInputHandler}
                        type="text" className={`${nameClasses} ${nameValidClass} mb-1`} id="name" placeholder="your name" pattern="[A-Za-z ]+"></input>
                    {nameValidClass && <p className='text-success mb-0 ms-1'>✔</p>}
                </div>

                <div className='d-flex align-items-center'>
                    <input onChange={numberInputHandler} type="text" inputMode="numeric" className={`${numberClasses} ${numberValidClass} mb-1`} id="Number" placeholder="10 digit mobile number" pattern="[0-9]+"></input>
                    {numberValidClass && <p className='text-success mb-0 ms-1'>✔</p>}
                </div>

                <div className='d-flex align-items-center'>
                    <input onChange={cityInputHandler} type="text" className={`${cityClasses} ${cityValidClass} mb-1`} id="city" placeholder="your city" pattern="[A-Za-z]+"></input>
                    {cityValidClass && <p className='text-success mb-0 ms-1'>✔</p>}
                </div>

                <div className="btn-group my-1" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn text-dark bg-danger border-danger" onClick={props.onCancel}>Cancel</button>
                    <button className={btnClasses} disabled={!formIsValid} >
                        Place Order
                    </button>
                </div>


            </form>
        </div>
    </>);
}
export default CartUserForm;