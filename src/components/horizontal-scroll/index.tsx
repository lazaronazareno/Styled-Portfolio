import React, { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';
import Info from '../info';
import { data } from '../../data/data'

/* function useArrayRef() {
  const refs: any = useRef([]);
  refs.current = [];
  return [refs, (ref: any) => ref && refs.current.push(ref)];
} */


export default function Horizontal () {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [panelData, setPanelData] = useState(() => data);
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

      let getToValue = () => -(thisAnimWrap!.scrollWidth - window.innerWidth);

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
            end: () => "+=" + (thisAnimWrap!.scrollWidth - window.innerWidth),
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            //anticipatePin: 1,
            scrub: true,
            // markers: true
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