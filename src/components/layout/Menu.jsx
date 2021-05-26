import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='menu'>
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/param/1">PARAM #01</Link></li>
                <li><Link to="/param/2">PARAM #02</Link></li>
                <li><Link to="/">PÁGINA NÃO EXISTENTE</Link></li>
            </ul>
        </nav>
    </aside>
)

export default Menu