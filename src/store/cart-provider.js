import { useReducer, useCallback } from 'react';
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0,
    searchValue: ''
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const excessAmount = existingCartItem && existingCartItem.amount + action.item.amount
        if (excessAmount && excessAmount > 10) {
            return {
                items: state.items,
                totalAmount: state.totalAmount,
                searchValue: state.searchValue
            }
        }
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

            // if (updatedItem.amount > 10) {
            //     return {
            //         items: state.item,
            //         totalAmount: state.totalAmount,
            //         searchValue: state.searchValue
            //     }
            // }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                searchValue: state.searchValue
            }
        } else {
            return {
                items: state.items.concat(action.item),
                totalAmount: state.totalAmount + action.item.price * action.item.amount,
                searchValue: state.searchValue
            }
        }

    };
    if (action.type === 'REMOVE') {
        const updatedCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const updatedCartItem = state.items[updatedCartItemIndex]
        const updatedTotalAmount = state.totalAmount - updatedCartItem.price;

        let updatedItems;

        if (updatedCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                searchValue: state.searchValue
            }
        }
        else {
            const updatedItem = {
                ...updatedCartItem,
                amount: updatedCartItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[updatedCartItemIndex] = updatedItem;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                searchValue: state.searchValue
            }
        }

    };
    if (action.type === 'SEARCH') {
        return {
            items: state.items,
            totalAmount: state.totalAmount,
            searchValue: action.val
        }
    }
    if (action.type === 'CLEAR') {
        return {
            ...defaultCartState,
            searchValue: state.searchValue
        }
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCart({ type: 'ADD', item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCart({ type: 'REMOVE', id: id });
    };
    const searchMealHandler = useCallback((value) => {
        dispatchCart({ type: 'SEARCH', val: value })
    }, []);
    const clearCartHandler = () => {
        dispatchCart({ type: 'CLEAR' })
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        searchValue: cartState.searchValue,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
        searchMeal: searchMealHandler,
    };


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;