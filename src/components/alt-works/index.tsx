import React, { useState } from 'react';
import './styles.scss';
import { data } from '../../data/data'
import { Helmet } from 'react-helmet';

const AltWorks = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [panelData, setPanelData] = useState(() => data);
  const [x, setX]: any = useState()
  const [y, setY]: any = useState()

  const onMouse = (e: any) => {
    setY(e.clientY - e.target.offsetTop)
    setX(e.clientX - e.target.offsetLeft)
  }

  return (
    <>
      <Helmet>
        <title>Lazaro | Proyectos</title>
        <meta name='description' content='Lazaro Vega Sanchez Portfolio - Desarrollador Web - Proyectos ' />
      </Helmet>
      <div className='container-fluid altWorks'>
        { panelData.map((data, index) => (
          <div className="hover_img" key={index} onMouseMove={onMouse}>
            <h1>
              {data.text}
              <span>
                <img className='altworks-img' src={data.img} alt="background" style={{ transform: `translate(${-80 + x}px, ${-250 + y}px)` }} />
              </span>
            </h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default AltWorks