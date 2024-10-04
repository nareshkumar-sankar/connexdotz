import React from 'react'
import "../../../assets/styles/Who we are/Who_we_are_content1.css"
import img1 from "../../../assets/img/home/content/img2.png"
import img2 from "../../../assets/img/who we are/img5.png"
import img3 from "../../../assets/img/who we are/img6.png"


const Who_we_are_content1 = () => {
  return (
    <>
      <div className='container'>
        <div id='who-we-are-content1' className='mx-auto'>
            <h5>Who  we are</h5>
            <h1>Growing your business is your top priority, Taking care of your <span>IT infrastructure is ours.</span></h1>
            <div className='d-flex img-div gap-4'>
                <div id='img-div1'></div>
                <div id='img-div2'></div>
                <div id='img-div3'></div>
            </div>
        </div>

        <div id='who-we-are-content2' className='mx-auto row col-12'>
            <div className='col-lg-6' >
                <h5>We're IT Infrastructure Management Service Provider [IMS]</h5>
                <p>"At conneX dotz, we're dedicated to delivering holistic IT Infrastructure Services & Development that empower businesses to thrive in the digital age. With a focus on IT infrastructure, development, and security, we offer a complete suite of services designed to elevate your technology ecosystem and safeguard your digital assets. Our team of experts specializes in architecting and implementing robust IT infrastructure that forms the backbone of your operations." </p>
            </div>
            <div id='img-div' className='col-6'></div>
        </div>

        <div id="who-we-are-content3" className="row">
            <div className="col-lg-6" id="con1">
              <img src={img1} alt="" />
            </div>
            <div id="con2" className="col-lg-6">
              <p>
                Is your digital transformation <br />
                journey on schedule?
              </p>
              <p>
                Discover our extensive IT capabilities, delivering tailored
                solutions and infrastructure service to fuel your organization's
                growth.
              </p>
              <a href='#'>
                Contact now <i class="fa-solid fa-share-from-square"></i>
              </a>
            </div>
        </div>

        <div id="who-we-are-content4" className='row gap-4 mx-auto'>
            <div className='col-lg-6'>
                <div className='d-flex gap-3'>
                    <h4>Mission</h4>
                    <img src={img2} alt="" />
                </div>
                <p>To deliver innovative, reliable, and secure IT infrastructure solutions that empower businesses to succeed. We strive to provide exceptional service, foster long-term partnerships, and drive growth through technology excellence</p>
            </div>
            <div className='col-lg-6'>
                <div className='d-flex gap-3'>
                    <h4>Vision</h4>
                    <img src={img3} alt="" />
                </div>
                <p>To be the trusted leader in IT infrastructure services and development, transforming the way businesses operate and thrive in a digital world. We envision a future where our expertise, passion, and commitment to innovation enable our clients to achieve unparalleled success and stay ahead of the curve.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Who_we_are_content1
