import React from "react"
import logo from '../../assets/logo.png'
import './styles.scss';

export default function Header () {
  return (
    <header className='container-fluid header d-flex position-fixed top-0 align-items-center'>
      <img className="img-fluid header-img" src={logo} alt="img"/>
      <span className="fs-2 ms-auto header-text">Works</span>
      <span className="fs-2 ms-2 header-text">Contact</span>
    </header>
  )
}