import React, { useState, useEffect, useRef } from "react";

function Draggable({ image }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  // Im putting both the dragging/position states into one ref
  // in this example, but you can organize it however you'd like.
  const stateRef = useRef(null);
  // Update the ref's value whenever the position/isDragging
  // state changes.
  useEffect(() => {
    stateRef.current = { position, isDragging };
  }, [position, isDragging]);

  useEffect(() => {
    function handleMouseMove(event) {
      // Now we read the dragging/position state from the
      // ref, which should always hold the latest state
      const { isDragging, position } = stateRef.current;
      if (isDragging) {
        const newX = position[0] + event.movementX;
        const newY = position[1] + event.movementY;
        setPosition([newX, newY]);
      }
    }
    window.addEventListener("mousemove", handleMouseMove);

    function handleMouseUp() {
      setIsDragging(false);
    }
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "680px", height: "456px" }}>
      <img
        src={image}
        style={{
          position: "relative",
          left: position[0],
          top: position[1],
          minWidth: "700px",
          minHeight: "456px",
          // backgroundImage: `url(${image})`,
          onjectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onMouseDown={() => setIsDragging(true)}
      ></img>
    </div>
  );
}

export default Draggable;
