import React, { useEffect, useRef, useState } from "react";

export function CanvasSpace() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [drawingUrl, setDrawingUrl] = useState("");

  //  a way to access the DOM(canvas).
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    setDrawingUrl(canvas.toBlob((blob) => {
      console.log(URL.createObjectURL(blob))
    }));
    console.log(drawingUrl);
    localStorage.setItem('myArt', JSON.stringify(drawingUrl))
  }

  return (
    <>
    <button onClick={clearCanvas}>Clear</button>
    <button onClick={saveDrawing}>Save</button>
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
    </>
  );
}