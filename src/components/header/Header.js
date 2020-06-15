import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className="main-header">
            <h1>Header</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
               
                </ul>
            </nav>
        </header>
    )
}
