import { useContext } from "react"
import {ShoppingCartContext} from '../context/ShoppingContextProvider'
import Navbar2 from "../components/Navbar2";


export default function Checkout(){

    const {cartItems, calculateTotal, removeFromCart} = useContext(ShoppingCartContext);

    if(cartItems.length == 0){

        return(
            <>
                <Navbar2 />
                <div className="checkout-container">
                    <h2>Your cart is empty.</h2>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar2 />
            <div className="checkout-container">
                <h2>Checkout Items: {cartItems.length}</h2>
                <ul>
                    {cartItems.map((item) =>  {
                        
                        return(
                            <div key={item.id} className="checkout-items">
                                <li>{item.title}</li>
                                <button onClick={() => removeFromCart(item.id)}>
                                    <span>Remove Item</span>
                                </button>
                            </div>
                        )
                    })}
                </ul>
                <p>Total: ${calculateTotal()} </p>
            </div>
        </>
    )


}