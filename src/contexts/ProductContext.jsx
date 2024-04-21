import { createContext, useContext } from 'react';
import { data } from '../data';
import useLocalStorage from '../hooks/useLocalStorage';
import { CartContext } from './CartContext';


const a = '1234';

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useLocalStorage('products', data);
  const { addItem } = useContext(CartContext);

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);

export default ProductContextProvider;
