import React from 'react'
import "../../../assets/styles/home/header/Header_content.css"
import img1 from "../../../assets/img/home/header/header-con-1.png"
import img2 from "../../../assets/img/home/header/header-con-2.png"
import img3 from "../../../assets/img/home/header/header-con-3.png"
import img4 from "../../../assets/img/home/header/header-con-4.png"
import img5 from "../../../assets/img/home/header/header-con-5.png"

const Header_content = () => {
  return (
    <>
      <div className='container-fluid' id='header-content'>
      <div className='container'>
        <div className='row'>
          <div className='mt-lg-5 col-lg-6 '>
            <div id='header-con1'>
               <p><span>IT infrastructure</span> forms the Backbone of Every successful business.</p>
               <p>We're IT Infrastructure Management Service Provider [IMS].</p>
            </div>
            <div id='header-con2' className='mt-lg-5'>
                <button className='btn-con ms-4'>Start Now</button>
            </div>
            <div id='header-con3' className='mt-lg-5'>
                <p className='ms-2 pt-3'>think.solve.&#123;develop&#125;</p>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
        <div id='header-con4' className='col-lg-6'>
            <img src={img5} alt="" className='mt-5'/>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header_content
