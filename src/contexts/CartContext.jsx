import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const a = 111;

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const indexToRemove = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(indexToRemove);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContextProvider;
