import React from 'react'
import "./Navbar.css"
import {Link, NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">
                LISTE
            </NavLink>
            <NavLink to="/stateAnim">
                STATE
            </NavLink>
            <NavLink to="/scroll">
                SCROLL
            </NavLink>
        </nav>
    )
}
