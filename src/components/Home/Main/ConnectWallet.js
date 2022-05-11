
import React from 'react'
import { Header } from '../Header/Header'
import { Card } from '../../utils/Card'

async function connectSolanaWallet(){
  console.log('You clicked Solana Connect Button.');
  try {
    const resp = await window.solana.connect();
    resp.publicKey.toString()
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
} catch (err) {
    console.log(err.message)
}
}

export const ConnectWallet = () => {
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
        <h2>Connect Your Wallet</h2>
        <button className='btn connect rounded-pill p-2' type='button' onClick={connectSolanaWallet}>Connect</button>
    </div>
</Card>

</div>
</main>
    </div>
  )
}
