import { useContext} from "react"
import { IProduct } from "../Products";
import {ShoppingCartContext} from '../context/ShoppingContextProvider'
import '../styles/styles.css'


export default function Product(props : IProduct) {
    const {cartItems, findItem, addToCart, removeFromCart} = useContext(ShoppingCartContext);
    const {id, title, price} = props;

    let isInCart = false;

    if(findItem(id)){
        isInCart = true;
    }

    return(
        <div className="grid-item">
            <span>{title}</span>
            <p>Price: ${price}</p>
            {!isInCart ? (
                <button type="button" onClick={e => addToCart(props)}>Add To Cart</button>
                ) : (
                <button className="button-warning" type="button" onClick={e => removeFromCart(id)}>Remove Item</button>
                )
            }
        </div>
    )


}