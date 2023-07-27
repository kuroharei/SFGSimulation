
import React from 'react'

const Canvas = ({
    width,
    height
}) => {
  return (
    <canvas
        width={width}
        height={height}
        style={canvasStyle}
    />
  )
}

export default Canvas

const canvasStyle = {
    border: "1px solid white"
}
