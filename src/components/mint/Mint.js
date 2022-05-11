import React from 'react'
import { Button } from '../utils/Button'
import { Card } from '../utils/Card'
import { RectangledImage} from '../utils/RectangledImage'
import team from '../../images/team.jpg'

export const Mint = () => {
  return (
    <section className='container-fluid'>
   <h1 className='text-center'>Fees</h1>
<div className='row '>
<div className='col-sm-6 border-end'>
<h5>Cost To Mint 1 NFT</h5>
<div className='d-flex justify-content-between mb-4'>
<span>Estimated Network Fee</span>
<span className='fw-bold'>◎ 0.01</span>
</div>
<hr/>
<div className='d-flex justify-content-between mb-4'>
<span className='fw-bold'>Total:</span>
<span className='fw-bolder'>◎ 0.01</span>
</div>

<div className='d-flex justify-content-end'>

<span>$0.01</span>
</div>
<div className='text-center py-5'>
    <Button content="Mint"/>
</div>
</div>

      {/* 2nd Column */}
      <div className='col-md-6 container-fluid'>
    <div className='row gy-5'>
    <RectangledImage width="170px" height="150px" borderRadius="10px" imageSrc={team} className="col-6 col-sm-4 col-md-3"/>
    <RectangledImage width="170px" height="150px" borderRadius="10px" imageSrc={team} className="col-6 col-sm-4 col-md-3"/>
    <RectangledImage width="170px" height="150px" borderRadius="10px" imageSrc={team} className="col-6 col-sm-4 col-md-3"/>
    <RectangledImage width="170px" height="150px" borderRadius="10px" imageSrc={team} className="col-6 col-sm-4 col-md-3"/>
    </div>
    </div>

</div>




        </section>
  )
}
