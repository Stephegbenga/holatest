import React from 'react'
import { RectangledImage} from '../utils/RectangledImage'
import { CircledImage } from '../utils/CircledImage'
import team from '../../images/team.jpg'
import { Button } from '../utils/Button'


export const Royalties = ({setPage}) => {
  return (
    <section>
  <h1 className='text-center'>Royalties &amp; Creators</h1>
  <div class="row">
      
      {/* 1st column */}
<div className='col-md-6 border-end'>
    <div className='mb-5'>
 <h5>Royalties</h5>
 <small>Set the Percentage of Secondary Sales</small>
 <input type="number" min="0"  className='w-25 form-control'/> 
 </div>


 <div className='mb-5'>
   <div className='d-flex justify-content-between mb-3'>
    <h5>Creators Split</h5>
    <small className='me-3 text-warning'>Add Creators</small>
    </div>
    <div className='d-flex flex-column gap-3'>
        <div className='d-flex gap-2 align-items-center justify-content-between bg-dark p-1 rounded-pill w-100'>
        <CircledImage width="28px" height="28px" imageSrc={team} border="none"/>
        <small>JzCards Community fund</small>
        <small className='d-flex justify-content-end align-items-center gap-2 '>
        <a className='nav-link p-0 text-warning' href="#" >learn more</a>
        <span className='pe-1'>2%</span>
       
        </small>
        </div>
        <div className='d-flex justify-content-between  bg-dark p-1 rounded-pill w-100 gap-2 align-items-center '>
            <CircledImage width="28px" height="28px" imageSrc={team} border="none"/>
            <small>y8218...y14y</small>
            <small className='pe-1'>98%</small>
        </div>
    </div>

</div>
    <div className=''>
        <h5>Editions</h5>
        <form>
            <div className='form-group'>
                <input type="radio" className='form-check-inline' name="edition"/>
                <label className='form-label '>One Of One</label> 
                <br/>
                <small>This is a single one of a kind NFT.</small>
                <hr/>
            </div>
            <div className='form-group'>
                <input type="radio" className='form-check-inline' name="edition"/>
                <label className='form-label '>Limited Edition</label> 
                <br />
                <small>A fixed number of identical NFTs will be minted.</small>
                <hr/>

            </div>
            <div className='form-group'>
                <input type="radio" className='form-check-inline' name="edition"/>
                <label className='form-label '>Master Edition</label> 
                <br/>
                <small>As many NFTs as you want.</small>
                <hr/>

            </div>
        </form>
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
  <div className="text-center py-2">
<Button content="Proceed" onClickHandler={() => setPage(4)} />

</div>
    </section>
  )
}
