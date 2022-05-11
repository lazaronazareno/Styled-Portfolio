import React, { forwardRef } from "react";
import { Panel } from '../../types'
import './styles.scss';

interface Props {
  panel: Panel
}

const Works: React.FC<Props> = forwardRef(({ panel }, ref: React.ForwardedRef<any>) => {
  return (
    <div className="section" ref={ref}>
      <img className="works-img" src={panel.img} alt="" />
      <h2>{panel.text}</h2>
    </div>
  );
});

export default Works;
