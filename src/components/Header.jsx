import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Header.scss"
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>TechyStar</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
            <HashLink to={"/contacts"}>Contacts</HashLink>
        </main>
    </nav>
  )
}

export default Header
