import React from "react"
import './styles.scss';

export default function Footer () {
  return (
    <footer className='container-fluid footer d-flex bottom-0 align-items-center'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lazaro-vega-sanchez" className="fs-2 ms-2 header-text">LINKEDIN</a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/lazaronazareno" className="fs-2 ms-2 header-text">GITHUB</a>
      <span className="fs-2 ms-2 header-text">|</span>
      <a href="mailto:lazaronazareno@gmail.com?Subject=Contacto%20por%20portfolio" className="fs-2 ms-2 header-text">LAZARONAZARENO@GMAIL.COM</a>
    </footer>
  )
}