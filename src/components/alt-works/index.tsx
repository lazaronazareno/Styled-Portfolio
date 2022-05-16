import React, {useState, useEffect} from 'react';
import './styles.scss';
import { data } from '../../data/data'


const AltWorks = () => {
  const [panelData, setPanelData] = useState(() => data);
  const [x, setX]: any = useState()
  const [y, setY]: any = useState()

  const onMouse = (e: any) => {
    setY(e.clientY - e.target.offsetTop)
    setX(e.clientX - e.target.offsetLeft)
    console.log(e)
  }

  return (
    <div className='container-fluid altWorks'>
      { panelData.map((data, index) => (
        <div className="hover_img" onMouseMove={onMouse}>
          <h1>
            {data.text}
            <span>
              <img className='altworks-img' src={data.img} alt="background" style={{ transform: `translate(${-80 + x}px, ${-250 + y}px)` }} />
            </span>
          </h1>
        </div>
      ))}
    </div>
  )
}

export default AltWorks