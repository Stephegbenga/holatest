import React from 'react'
import { Header } from '../Header/Header'
import "./styles/general.css"
import "./styles/listings.css"
import hero from '../../../images/hero.jpg'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import sol from "../../../images/sol.png";
import { CircledImage } from '../../utils/CircledImage'

export const Listings = () => {
  return (
    <div>
      <Header />

<div className='image-cover d-none d-md-flex justify-content-center align-items-center'>

<CircledImage width="200px" height="200px" border="3px solid white" imageSrc={team} />


</div>


      <div className='black-bg py-5 px-3'>
        <div className='nft-collection-desc d-flex justify-content-center'>
        <article className='text-center'>
          <h1>
            The Ufo's Cabinet
          </h1>
          <p>
          Highce Cream Cones is a tight knit discord group focused on the Solana Blockchain. As a group we plan to provide an environment for users of all experience not limited to the crypto space but also like minded individuals with similar hobbies and passions whilst functioning as a true DAO.
          </p>
        </article>
        </div>

<div className='row px-2 py-3 lse gy-3'>
  <div className='col-12 col-sm-6 col-sm-6'>
<button type='button' className='btn active'>Live | <span className='l-amount'>6</span></button>
<button type='button' className='btn'>Secondary | <span className='s-amount'>1</span></button>
<button type='button' className='btn'>Ended | <span className='e-amount'>5</span></button>
  </div>
  <div className='col-12 col-sm-6 d-flex justify-content-end'>
<form action='#' method='GET' className='w-75'>
  <input type="text" class="form-control" placeholder='Search The Collection' />
</form>
  </div>
</div>


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



    </div>

  )
}
