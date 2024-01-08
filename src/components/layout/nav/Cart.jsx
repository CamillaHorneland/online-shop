import { useLocalStorage } from "../../../hooks/LocaleStorage";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState, useContext } from 'react';
import { CartContext } from "../../../hooks/CartProvider";

const Cart = () => {
    const [cart, changeCart] = useLocalStorage('cart', {products: []});

    return (
        <div className="cart"></div>
    )
};

const CartIcon = ({children}) => {
    const { quantity, addToCart } = useContext(CartContext);

    return (
        <span className="cart">
            { children }
            <CiShoppingCart style={{fontSize: '30px'}} />
            <i>{quantity}</i>
        </span>
    )
};



export { Cart, CartIcon };