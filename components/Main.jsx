'use client';
import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import  Footer  from './Footer'
// import { Metadata } from 'next'
 
// export const Metadata = {
//   title: 'My Page Title',
// }
const Main = ({children}) => {
  return (
    <div className='layout'>
     <Head><title>my page</title></Head>
      <header>
        <Navbar/>
      </header>
      <main className='main-container'>{children}</main>
      <Footer/>
    </div>
  )
}

export default Main
