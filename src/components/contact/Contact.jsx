import React from 'react'
import Header_info from '../home/header/Header_info'
import Header_content from '../home/header/Header_content'
import Navigation from '../home/header/Navigation'
import Contact_content from './content/Contact_content'
import Footer from '../home/footer/Footer'

const Contact = () => {
  return (
    <>
      <Header_info/>
      <Navigation/>
      <Contact_content/>
      <Footer/>
    </>
  )
}

export default Contact
