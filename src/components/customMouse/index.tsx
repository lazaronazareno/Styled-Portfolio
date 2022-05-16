import React, { useContext } from "react";
import "./styles.scss";
import useMousePosition from "../../libs/useMousePosition"
import { MouseContext } from "../../libs/mouseContext";

const DotRing = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={"dot2 " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
