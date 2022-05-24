import React, { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';
import Info from '../info';
import { data } from '../../data/data'
import useWindowSize  from '../../libs/useWindowsSize'



export default function Horizontal () {
  const size = useWindowSize();

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [panelData, setPanelData] = useState(() => data);
  const [width1, setWidth1] = useState(Number);

  useEffect(() => {
    const horizontalSections = gsap.utils.toArray(
      horizontalRef.current
    );

    horizontalSections.forEach(function (sec: any, i) {
      let thisPinWrap = pinRef.current;
      let thisAnimWrap = animationRef.current
      setWidth1(thisAnimWrap!.scrollWidth - thisAnimWrap!.scrollHeight)

      let getToValue = () => -(thisAnimWrap!.scrollWidth - window.innerWidth);

      gsap.fromTo(
        thisAnimWrap,
        {
          x: () =>
          thisAnimWrap!.classList.contains("to-right") ? 0 : getToValue()
        },
        {
          x: () =>
          thisAnimWrap!.classList.contains("to-right") ? getToValue() : 0,
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
  }, [size]);
  return (
      <div className='horizontal' ref={ref} id='horizontal' style={{ height: `${width1}px`, minHeight: `${width1 + 300}px` }}>
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