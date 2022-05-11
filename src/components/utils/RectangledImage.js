import React from 'react'


export const RectangledImage = ({width, height, border, imageSrc, borderRadius}) => {
  return (
    <div style={
        {
            width: width,
            height: height,
            border: border,
            borderRadius: borderRadius,
            
        }
    } >
        
        <img src={imageSrc} alt="" className='w-100 h-100' style={
        {
            borderRadius: borderRadius,
        }
        }/>

    </div>
  )
}

RectangledImage.defaultProps = {
  width: "300px",
  height: "300px",
  borderRadius: 0,
  imageSrc: "",
  border: "none"
}
