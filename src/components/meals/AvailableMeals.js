import { useEffect, useState, useContext } from "react";
import MealItem from './MealItem';
import useFilter from '../../store/use-filter';
import CartContext from '../../store/cart-context';
import Loading from '../../assets/loading.gif';


const AvailableMeals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedMeals, setFetchedMeals] = useState([]);
    const ctx = useContext(CartContext);
    // you have to lowercase the value before sending to custom hook
    const searchValue2 = ctx.searchValue;
    const { filteredArray: filteredMeals } = useFilter(fetchedMeals, searchValue2);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://food-ordering-app-be510-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
            const data = await response.json();
            setIsLoading(false)

            let loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    price: data[key].price,
                    description: data[key].description,
                    imgUrl: data[key].imgUrl
                })
            }
            setFetchedMeals(loadedMeals);
        };
        fetchMeals()
    }, []);

    let content;
    if (isLoading) {
        content = <img src={Loading} className="img-fluid" alt="loading" />;
    };
    if (!isLoading) {
        content = <h2 className="border-3 border-bottom border-danger pb-2">All Meals</h2>
    };
    if (filteredMeals.length === 0 && !isLoading) {
        content = <h2 className="">No Meals Found !!</h2>
    };


    return (<>
        <div className="d-flex justify-content-center m-4 mb-2">{content}</div>
        <div className="d-flex justify-content-center mb-5">
            <div className="d-flex justify-content-center align-items-center gap-4 mt-4 flex-wrap">
                {filteredMeals?.map((meal) =>
                    <MealItem key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        price={meal.price}
                        description={meal.description}
                        imgUrl={meal.imgUrl} />
                )}
            </div>
        </div>
    </>)
};
export default AvailableMeals;