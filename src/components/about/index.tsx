import React from 'react';
import Contact from '../contact';
import { Helmet } from 'react-helmet';
import './styles.scss';
import logo from '../../assets/logo.png'

const About = () => {

  return (
    <>
      <Helmet>
        <title>Lazaro | Acerca de</title>
        <meta name='description' content='Lazaro Vega Sanchez Portfolio - Desarrollador Web - Acerca de ' />
      </Helmet>
      <div className='container-fluid about'>
        <span className='about-title'>Proceso Creativo</span>
        <div className='about-div'>
          <span className='about-text left'>"Al buscar inspiracion mirando portfolios en internet, me interese mucho por un diseño con scrolling horizontal,
            queria hacer una pagina que sobresalga, sin parecer sobrecargada y que se vea profesional. Así que diseñe un wireframe"
          </span>
          <img className='about-img' alt='figma version 1' src='https://i.ibb.co/fMHc4Mh/Screenshot-44.png' />
        </div>
        <div className='about-div'>
          <img className='about-img' alt='figma pallette fonts' src='https://i.ibb.co/jhvPb5W/Screenshot-45.png' />
          <span className='about-text right'>"Luego busque informacion sobre colores y fuentes, recolecte las paletas que más me llamaron la atencion
            y use un patron de diseño con las fuentes."</span>
        </div>
        <a target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm w-25 fs-4 align-self-center" href='https://www.figma.com/file/ekiXpAFVWdaOiSUzacicV2/new-portfolio-design?node-id=0%3A1'>Ir al figma</a>
        <div className='about-div'>
          <span className='about-text'>"Por ultimo, pero no menos importante, diseñe un logo para definir personalidad. La idea era incluir mi nombre o mis iniciales y
          esté fue el resultado"
           </span>
          <img className='about-logo' alt='lazaro vega sanchez web developer logo' src={logo} />
        </div>
        <span className='about-text-footer'>Desarrollado con : </span>
        <div>
          <img className="info-img" alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img className="info-img" alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
          <img className="info-img" alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
        </div>
      </div>
      <Contact />
    </>
  )
}

export default About