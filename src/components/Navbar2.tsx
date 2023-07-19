import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar2() {
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-title">
                    <span>React Shopping List</span>
                </div>
                    <ul className="nav-bar">
                        <li></li>
                    </ul>
                <div className="nav-checkout">
                    <Link className='cart-amount' to="/">Back to Products...</Link>
                </div>
            </div>
        </nav>
    )
}
