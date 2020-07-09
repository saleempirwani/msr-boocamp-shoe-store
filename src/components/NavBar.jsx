import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-label"> <label>Shoe Store</label></Link>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
            </ul>
        </div >
    )
}