import React from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';

const Modal = (props) => {
    const rootModalElement = document.getElementById('overlays');
    const backDrop = <div className={classes.backDrop} onClick={props.onHideCart}></div>
    const modal = <div className={`${classes.modal} rounded`}>
        <span type="button" onClick={props.onHideCart} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </span>
        {props.children}
    </div>
    return (
        <>
            {ReactDOM.createPortal(backDrop, rootModalElement)}
            {ReactDOM.createPortal(modal, rootModalElement)}

        </>);
};

export default Modal;