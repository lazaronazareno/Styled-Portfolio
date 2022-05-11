import React, { useRef, useState, useLayoutEffect, } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';

gsap.registerPlugin(ScrollTrigger)

function useArrayRef() {
  const refs: any = useRef([]);
  refs.current = [];
  return [refs, (ref: any) => ref && refs.current.push(ref)];
}


export default function Horizontal () {
  const [panelData, setPanelData] = useState(() => [
    {
      id: 0,
      text: "Section 1",
      img:
        "https://images.unsplash.com/photo-1577641764077-f100e8eb3f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
    },
    {
      id: 1,
      text: "Section 2",
      img:
        "https://images.unsplash.com/photo-1577641309712-a3e91c0be31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 2,
      text: "Section 3",
      img:
        "https://images.unsplash.com/photo-1577641817566-06e052e906a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ]);
  const panelsContainer: any = useRef();
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
  }, [])
  return (
      <div className='horizontal bg-black' ref={panelsContainer} id='horizontal'>
        {panelData.map((panel, index) => (
          <Works
            key={panel.id}
            {...setPanelsRef}
            panel={panel}
          />
        ))}
      </div>
  )
}