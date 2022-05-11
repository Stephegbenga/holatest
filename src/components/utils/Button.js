import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button type='button' className='button' onClick={props.onClickHandler}>
    {props.content}
            </button>
    </div>
  )
}
