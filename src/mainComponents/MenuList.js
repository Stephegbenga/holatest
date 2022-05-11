
import { useState, React } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BsChevronDoubleRight } from "react-icons/bs"
import { GoPrimitiveDot } from "react-icons/go"
import { CircledImage } from '../components/utils/CircledImage'
import team from '../images/team.jpg'
import { Copied } from '../components/utils/Copied'



export const MenuList = ({menuBarState, setMenuBarState}) => {

  let [copied, setCopied] = useState(true)
  let [copyState, setCopyState] = useState("none")



  function onCopy(event) {
    navigator.clipboard.writeText(event.target.innerText)
      // Handle Copied data
      .then(function () {
        setCopied('Address Copied!')
        setCopyState('block')
        setTimeout(function () {
        setCopyState('none')

        }, 2000)
      })
      // Handle Error
      .catch(function () {
        setCopied('Copy Failed')
        setCopyState('block')
        setTimeout(function () {
        setCopyState('none')

        }, 2000)
      })
  }


  return (
    <div className="menu-list d-md-none" style={
      {
        display: menuBarState
      }
    }>
      <nav className='list-group-item list-group-flush'>
        <li className='list-group-item text-end' href='#'><AiOutlineCloseCircle className='close' onClick={() => setMenuBarState("none")} /></li>
        <a className='list-group-item' href='#'>Home</a>
        <a className='list-group-item' href='#'>Edit Store</a>
        <a className='list-group-item' href='#'>Mint Nfts</a>
        <a className='list-group-item' href='#'>About</a>
        <a className='list-group-item' href='#'>FAQ</a>
        <a className='list-group-item' href='#'>Terms Of Service</a>
        <a className='list-group-item' href='#'>Privacy Policy</a>

      </nav>


      <div className='d-flex container-fluid mt-3 align-items-center justify-content-between'>

        <CircledImage width="70px" height="70px" border="none" imageSrc={team} />

        <a href='#' className='nav-link'>View Profile <BsChevronDoubleRight /></a>
      </div>

      <hr />

      <div className='d-flex container-fluid mt-3 align-items-center justify-content-between'>

        <span className='sol-price'> 1 sol </span>

        <small className='nav-link address' onClick={onCopy}><GoPrimitiveDot style={{
          color: 'lime'
        }} />6Yjs6...7ysbhs </small>

        <Copied content={copied} display={copyState} />

      </div>
      <div className='text-center pt-2'>
        <button className='btn bg-info rounded-pill w-75 disconnect' type="button">Disconnect</button>

      </div>
    </div>
  )
}
