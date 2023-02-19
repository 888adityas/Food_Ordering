import classes from './CartItem.module.css';
const CartItem = (props) => {
  const onAddClass = classes.custBtn;
  return (
    <>
      <div className={`row p-2 my-3 m-auto pb-0 mb-0 container shadow d-flex justify-content-around align-items-start `}>
        <div className="col-6">
          <p className="fst-italic fw-bold text-nowrap overflow-auto">{props.name}</p>
          <p>₹{props.price}</p>
        </div>
        <div className='col-2 fs-5 fw-semibold'>
          x{props.amount}
        </div>

        <div className='col-4 d-flex justify-content-center flex-sm-nowrap'>
          <button className={onAddClass} disabled={props.amount > 9}
            onClick={props.onAdd}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
          <button className={`${classes.cartItemBtn} btn text-danger-emphasis bg-danger-subtle border border-danger shadow-sm m-1 `}
            onClick={props.onRemove}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
        </div>
      </div>


    </>)
};
export default CartItem;