import { useContext } from "react";
import Product from '../components/Product'
import {ShoppingCartContext} from '../context/ShoppingContextProvider'
import Navbar from '../components/Navbar'

export default function Products() {

    const {shoppingItems} = useContext(ShoppingCartContext)

    return(
        <>
        <Navbar />
        <div className="container">
                <div className="d-grid">
                    {shoppingItems.map((product) =>  {
                        return( 
                            <Product key={product.id} id={product.id} title={product.title} price={product.price} />
                        )   
                    })}
                </div>
        </div>
        </>

    )

}