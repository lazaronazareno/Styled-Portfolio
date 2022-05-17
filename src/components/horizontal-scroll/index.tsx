import React, { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';
import Info from '../info';
import { data } from '../../data/data'

export default function Horizontal () {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [panelData, setPanelData] = useState(() => data);

  useLayoutEffect(() => {
    const horizontalSections = gsap.utils.toArray(
      horizontalRef.current
    );

    horizontalSections.forEach(function (sec: any, i) {
      let thisPinWrap = pinRef.current;
      let thisAnimWrap = animationRef.current

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