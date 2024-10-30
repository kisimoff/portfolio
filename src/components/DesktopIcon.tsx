// src/components/DesktopIcon.tsx

import React, { useState, useRef } from 'react'
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable'

interface IconProps {
  name: string;
  position: { x: number; y: number };
  gridSize: number;
  onStop: (data: { x: number; y: number }) => void;
}

export default function DesktopIcon({ name, position, gridSize, onStop }: IconProps) {
  const [isDragging, setIsDragging] = useState(false)
  const nodeRef = useRef(null);

  const handleStart = () => {
    setIsDragging(true)
  }

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    setIsDragging(false)
    onStop({ x: data.x, y: data.y })
  }

  return (
    <Draggable
      defaultPosition={position}
      grid={[gridSize, gridSize]}
      onStart={handleStart}
      onStop={handleStop}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`desktop-icon absolute p-2 bg-gray-200 rounded shadow-md cursor-pointer ${isDragging ? 'ring-2 ring-blue-500' : ''
          }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {name}
      </div>
    </Draggable>
  )
}
