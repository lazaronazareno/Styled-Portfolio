import React, { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss';
import Works from '../works';
import Info from '../info';
import { data } from '../../data/data'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Horizontal () {
  const size = useWindowSize();
  console.log(size)

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [panelData, setPanelData] = useState(() => data);
  const [width1, setWidth1] = useState(Number);
  console.log(width1)

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
      <div className='horizontal bg-black' ref={ref} id='horizontal' style={{ height: `${width1}px` }}>
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