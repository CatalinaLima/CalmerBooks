import { useContext, useEffect } from 'react'
import { cartContext } from '../../context/cartContext'
import './NavBar.css'
import {Link, useLocation, NavLink} from 'react-router-dom'
import cart from '/assets/cart.png'


export default function NavBar() {

    let location = useLocation()
    useEffect (() => {
        window.scrollTo()
    }, [location])


    return (
        <nav className="NavBar">
            <ul className="nav-menu">
                <li className="logo">
                    <h2>
                        <Link to="/">
                            CALMER
                        </Link>
                    </h2>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/books">
                        BOOKS
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">
                        MENU
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        ABOUT US
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                        CONTACT
                    </NavLink>
                </li>
    
                <li className="cart-widget">
                    <CartWidget />
                </li>
            </ul>
        </nav>
        );
    }


function CartWidget () {
    const {countItems} = useContext (cartContext)
    return (
    <Link to='/cart'>
        <img className='CartImg' src={cart} alt="carrito de compras" />
        <span>{countItems()}</span>
    </Link>
    )
}




