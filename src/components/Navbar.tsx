import { Link } from "react-router-dom";
import {ShoppingCartContext} from '../context/ShoppingContextProvider'
import { useContext, useEffect, useState } from "react";

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const {filteredList, cartItems} = useContext(ShoppingCartContext);
    const areItemsInCart = cartItems.length > 0 ? true : false;


    useEffect(() => {

        filteredList(searchTerm)

    }, [searchTerm])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
    }


    return(
        <nav>
            <div className="nav-container">
                <div className="nav-title">
                    <span>React Shopping List</span>
                </div>
                    <ul className="nav-bar">
                        <li><input type="text" placeholder="search..." value={searchTerm} onChange={e => handleChange(e)}></input></li>
                    </ul>
                <div className="nav-checkout">
                    {!areItemsInCart ? (
                        <Link className='cart-amount' to="/checkout">Cart ({cartItems.length})</Link>
                        ) : (
                            <Link className='cart-amount show' to="/checkout">Cart ({cartItems.length})</Link>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}


