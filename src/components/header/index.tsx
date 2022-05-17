import React from "react"
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import './styles.scss';

export default function Header () {
  return (
    <header className='container-fluid header d-flex position-fixed top-0 align-items-center'>
      <Link to='/'>
        <img className="img-fluid header-img" src={logo} alt="img"/>
      </Link>
      <Link to='/projects' className="fs-2 ms-auto header-text">Proyectos</Link>
      <Link to='/contact' className="fs-2 ms-2 header-text">Acerca de</Link>
    </header>
  )
}