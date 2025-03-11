import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/favorites">Guardados</Link></li>
            <li>
                <button>Postear</button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
