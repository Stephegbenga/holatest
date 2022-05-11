import React from 'react'
import { Header } from '../Header/Header'
import hero from '../../../images/hero.jpg'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import sol from "../../../images/sol.png";
import "./styles/general.css"
import "./styles/creators.css"
import { CircledImage } from '../../utils/CircledImage'

export const Creators = () => {
  return (
    <div >
<Header />

<main className='black-bg container-fluid container-xxl px-4 py-3'>
<div className=''>
<h1>Creators</h1>
<a className='d-flex gap-2 align-items-center w-100  my-5 py-4  nav-link creator-card ' href=''>
    
    <CircledImage width="60px" height="60px" imageSrc={team} border="3px solid white" />

    <p className='address mb-0'>GQMe...ZjHh</p>
    
</a>
</div>

<div>
    <div className='row gy-5'>
        <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block h-450'>
                <a className='h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                    </div>

                   <div className='p-2'>
                          <div className='d-flex p-2 gap-3 align-items-center'>
                      <span className='fw-bold sol-price'><img src={sol} className="sol-logo"/> 1</span>
                      |
                      <span className='dollar-price'><span className='dollar-sign'>$</span>13.90</span>
                    </div>
                    <small className='win fst-italic'>Winning Bid</small>
                    </div>
                    
                            
                </a>
            </div>



            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block h-450'>
                <a className='h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                    </div>

                   <div className='p-2'>
                          <div className='d-flex p-2 gap-3 align-items-center'>
                      <span className='fw-bold sol-price'><img src={sol} className="sol-logo"/> 1</span>
                      |
                      <span className='dollar-price'><span className='dollar-sign'>$</span>13.90</span>
                    </div>
                    <small className='win fst-italic'>Winning Bid</small>
                    </div>
                    
                            
                </a>
            </div>

             <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block h-450'>
                <a className='h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                    </div>

                   <div className='p-2'>
                          <div className='d-flex p-2 gap-3 align-items-center'>
                      <span className='fw-bold sol-price'><img src={sol} className="sol-logo"/> 1</span>
                      |
                      <span className='dollar-price'><span className='dollar-sign'>$</span>13.90</span>
                    </div>
                    <small className='win fst-italic'>Winning Bid</small>
                    </div>
                    
                            
                </a>
            </div>


             <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block h-450'>
                <a className='h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                    </div>

                   <div className='p-2'>
                          <div className='d-flex p-2 gap-3 align-items-center'>
                      <span className='fw-bold sol-price'><img src={sol} className="sol-logo"/> 1</span>
                      |
                      <span className='dollar-price'><span className='dollar-sign'>$</span>13.90</span>
                    </div>
                    <small className='win fst-italic'>Winning Bid</small>
                    </div>
                    
                            
                </a>
            </div>

             <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block h-450'>
                <a className='h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                    </div>

                   <div className='p-2'>
                          <div className='d-flex p-2 gap-3 align-items-center'>
                      <span className='fw-bold sol-price'><img src={sol} className="sol-logo"/> 1</span>
                      |
                      <span className='dollar-price'><span className='dollar-sign'>$</span>13.90</span>
                    </div>
                    <small className='win fst-italic'>Winning Bid</small>
                    </div>
                    
                            
                </a>
            </div>     
</div>

</div>
</main>
  </div>
  )
}
