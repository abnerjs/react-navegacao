import React from 'react'
import './Menu.css'

const Menu = props => (
    <aside className='menu'>
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#features">FEATURES</a></li>
                <li><a href="#prices">PRICES</a></li>
            </ul>
        </nav>
    </aside>
)

export default Menu