import React, { forwardRef } from "react";
import './styles.scss';

const Info = forwardRef((props, ref: React.ForwardedRef<any>) => {
  return (
    <div className="info" ref={ref}>
      <h1 className="info-title">Me gustaría perfeccionarme en la programación Front-end, llegar a un nivel en donde pueda ser capaz de enseñar y compartir mis experiencias.</h1>
      <div className="info-images">
        <img className="info-img" alt="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
        <img className="info-img" alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
        <img className="info-img" alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
        <img className="info-img" alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img className="info-img" alt="redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
        <img className="info-img" alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
        <img className="info-img" alt="mysql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
        <img className="info-img" alt="angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />
        <img className="info-img" alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
      </div>
      <div className="works-spacer"/>
    </div>
  );
});

export default Info;
