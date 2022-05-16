import React from 'react';
import './styles.scss';
import linkedin from '../../assets/linkedinOR.svg'
import github from '../../assets/githubOR.svg'

const Home = () => {
  return (
    <div className='container-fluid home'>
      <h1 className="home-text">LAZARO NAZARENO VEGA SANCHEZ</h1>
      <h1 className="home-text">FRONT END DEVELOPER</h1>
      <div>
        <img className="home-icon" src={linkedin} alt="Linkedin" />
        <img className="home-icon" src={github} alt="Github" />
      </div>
    </div>
  )
}

export default Home