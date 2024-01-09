import { createContext, useState, useEffect } from 'react';
import { getStorageValue, useLocalStorage } from './LocaleStorage';

export const CartContext = createContext({
  quantity: 0,
  addToCart: (product) => {},
  removeFromCart: (product) => {},
  getCartProducts: () => {}
});

export const _addToCart = (product) => {
  var tmpCart = getStorageValue('cart');
  var existing = tmpCart.products.find(cartProduct => cartProduct.id == product.id);
  var tmpCartProductList = tmpCart.products.filter(cartProduct => cartProduct.id != product.id);
  var cartListProductItem = { ...product, qty: existing ? existing.qty + 1 : 1 };
  tmpCartProductList.push(cartListProductItem);
  const newCart = { products: tmpCartProductList };
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

export const _removeFromCart = (product) => {
  var tmpCart = getStorageValue('cart');
  var existing = tmpCart.products.find(cartProduct => cartProduct.id == product.id);
  var tmpCartProductList = tmpCart.products.filter(cartProduct => cartProduct.id != product.id);
  const newCart = { products: tmpCartProductList };
  
  if (existing && existing.qty > 1) {
    existing.qty = existing.qty - 1;
    tmpCartProductList.push(existing);
  }
  console.log(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

export const _clearCart = () => {
  const newCart = { products: [] };
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

export default function CartProvider({ children }) {
  const initialCart = getStorageValue('cart', { products: [] });
  const [cart, setCart] = useLocalStorage('cart', initialCart);
  const [quantity, setQuantity] = useState(cart.products.length || 0);

   const clearCart = () => {
    _clearCart();
    setQuantity(0); 
  };

  const addToCart = (product) => {
    const updatedCart = _addToCart(product);
    setCart(updatedCart);
  };

  const getCartProducts = () => {
    return cart.products;
  };

  const removeFromCart = (product) => {
    const updatedCart = _removeFromCart(product);
    setCart(updatedCart);
  };

  useEffect(() => {
    setQuantity(cart.products.length);
  }, [cart.products]);

  return (
    <CartContext.Provider value={{ quantity, addToCart, removeFromCart, getCartProducts, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}