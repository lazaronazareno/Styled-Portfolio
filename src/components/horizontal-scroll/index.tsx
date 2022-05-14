import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';

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