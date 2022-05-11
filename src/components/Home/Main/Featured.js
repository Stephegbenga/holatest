import hero from '../../../images/hero.jpg'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import { CircledImage } from '../../utils/CircledImage'

export const Featured = () =>{


return (


<div className='container-fluid pt-5'>
<h3 className='p-3'>Featured Creators</h3>
<div className='row mb-5 gy-5'>

    <div className='col-sm-6 col-md-4  col-lg-3 f-nft-image-block position-relative d-flex gap-5 flex-column justify-content-center align-items-center'>
      
        <img src={hero} alt='' className='w-100 h-100' />

<div className='position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        <h4 className='top-0 c-name'>Mad Men</h4>
        <CircledImage  width="100px" height="100px" border="3px solid white" imageSrc={team}/>
<a className='bottom-0 nav-link' href='#' >madmen.jzcard.com</a>

</div>
    </div>
    <div className='col-sm-6 col-md-4 col-lg-3  f-nft-image-block position-relative d-flex justify-content-center align-items-center'>
    <img src={team} alt='' className='w-100 h-100' />
 

        
        <div className='position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        <h4 className='top-0 c-name'>Mad Men</h4>
        <CircledImage  width="100px" height="100px" border="3px solid white" imageSrc={team}/>

<a className='bottom-0 nav-link' href='#' >madmen.jzcard.com</a>

</div>

    </div>
    <div className='col-sm-6 col-md-4 col-lg-3 f-nft-image-block position-relative d-flex justify-content-center align-items-center'>
        <img src={ufo1} alt='' className='w-100 h-100'/>


        <div className='position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        <h4 className='top-0 c-name'>Mad Men</h4>
        <CircledImage  width="100px" height="100px" border="3px solid white" imageSrc={team}/>

<a className='bottom-0 nav-link' href='#' >madmen.jzcard.com</a>

</div>


    </div>
    <div className='col-sm-6 col-md-4 col-lg-3 f-nft-image-block position-relative d-flex justify-content-center align-items-center'>

        <img src={ufo2} alt='' className='w-100 h-100' />
        <div className='position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        <h4 className='top-0 c-name'>Mad Men</h4>
        <CircledImage  width="100px" height="100px" border="3px solid white" imageSrc={team}/>

<a className='bottom-0 nav-link' href='#' >madmen.jzcard.com</a>

</div>

    </div>
</div>
</div>
)

    }