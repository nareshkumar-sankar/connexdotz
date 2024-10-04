import React from 'react'
import "../../../assets/styles/what we do/What_we_do_content1.css"
import img1 from "../../../assets/img/home/header/header-con-1.png"
import img2 from "../../../assets/img/home/header/header-con-2.png"
import img3 from "../../../assets/img/home/header/header-con-3.png"
import img4 from "../../../assets/img/home/header/header-con-4.png"
import img5 from "../../../assets/img/home/header/header-con-5.png"

import img6 from "../../../assets/img/What we do/img1.png"
import img7 from "../../../assets/img/What we do/img2.png"
import img8 from "../../../assets/img/What we do/img3.png"
import img9 from "../../../assets/img/What we do/img4.png"
import img10 from "../../../assets/img/What we do/img5.png"
import img11 from "../../../assets/img/What we do/img6.png"
import img12 from "../../../assets/img/What we do/img7.png"
import img13 from "../../../assets/img/What we do/img8.png"

const What_we_do_content1 = () => {
  return (
    <>
      <div className="container-fluid" id="what-we-do-content1">
        <div className="container">
          <div className='row flex-wrap'>
          <div className="mt-lg-5 col-lg-6">
            <div id="con1">
              <p>
                Your Business Matters. We Help Make <span>IT Happen.</span>
              </p>
              <p>
                Connex dotz infrastructure services monitors and manages
                large-scale mission critical infrastructure for some of the
                leading enterprises across the globe
              </p>
            </div>
            <div
              id="con2"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <i class="fa-solid fa-magnifying-glass"></i> Title, keywords
              </span>
              <span>
                <i class="fa-regular fa-folder"></i> All categories
              </span>
              <button className="btn-con ms-4">Search</button>
            </div>
            <p>
              Popular Searches:{" "}
              <span>Cloud hosting, migration, surveillance</span>
            </p>
            <div id="con3">
              <p className="ms-2 pt-3">think.solve.&#123;develop&#125;</p>
              <div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
          <div id="con4" className="col-lg-6">
            <img src={img5} alt="" className="mt-5" />
          </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="what-we-do-content2">
        <div className="container">
          <div className="row col-12 gap-5 justify-content-center">
            <div className="col-lg-3 text-center">
              <div>
                <i class="fa-regular fa-file-lines"></i>
              </div>
              <p>IT Infrastructure Service</p>
            </div>
            <div className="col-lg-3 text-center">
              <div>
                <i class="fa-solid fa-code"></i>
              </div>
              <p>Software Development</p>
            </div>
            <div className="col-lg-3 text-center">
              <div>
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <p>Cyber security Service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid col-12" id="what-we-do-content3">
        <div className="container">
          <div className="row col-12" id='con1'>
            <div className='col-lg-6'>
              <h3>Explore We offered service </h3>
              <h5>Transforming businesses</h5>
            </div>
            <div class="align-self-center col-lg-6">
              <a href="#">View all Service</a>
            </div>
          </div>
          <div id='card-grid' >
            <div className='row col-12 gap-5 mt-5'>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img6} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Development & IT</h5>
                    <p class="card-text">Transforming ideas into innovative solutions through cutting-edge development and IT expertise. </p>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img7} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">UI / UX  Design</h5>
                    <p class="card-text">Crafting intuitive and engaging user experiences through creative UI/UX design. </p>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img8} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">ERP / CRM / CMS </h5>
                    <p class="card-text">Streamlining business operations with comprehensive ERP, CRM, and CMS solutions.</p>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img9} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Cloud Service</h5>
                    <p class="card-text">Empowering businesses with scalable, secure, and flexible cloud services growth through cloud-based solutions.</p>
                  </div>
                </div>
            </div>
            <div className='row col-12 gap-5 mt-5'>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img10} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Native Apps</h5>
                    <p class="card-text">Building high-performance, user-friendly native applications for mobile and web.</p>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img11} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">IT Infrastructure Service</h5>
                    <p class="card-text">Building robust, secure, and efficient IT infrastructure foundations. Supporting business growth.</p>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img12} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">IT Managed Service</h5>
                    <p class="card-text">Proactive IT managed services and support for optimal system performance. Ensuring business continuity, security</p>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img13} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Support & Admin</h5>
                    <p class="card-text">Efficient and effective administration solutions for streamlined business operations.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="what-we-do-content4">
        <div className="container">
          <div className="row justify-content-between align-items-center mx-auto" id='con1'>
            <div className='col-lg-6'>
              <h3>Select your industry. <br />Discover our impact.</h3>
            </div>
            <div class="align-self-center col-lg-6">
              <a href="#">Explore Category</a>
            </div>
          </div>
          <div id='card-grid' className='text-center'>
            <div className='row col-12 gap-5 mt-5 mx-auto'>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img6} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Communications, Media, and Information Services</h5>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img7} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Education</h5>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img8} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Healthcare</h5>
                    </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img9} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Banking</h5>
                    </div>
                </div>
            </div>
            <div className='row col-12 gap-5 mt-5 mx-auto'>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img10} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Manufacturing</h5>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img11} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Retail</h5>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img12} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-text">Travel and Logistics</h5>
                  </div>
                </div>
                <div class="card col-3" style={{width: "18rem"}}>
                  <img src={img13} alt="" className='mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title">Energy, Resources, and Utilities</h5>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default What_we_do_content1
