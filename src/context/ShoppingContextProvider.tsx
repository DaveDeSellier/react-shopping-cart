import { createContext, useState } from 'react'
import {products} from "../Products";
import { IProduct } from '../Products'

interface Context  {
    cartItems: IProduct[],
    shoppingItems: IProduct[],
    addToCart: (product: IProduct) => void,
    removeFromCart: (productId: number) => void
    calculateTotal: () => number
    findItem: (id: number) => boolean
    filteredList: (searchTerm: string) => void
}

export const ShoppingCartContext = createContext<Context>({
  cartItems: [],
  shoppingItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  calculateTotal: () => 0,
  findItem: () => false,
  filteredList: () => {}
})

export const ShoppingContextProvider= (props: any) => {

    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [shoppingItems, setShoppingItems] = useState<IProduct[]>(products)

    const addToCart = (product: IProduct) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };

    const findItem = (id: number)  => {
       if(cartItems.find((itemId) => itemId.id === id)){
          return true;
       }
       return false;
    };

    const filteredList = (searchTerm: string) => { 
      setShoppingItems(products.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    )};

    const removeFromCart = (productId: number) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
    };

    const calculateTotal = (): number => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const contextValue = {cartItems, shoppingItems, findItem, addToCart, removeFromCart, filteredList, calculateTotal}


  return (
    <ShoppingCartContext.Provider value={contextValue}>{props.children}</ShoppingCartContext.Provider>
  )
}
