import React from 'react'
import What_we_do_content1 from './content/What_we_do_content1'
import What_we_do_content2 from './content/What_we_do_content2'
import Header_info from '../home/header/Header_info'
import Navigation from '../home/header/Navigation'
import Footer from '../home/footer/Footer'

const What_we_do = () => {
  return (
    <>
        <Header_info/>
        <Navigation/>
        <What_we_do_content1/>
        <What_we_do_content2/>
        <Footer/>
    </>
  )
}

export default What_we_do
