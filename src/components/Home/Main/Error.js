
import React from 'react'
import { Header } from '../Header/Header'
import { Card } from '../../utils/Card'


export const Error = () => {
  return (
    <div className=''>
<Header />
<main style={
    {
       backgroundColor: 'transparent' 
    }
}>
<div className='d-flex justify-content-center'>
<Card >
    <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
        <h2 class="error">404</h2>
        <p>Page Not Found, please return to <a href={window.location.origin} className="px-1 navlink text-primary">Home Page</a></p>
      
    </div>
</Card>

</div>
</main>
    </div>
  )
}
