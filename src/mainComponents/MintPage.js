
import React, {useState} from 'react'
import { Metadata } from '../components/mint/Metadata'
import { Mint } from '../components/mint/Mint'
import { Royalties } from '../components/mint/Royalties'
import { Upload } from '../components/mint/Upload'
import { Card } from '../components/utils/Card'
import { Close } from '../components/utils/Close'
import { Previous } from '../components/utils/Previous'
import team from '../images/team.jpg'
import "../styles/mint.css"

export const MintPage = () => {

const [page, setPage]= useState(1)

const goToPreviousPage = () =>{
 
 const noReturnValue = page > 1 ? setPage(page - 1): ""
}


const changePage = (page) => {
  switch (page) {
    case 1: return <Upload setPage={setPage}/>
      break;
    case 2: return <Metadata setPage={setPage}/>
    break;
    case 3: return <Royalties setPage={setPage}/>
    break;

    case 4: return <Mint />
    break;

    default: 
     
  }
}
  return (
    <div className='d-flex justify-content-center align-items-center' style={
      {
        height: '100vh'
      }
    } >
      <Card height="90vh" width="75%">
        
      <div className='d-flex justify-content-between'>
       {page !== 1 ? <Previous onClickHandler={() => goToPreviousPage()}/> : "" }
        <Close />
        
      </div>
      
{ changePage(page)  }
      
      </Card>
    </div>
  )
}
