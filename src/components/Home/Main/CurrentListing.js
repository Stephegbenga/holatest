import hero from '../../../images/hero.jpg'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import { CircledImage } from '../../utils/CircledImage'


export const CurrentListing = () =>{



    return(

        <section className='container-fluid mb-5'>
        
        <div className='row mb-4'>
        <h3 className='p-3 col-12 col-md-7'>Current Listing</h3>
        <div className='d-flex gap-3 col-12 col-md-5 justify-content-end align-items-center'>
            <select className='select'>
                <option>Auction</option>
                <option>Auction</option>
                <option>Auction</option>
            </select>
            <select className='select'>
                <option>Auction</option>
                <option>Auction</option>
                <option>Auction</option>
            </select>
        </div>

</div>
       
        <div className='row mb-5 gy-5'>
    
            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>



            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>

      <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                        <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />

                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 nft-image-block'>
                <a className=' h-100' href={`${window.location.origin}/nft`}>

                    <div className='h-75 nft-image'>
                        <img src={ufo1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='p-2 border-bottom'>
                        <h4 className='fw-bold'>Hero #1</h4>
                        <div className='fw-bold d-flex align-items-center gap-3'>
                            <CircledImage width="40px" height="40px" border="2px dotted white" imageSrc={team} />
                            <a className='m-0 club-name nav-link'>Mad Men's Club</a>
                            </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-6'>
                            <p className=' border-bottom  p-2'>Current Bid</p>
                          
                            <p className='fw-bold  border-bottom px-2'><span className='price-symbol'>◎</span>2.60</p>
                        </div>

                        <div className='col-6'>
                            <p className='border-bottom p-2'>Ends In</p>
                            
                            <p className='fw-bold time'>5h:30m:3s</p>
                        </div>
                    </div>
                </a>
            </div>
       
    
        </div>

</section>

    )
        }