import React from 'react'
import {BsArrowReturnLeft} from "react-icons/bs"

export const Previous = ({onClickHandler}) => {
  return (
    <div className='p-1 icon' onClick={onClickHandler}>
        <BsArrowReturnLeft />
    </div>
  )
}
