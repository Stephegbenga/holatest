import React from 'react'

export const Copied = (props) => {
  return (
    <div className='copied' 
    style={{
        bottom: 10,
        left: 10,
        display: props.display
    }}
    >{props.content} </div>
  )
}
