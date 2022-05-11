import React from 'react'


export const CircledImage = ({width, height, border, imageSrc, borderRadius}) => {
  return (
    <div style={
        {
            width: width,
            height: height,
            border: border,
            borderRadius: borderRadius,
            
        }
    } className="rounded-circle">
        
        <img src={imageSrc} alt="" className='w-100 h-100 rounded-circle'/>

    </div>
  )
}

CircledImage.defaultProps = {
  width: "300px",
  height: "300px",
  borderRadius: 0,
  imageSrc: "",
  border: "none"
}
