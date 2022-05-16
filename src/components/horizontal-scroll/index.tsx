import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';
import Info from '../info';

/* function useArrayRef() {
  const refs: any = useRef([]);
  refs.current = [];
  return [refs, (ref: any) => ref && refs.current.push(ref)];
} */


export default function Horizontal () {
  gsap.registerPlugin(ScrollTrigger)
  const ref: any = useRef();
  const horizontalRef: any = useRef();
  const pinRef: any = useRef();
  const animationRef: any = useRef();

  const [panelData, setPanelData] = useState(() => [
    {
      id: 0,
      text: "SuperHeroes",
      img:
        "https://i.ibb.co/b6k7Vrj/Superheroes-Page-Google-Chrome-2022-03-23-16-28-33.gif",
      use: "CHALLENGE",
      stack: "React - Bootstrap - Redux",
      description: "Consume SuperheroesAPI, posee un login, su funcion es buscar superheroes y poder armar un team de 6. Las credenciales para iniciar sesion y utilizarla son: email: challenge@alkemy.org y password: react",
      link1: "https://alkemy-react-challenge.web.app/",
      link2: "https://github.com/lazaronazareno/Alkemy-React-Challenge"
    },
    {
      id: 1,
      text: "Porfolio",
      img:
        "https://i.ibb.co/ncsCpGh/Portolio-Lazaro-Vega-Sanchez-Google-Chrome-2022-03-23-15-50-09-Trim.gif",
      use: "PERSONAL",
      stack: "React - Bootstrap",
      description: "First version of my portfolio",
      link1: "https://lazaro-portfolio.web.app/",
      link2: "https://github.com/lazaronazareno/my-portfolio"
    },
    {
      id: 2,
      text: "Quotes app",
      img:
        "https://i.ibb.co/JHBmGGh/Quotes-App-Google-Chrome-2022-03-23-16-40-58-1.gif",
      use: "CHALLENGE",
      stack: "React - Bootstrap - Redux",
      description: "App de prueba que se hizo para medir conocimientos al iniciar Alkemy, muestra varias citas , se pueden ver en detalle, editarlas y borrarlas (fake)",
      link1: "https://alkemy-warmup.web.app/",
      link2: "https://github.com/lazaronazareno/Warm-up-challenge-alkemy"
    },
    {
      id: 3,
      text: "ONG Page",
      img:
        "https://i.ibb.co/Bgcx6WQ/ong-1.png",
      use: "WORK",
      stack: "React - React-Bootstrap - React-Redux - Nodejs - MySql - Docker",
      description: "Pagina Aceleracion Alkemy. Cuenta con un login y register, cuando te logeas como administrador podes agregar, eliminar y modificar los elementos de la misma pagina. Tiene integrada la funcion para subir imagenes a amazon web services('S3')",
      link1: "https://github.com/lazaronazareno/Aceleracion-Alkemy-Frontend",
      link2: "https://github.com/lazaronazareno/Aceleracion-Alkemy-Backend"
    },
    {
      id: 4,
      text: "KanoKanoApp",
      img:
        "https://i.ibb.co/DwkgjYj/React-App-Google-Chrome-2022-03-23-17-13-22-Trim-1.gif",
      use: "PERSONAL",
      stack: "React - Bootstrap - Redux",
      description: "App diseñada para informar sobre el anime Kanojo to Kanojo, contiene un switch al seleccionar los personajes que hacen que cambie el tema de la pagina.",
      link1: "https://kanokano-fanpage.web.app/",
      link2: "https://github.com/lazaronazareno/KanoKanoPage"
    },
    {
      id: 5,
      text: "PokedexApp",
      img:
        "https://i.ibb.co/sqW5JCM/Pokedex-App-Google-Chrome-2022-03-23-17-34-00-Trim.gif",
      use: "PERSONAL",
      stack: "React - Bootstrap - Redux",
      description: "Una simple pokedex, muestra todos los pokemons, con detalles, tiene buscador y un pequeño juego de combate",
      link1: "https://pokedex-pokemon-app.web.app/",
      link2: "https://github.com/lazaronazareno/Pokedex"
    },
  ]);
/*   const panelsContainer: any = useRef();
  const [panels, setPanelsRef] = useArrayRef();

   useLayoutEffect(() => {
    const totalPanels = panels.current.length
    console.log(totalPanels)
    console.log(panelsContainer.current.offsetWidth)
    console.log(panels.current)

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        end: () => "+=" + panelsContainer.current.offsetWidth
      }
    });
  }, []) */

  useLayoutEffect(() => {
    const horizontalSections = gsap.utils.toArray(
      horizontalRef.current
    );

    console.log("horizontalSections", horizontalSections);
    horizontalSections.forEach(function (sec: any, i) {
      let thisPinWrap = pinRef.current;
      console.log("thisPinWrap", thisPinWrap);
      let thisAnimWrap = animationRef.current
      console.log("thisAnimWrap", thisAnimWrap);

      let getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(
        thisAnimWrap,
        {
          x: () =>
            animationRef ? 0 : getToValue()
        },
        {
          x: () =>
            animationRef ? getToValue() : 0,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            //anticipatePin: 1,
            scrub: true,
            markers: true
          }
        }
      );
    });
  }, []);
  return (
      <div className='horizontal bg-black' ref={ref} id='horizontal'>
        <div className="pin-wrap" ref={pinRef}>
          <div className="animation-wrap to-right" ref={animationRef}>
            <Info />
            {panelData.map((panel, index) => (
              <Works
                key={panel.id}
                ref={horizontalRef}
                panel={panel}
              />
            ))}
          </div>
        </div>
      </div>
  )
}