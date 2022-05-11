import React from 'react'
import { RectangledImage } from '../../utils/RectangledImage'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import { CircledImage } from '../../utils/CircledImage'

export const Collections = () => {
  return (
    <div className=''>
        <section>
            <h3 className='py-3'>Collections</h3>
            <div className='row gy-4'>
<div className='col-12 col-sm-6 col-md-4 position-relative'>
    <RectangledImage width="100%" height="220px" imageSrc={team} borderRadius="10px"/>
    <div className='position-absolute' style={
        {
            left: "18px",
            top: "8px"
        }
    }>
    <CircledImage imageSrc={ufo2}  width="30px" height="30px"/>
    </div>
</div>
<div className='col-12 col-sm-6 col-md-4 position-relative'>
    <RectangledImage width="100%" height="220px" imageSrc={ufo2} borderRadius="10px"/>
    <div className='position-absolute' style={
        {
            left: "18px",
            top: "8px"
        }
    }>
    <CircledImage imageSrc={ufo2}  width="30px" height="30px"/>
    </div>
</div>
<div className='col-12 col-sm-6 col-md-4 position-relative'>
    <RectangledImage width="100%" height="220px" imageSrc={ufo1} borderRadius="10px"/>
    <div className='position-absolute' style={
        {
            left: "18px",
            top: "8px"
        }
    }>
    <CircledImage imageSrc={ufo2}  width="30px" height="30px"/>
    </div>
</div>
<div className='col-12 col-sm-6 col-md-4 position-relative'>
    <RectangledImage width="100%" height="220px" imageSrc={team} borderRadius="10px"/>
    <div className='position-absolute' style={
        {
            left: "18px",
            top: "8px"
        }
    }>
    <CircledImage imageSrc={ufo2}  width="30px" height="30px"/>
    </div>
</div>
<div className='col-12 col-sm-6 col-md-4 position-relative'>
    <RectangledImage width="100%" height="220px" imageSrc={ufo2} borderRadius="10px"/>
    <div className='position-absolute' style={
        {
            left: "18px",
            top: "8px"
        }
    }>
    <CircledImage imageSrc={ufo1}  width="30px" height="30px"/>
    </div>
</div>
<div className='col-12 col-sm-6 col-md-4 position-relative'>
    <RectangledImage width="100%" height="220px" imageSrc={ufo1} borderRadius="10px"/>
    <div className='position-absolute' style={
        {
            left: "18px",
            top: "8px"
        }
    }>
    <CircledImage imageSrc={ufo2}  width="30px" height="30px"/>
    </div>
</div>
            </div>
        </section>
    </div>
  )
}
