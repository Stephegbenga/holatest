import React from 'react'
import hero from '../../../images/hero.jpg'
import team from '../../../images/team.jpg'
import ufo1 from '../../../images/ufo1.jpg'
import ufo2 from '../../../images/ufo2.jpg'
import {IoSettingsOutline} from "react-icons/io5"
import { CircledImage } from '../../utils/CircledImage'


export const Header = () => {
  return (
    <header>
    {/* MOBILE VIEW  */}
    <nav className="mobile-nav nav justify-content-center gap-2 p-2 d-md-none">
        <a href="#" className="nav-link">How To Buy</a>
        <a href="#" className="nav-link">&copy;</a>
        <span role="button"  className="connect d-flex justify-content-center align-items-center rounded-pill">Connect</span>

    </nav>
    
    <div className="d-flex justify-content-center mt-4 d-md-none">
<nav className="row d-md-none w-50 justify-content-center py-3">
<a href="#" className="nav-link col-6 ">Listings</a>
<a href="#" className="nav-link col-6 ">Creators</a>
<a href="#" className=" collection-img-wrapper rounded-circle col-12 mt-4">
  <img className="w-100 h-100 rounded-circle" src={ufo2} alt=""/>
</a>
</nav>

</div>

 {/* TABLET AND DESKTOP VIEW  */}

<div className="d-none d-md-flex row p-2">
<nav className="nav col-md-4 align-items-center">
<a href="#" className="nav-link">
<CircledImage width="60px" height="60px" border="none" imageSrc={hero} />

</a>
<a href="#" className="nav-link">Listings</a>
<a href="#" className="nav-link">Creators</a>

</nav>

    <nav className="nav col-md-8 justify-content-end align-items-center">
        <a href="#" className="nav-link">How To Buy</a>
        <a href="#" className="nav-link"><IoSettingsOutline /></a>
        <span role="button"  className="connect rounded-pill p-2 text-center">Connect</span>

    </nav>


    </div>
</header>

  )
}
