import React from "react"
import { useHorizontalScroll } from "../../libs/useSideScroll";
import './styles.scss';

export default function Horizontal () {
  const scrollRef = useHorizontalScroll();

  return (
    <>
      <div className='horizontal bg-black'  ref={scrollRef} id='horizontal'>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </>
  )
}