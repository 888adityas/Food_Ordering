import classes from './FoodSlogan.module.css';

const FoodSlogan = () => {
    return (<>
        <div className={`${classes.sloganBg}  d-flex justify-content-center align-items-center flex-column lh-1 p-3 `}>
            <p className={`${classes.sloganFont} fs-1 text-light`}>We Make Ordering</p>
            <p className={`${classes.sloganFont} fs-3 fw-semibold lh-1 text-light`}>Food Easy!</p>
            <p className={`${classes.sloganFont} text-light `}> Wake up your taste buds 😋</p>
        </div>

    </>);
}
export default FoodSlogan;