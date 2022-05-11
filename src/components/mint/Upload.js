import React from 'react'
import team from '../../images/team.jpg'
import { useState } from 'react'
import { Button } from '../utils/Button'
import { RectangledImage } from '../utils/RectangledImage'


export const Upload = ({setPage}) => {
 
  const [fileName, setFileName] = useState("")


  const browseFiles = () => {
    document.querySelector('.upload-assets').click()
  }

  return (
    <div className='d-flex flex-column gap-5'>
    <h1 className='text-center'>
  UPLOAD YOUR ASSETS {fileName}
</h1>
<div class="image-slide-wrapper ">
  <div class="image-slide d-flex gap-4">
  <div className='d-flex align-items-center'>
    <RectangledImage height="150px" width="150px" borderRadius="8px" imageSrc={team}/>
      
  </div>
  
  </div>


</div>

<div className='d-flex justify-content-center gap-5'>
<Button type="button" onClickHandler={browseFiles} content="Upload"/>
<Button content="Proceed" onClickHandler={()=>{setPage(2)}}/>
<input type="file" className='upload-assets'/>
</div>
</div>
  )
}
