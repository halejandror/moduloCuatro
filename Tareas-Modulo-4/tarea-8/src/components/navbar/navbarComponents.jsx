import React from 'react'
import { Link } from "react-router-dom";


const NavbarComponents = () => {
  return (
    <div>
        <ul>
            <li className='links'>
                <Link to="/">Home </Link>
                <Link to="/characters">Ir a Personajes </Link>
                <Link to="/episodes">Ir a Episodios </Link> 
                <Link to="search">Ir a Search</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarComponents