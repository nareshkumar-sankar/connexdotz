import React from 'react'
import Header_info from '../home/header/Header_info'
import Navigation from '../home/header/Navigation'
import Who_we_are_content1 from './content/Who_we_are_content1'
import Who_we_are_content2 from './content/Who_we_are_content2'
import Footer from '../home/footer/Footer';

const Who_we_are = () => {
  return (
    <>
      <Header_info/>
      <Navigation/>
      <Who_we_are_content1/>
      <Who_we_are_content2/>
      <Footer/>
    </>
  )
}

export default Who_we_are
