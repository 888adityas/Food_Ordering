import React from "react";
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    searchValue: '',
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { },
    searchMeal: (val) => { },
});
export default CartContext;