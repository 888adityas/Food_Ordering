import { useState, useContext } from 'react';
import './MealItemForm.css';

const MealItemForm = (props) => {
    const [enteredAmount, setEnteredAmount] = useState(1)
    const [inputIsValid, setInputIsValid] = useState(true);

    let inputClass = inputIsValid ? "form-control" : "form-control bg-danger-subtle border-danger animate__animated animate__headShake";

    const amountHandler = (e) => {
        if (e.target.value < 1 || e.target.value > 10) {
            setInputIsValid(false);
            setEnteredAmount(e.target.value);

        } else {
            setInputIsValid(true);
            setEnteredAmount(e.target.value);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredValue = +enteredAmount;
        if (enteredValue < 1 ||
            enteredValue === '' ||
            enteredValue > 10) {
            return;
        }
        props.onAddToCart(enteredValue);

    }
    return (<>
        <form onSubmit={submitHandler} className="d-flex justify-content-between gap-1 align-items-end">
            <label htmlFor="input" className='fs-5 '>Amount: </label>
            <input onChange={amountHandler} className={inputClass} type="text" id="input" min="1" max="5" step="1" defaultValue="1" />
            <button className="btn addBtn">+Add</button>
        </form>

    </>)
};

export default MealItemForm;