import React from 'react';
import './styles.scss';
import linkedin from '../../assets/linkedinOR.svg'
import github from '../../assets/githubOR.svg'

const Home = () => {
  return (
    <div className='container-fluid home'>
      <h1 className="home-text">LAZARO</h1>
      <h1 className="home-text">DESARROLLADOR WEB</h1>
      <div>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/lazaronazareno">
        <img className="home-icon" src={github} alt="Github" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lazaro-vega-sanchez">
        <img className="home-icon" src={linkedin} alt="Linkedin" />
      </a>
      </div>
    </div>
  )
}

export default Home