import React from 'react'
import Header_info from './header/Header_info'
import Navigation from './header/Navigation'
import Header_content from './header/Header_content'
import Home_content1 from './content/Home_content1'
import Home_content2 from './content/Home_content2'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
      <Header_info/>
      <Navigation/>
      <Header_content/>
      <Home_content1/>
      <Home_content2/>
      <Footer/>
    </div>
  )
}

export default Home
