
import React from 'react'
import team from '../../images/team.jpg'
import { Button } from '../utils/Button'
import { RectangledImage } from '../utils/RectangledImage'


export const Metadata = ({setPage}) => {
  return (
    <div>
        <h1 className='text-center'>ADD METADATA TO YOUR NFT'S</h1>
<div className="description-wrapper row h-100 w-100 py-2">


    <div className="col-sm-6">
        <form action="" method="post"  >
<div className="form-group p-2">
    <label className="form-label" for="">  Name:  </label>
    <input type="text" placeholder="Nft Name" id="" className="form-control py-2"/>
</div>
<div className="form-group p-2">
    <label className="form-label" for=""> Description:   </label>
    <textarea placeholder="Add a description about your NFT" id="" className="form-control py-2">

      </textarea>
</div>

<div className="form- p-2">
    <label className="form-label" for="">  External Website: </label>
    <input type="url" placeholder="https://www.example.com" id="" className="form-control py-2"/>
</div>
<div className="form-group p-2">
    <label className="form-label" for="">  Attributes  </label>
    <div className="row px-2">
    <input type="text" placeholder="Name" id="" className="form-control w-50 py-2"/>
    <input type="text" placeholder="Value" id="" className="form-control w-50 py-2 "/>
    </div>
    
</div>
<p role="button" className="p-2 text-warning">Add attribute</p>

<div className="text-center p-3">
<Button content="Proceed" onClickHandler={() => setPage(3)} />

</div>
        </form>
    </div>


    <div className="col-sm-6 images-picked d-flex gap-2 flex-wrap gap-3">


<RectangledImage width="150px" height="150px" imageSrc={team} borderRadius="10px" />
<RectangledImage width="150px" height="150px" imageSrc={team} borderRadius="10px" />
<RectangledImage width="150px" height="150px" imageSrc={team} borderRadius="10px" />

    </div>
</div>
    </div>
  )
}
