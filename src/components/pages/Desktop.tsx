import React, { useState } from 'react'
import DesktopIcon from '@components/DesktopIcon.tsx'
interface IconData {
    id: number;
    name: string;
    position: { x: number; y: number };
}

const gridSize = 50

export default function Desktop() {
  const [icons, setIcons] = useState<IconData[]>([
    { id: 1, name: 'Icon1', position: { x: 10, y: 10 } },
    { id: 2, name: 'Icon2', position: { x: 100, y: 100 } },
    { id: 3, name: 'Icon3', position: { x: 200, y: 200 } },
  ])

  const handleStop = (id: number, newPosition: { x: number; y: number }) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) =>
        icon.id === id ? { ...icon, position: newPosition } : icon
      )
    )
  }

  return (
    <div className="desktop relative w-full h-full bg-blue-100 grid grid-cols-12 gap-0.5">
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          name={icon.name}
          position={icon.position}
          gridSize={gridSize}
          onStop={(newPosition) => handleStop(icon.id, newPosition)}
        />
      ))}
    </div>
  )
}