import React, { forwardRef } from "react";
import { Panel } from '../../types'
import './styles.scss';

const Works = forwardRef(({ panel }: Panel, ref: React.ForwardedRef<any>) => {
  return (
    <div className="section" ref={ref}>
      <img className="works-img" src={panel.img} alt="" />
      <h2>{panel.text}</h2>
    </div>
  );
});

export default Works;
