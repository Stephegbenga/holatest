import ufo2 from '../../../images/ufo2.jpg'


export const Frame = () => {



    return(
        <div className='container-fluid'>
        <div className='row mb-5 gy-5 pb-5'>
            <div className='col-12  col-md-7 col-lg-8 h-100 d-flex flex-column justify-content-center align-items-center'>
                <div className='px-5  h1-wrapper mx-2'>
                    <h1 className='discover'>Discover, explore, and collect NFTs from incredible creators on Solana</h1>
                    <div className='sweet-talk p-3 fst-italic'>Your NO 1 NFT MarketPlace......</div>
                </div>
               
            </div>
            <div className='col-12 col-md-5 col-lg-4'>
                <div>
                    <h2 className='ps-2'>Trending Listings</h2>
                </div>
                <div className='mx-4 trending-list h-100 '>
                    <div className='img-cont h-75'>
                        <img src={ufo2} alt='' className='h-100 w-100' />
                    </div>
                    <div className='p-2  border-bottom rounded-bottom'>
                            <h4 className='fw-bold'>Hero #1</h4>
                            <p className='fw-bold'>Mad Men's Club</p>
                        </div>
                        <div className='row px-2 m-0 bg-dark'>
                            <div className='col-6'>
                                <p>Current Bid</p>
                                <p>&copy; 0.02</p>
                            </div>

                            <div className='col-6'>
                                <p>Ends In</p>
                                <p>5h:30m:3s</p>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}