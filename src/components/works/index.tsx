import React, { forwardRef } from "react";
import { Panel } from '../../types'
import './styles.scss';

const Works = forwardRef(({ panel }: Panel, ref: React.ForwardedRef<any>) => {
  return (
    <div className="section" ref={ref}>
      <div className="works-info">
        <h2 className="work-use">{panel.use}</h2>
        <h1 className="work-title">{panel.text}</h1>
        <h2 className="work-stack">{panel.stack}</h2>
        <h2 className="work-description">{panel.description}</h2>
      </div>
      <div>
        <img className="works-img" src={panel.img} alt="" loading="lazy" />
        <div>
          {panel.text === 'ONG Page' || panel.text === 'MoviesApp' || (
            <a target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm w-25 fs-4 align-self-center" href={panel.link1}>Ver</a>
          )}
          <a target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm w-25 fs-4 align-self-center" href={panel.link2}>Github</a>
        </div>
      </div>
      <div className="works-spacer" style={{ display: panel.text === 'PokedexApp' ? 'none' : '' }}/>
    </div>
  );
});

export default Works;
