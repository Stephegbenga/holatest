import React from 'react'
import { Header } from '../Header/Header'
import './styles/CollectionDetails.css'
import hero from '../../../images/hero.jpg'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import {AiOutlineClockCircle} from "react-icons/ai"


export const CollectionDetails = () => {
  return (
    <div>
        <Header />
        <main className="container-fluid">
    

    <div className="row container-xxl">
<section className="d-flex flex-column container-fluid mt-4 mb-4 gap-3 col-md-6">
<div className="row d-flex justify-content-center d-md-none">
    <h2 className="col-12 col-sm-5">TEAM UKRAINE</h2>
    <div className="col-sm-7 row ret">
        <a href="#" className="nav-link col text-decoration-underline">Metadata</a>
        <a href="#" className="nav-link col text-decoration-underline">Transactions</a>
    </div>
</div>

<div className=" d-flex justify-content-center w-100">
<div className="nft-img">
    <img className="w-100 h-100 rounded" src={team} alt=""/>
</div>

</div>

<article className="w-100">
<h3>Description</h3>
<p>Tails went from working at a small aero club to Senior Captain of the Skies. Flying is his passion; destination: to da Moon!</p>
</article>



<div className="">
    <h3>Attributes</h3>
    <div className="row">
        <h5 className="col-6">Rank</h5>
        <h5 className="col-6">Branch</h5>
    </div>
    <div className="row">
        <p className="col-6">Senior Team</p>
        <p className="col-6">Team</p>
    </div>
</div>

<div>
    <h3>Species</h3>
    <p>Rare Gem</p>
</div>

</section>

<div className="container-fluid mt-4 pb-4 px-4 d-flex flex-column gap-5 col-md-6">
    <div className="row d-none d-md-flex">
        <h2 className="col-6">TEAM UKRAINE</h2>
  <a className="nav-link col-3 text-end text-decoration-underline" href="#">Metadata</a>
  <a className="nav-link col-3 text-end text-decoration-underline" href="#">Transactions</a>
    </div>
    
<div className="row box-1 g-3">
   <div className="col-6">
       <div>
       <h5>Creators</h5>
       <p>0x789xnd68x..xhjdi7</p>
       </div>
   </div> 
   <div className="col-6">
       <div>
    <h5>Edition</h5>
    <p>1 0f 1</p>
    </div>
   </div> 
   <div className="col-6">
       <div>
    <h5>Winners</h5>
    <p>1</p>
    </div>
   </div> 
   <div className="col-6">
       <div>
    <h5>NFTs</h5>
    <p>1</p>
    </div>
   </div> 
</div>

<div className="d-flex flex-column bg-style p-3">
<div className="row">
    <div className="col-6 d-flex flex-column gap-3 p-3 align-items-center">
    <h5>Ends In</h5>
    <p>3d 15h 30m</p>
    </div>
    <div className="col-6 d-flex flex-column align-items-center gap-3 p-3">
        <h5>Current Bid</h5>
        <p><span className='price-symbol'>◎</span>0.15</p>
    </div>
</div>
<div className="text-center p-3">
    <a href="#" className="nav-link border auction-works" role="button">HOW AUCTIONS WORK</a>
</div>
<div >
    <button className="btn connect w-100 p-3 rounded" type="button">Connect Wallet to place Bid</button>
</div>
</div>


<div className="d-flex flex-column bg-style p-4 gap-3">

{/* Bid History Header */}
<div className="">
    <h5>Bid History</h5> 
    <hr/>
</div>

{/* Bid History Body */}
<div className="d-flex gap-3">
<div className="bid-img-wrapper rounded-circle p-0">
    <img src={ufo2} alt="" className="w-100 h-100  rounded-circle"/>
</div>

<div className="">
    <p>0x789...83jdjdk</p>
    <small><AiOutlineClockCircle />&nbsp;2 hrs ago</small>
</div>

<div className="mx-auto">
    <p><span className='price-symbol'>◎</span>0.15</p>
    <small>$14.26</small>
</div>
</div>

</div>

<div>

</div>
</div>

</div>

</main>
        
    </div>
  )
}
