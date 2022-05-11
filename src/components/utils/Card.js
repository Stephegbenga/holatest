import React from 'react'
import "../../styles/Card.css"

export const Card = (props) => {
  return (
    <div className='w-100 d-flex justify-content-center'>
        <section className='card-component' style={
            {
               height: props.height ,
               width: props.width
            }
        }>
      {props.children}
        </section>
    </div>
  )

  Card.defaultProps = {
      height: "",
      width: ""
  }
}
