import { RectangledImage } from "../../utils/RectangledImage"
import { Header } from "../Header/Header"
import team from '../../../images/team.jpg'
import { CircledImage } from "../../utils/CircledImage"
import {BiCopy, BiImageAdd} from "react-icons/bi"
import {BsTwitter, BsCardImage} from "react-icons/bs"
import {MdOutlineLocalOffer} from "react-icons/md"
import {FiActivity} from "react-icons/fi"


export const Profile = () => {
    

    return(
        <div>
    <Header/>
    <main className="black-bg px-3">
    <div>
        <RectangledImage width="100%" height="300px" imageSrc={team}/>
    </div>
    <div className="black-bg  d-flex flex-column justify-content-center align-items-center gap-4" style={
        {
            marginTop: "-50px"
        }
    }>
      <CircledImage width="100px" height="100px" imageSrc={team} border="3px solid black"/>  
      <div className="r-btn py-2 px-5  rounded-pill">
         <BsTwitter /> link Profile
      </div>
      <div className="address-big mb-3">
      6Yd6...hCtb <span className="icon"><BiCopy /></span>
      </div>

     
    </div>
<div className="border-bottom px-3 row categ">

<span className="px-3 py-3  col"><BsCardImage /><br/>Collections</span>
<span className="px-3 py-3 col"><BiImageAdd /><br/>Creations</span>
<span className="px-3 py-3 col"><MdOutlineLocalOffer /><br/>Offers</span>
<span className="px-3 py-3 col"><FiActivity /><br/>Activity</span>


</div>
    <div className="row align-self-start px-3 py-4 border-bottom mb-3">
<div className="col-6 fw-bolder">
    0 <br/>
    Followers
</div>
<div className="col-6 fw-bolder">
    0 <br/>
    Following
</div>
      </div>

<div className="row my-5">
    <div className="row m-0 col-12  px-4 col-md-8 justify-content-start gap-3">
    <button className="btn  col-3 rounded-pill r-btn">All</button>
    <button className="btn col-3 rounded-pill r-btn">Listed</button>
    <button className="btn col-3 rounded-pill r-btn">Unlisted</button>
    </div>

    <div className="form-group col-12 col-md-4 my-3 px-4">
   <input type="text" className="form-control search-input" placeholder="Search"/>
    </div>
</div>

<div className="row justify-content-evenly gap-4 px-2 gx-2">
    <div className="col-12 col-sm-6 col-md-3 col-lg-4 border p-0" style={
        {
            maxWidth: "320px",
            borderRadius: "10px"
        }
    }>
        <RectangledImage width="100%"  height="300px" borderRadius="10px" imageSrc={team}/>  
        <h5 className="p-3">Hero #1</h5>

         </div>

         <div className="col-12 col-sm-6 col-md-3 col-lg-4 border p-0" style={
        {
            maxWidth: "320px",
            borderRadius: "10px"
        }
    }>
        <RectangledImage width="100%"  height="300px" borderRadius="10px" imageSrc={team}/>  
        <h5 className="p-3">Hero #1</h5>

         </div>


         <div className="col-12 col-sm-6 col-md-3 col-lg-4 border p-0" style={
        {
            maxWidth: "320px",
            borderRadius: "10px"
        }
    }>
        <RectangledImage width="100%"  height="300px" borderRadius="10px" imageSrc={team}/>  
        <h5 className="p-3">Hero #1</h5>

         </div>


         <div className="col-12 col-sm-6 col-md-3 col-lg-4 border p-0" style={
        {
            maxWidth: "320px",
            borderRadius: "10px"
        }
    }>
        <RectangledImage width="100%"  height="300px" borderRadius="10px" imageSrc={team}/>  
        <h5 className="p-3">Hero #1</h5>

         </div>


         <div className="col-12 col-sm-6 col-md-3 col-lg-4 border p-0" style={
        {
            maxWidth: "320px",
            borderRadius: "10px"
        }
    }>
        <RectangledImage width="100%"  height="300px" borderRadius="10px" imageSrc={team}/>  
        <h5 className="p-3">Hero #1</h5>

         </div>


         <div className="col-12 col-sm-6 col-md-3 col-lg-4 border p-0" style={
        {
            maxWidth: "320px",
            borderRadius: "10px"
        }
    }>
        <RectangledImage width="100%"  height="300px" borderRadius="10px" imageSrc={team}/>  
        <h5 className="p-3">Hero #1</h5>

         </div>
</div>
    </main>
            </div>
           
    )
}