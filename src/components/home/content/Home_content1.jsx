import React from "react";
import "../../../assets/styles/home/content/Home_content1.css"
import img1 from "../../../assets/img/home/content/img1.png"
import img2 from "../../../assets/img/home/content/img2.png"
import img3 from "../../../assets/img/home/content/img3.png"
import img4 from "../../../assets/img/home/content/img4.png"
import img5 from "../../../assets/img/home/content/img5.png"
import img6 from "../../../assets/img/home/content/img6.png"
import img7 from "../../../assets/img/home/content/img7.png"
import img8 from "../../../assets/img/home/content/img8.png"
import img9 from "../../../assets/img/home/content/img9.png"
import img10 from "../../../assets/img/home/content/img10.png"
import img11 from "../../../assets/img/home/content/img11.png"
import img16 from "../../../assets/img/home/content/img16.jpg"
import img14 from "../../../assets/img/home/content/img14.jpg"

import carousel1 from "../../../assets/img/home/content/carousel/img1.png"
import carousel2 from "../../../assets/img/home/content/carousel/img2.png"
import carousel3 from "../../../assets/img/home/content/carousel/img3.png"
import carousel4 from "../../../assets/img/home/content/carousel/img4.png"
import carousel5 from "../../../assets/img/home/content/carousel/img5.png"
import carousel6 from "../../../assets/img/home/content/carousel/img6.png"
import carousel7 from "../../../assets/img/home/content/carousel/img7.png"
import carousel8 from "../../../assets/img/home/content/carousel/img8.png"
import carousel9 from "../../../assets/img/home/content/carousel/img9.png"

const Home_content1 = () => {
  return (
    <>
      <div className="container-fluid" id="cont-1">
        <div className="container">
          <div class="mt-5 row gap-3" id="content1">
            <div class="card col-lg-6 col-12" id="con1">
              <div class="row">
                <div class="col-7">
                  <div class="card-block">
                    <h4 class="card-title">Who we are </h4>
                    <p>
                      At conneX dotz, we're dedicated to delivering holistic IT
                      Infrastructure Services & Solutions that empower
                      businesses to thrive in the digital age.
                    </p>
                    <a href="#" class="btn-cards">
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="col-5 card-img">
                  <img class="d-block w-100" src={img14} alt="" />
                </div>
              </div>
            </div>

            <div class="card col-lg-6 col-12" id="con2">
              <div class="row ">
                <div class="col-sm-7">
                  <div class="card-block">
                    <h4 class="card-title">
                      IT Infrastructure Management Services (IMS)
                    </h4>
                    <p>
                      offers a suite of reliable, responsive, flexible and
                      proven Infrastructure services and solutions that deliver
                      differentiated value to our customers’ business.
                    </p>
                    <a href="#" class="btn-cards">
                      Learn More
                    </a>
                  </div>
                </div>

                <div class="col-sm-5 card-img">
                  <img class="d-block w-100" src={img16} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div id="content2">
            <h2>Transforming businesses</h2>
            <div className="row justify-content-between">
              <p className="col-lg-6">Your Business Matters.We Help Make IT Happen.</p>
              <a className="col-lg-6" href="#">View all services</a>
            </div>
            <div>
              <div id="carouselExampleCaptions"class="carousel carousel-dark slide"data-bs-ride="false">
                <div class="carousel-indicators">
                  <button type="button"data-bs-target="#carouselExampleCaptions"data-bs-slide-to="0"class="active"aria-current="true"aria-label="Slide 1"></button>
                  <button type="button"data-bs-target="#carouselExampleCaptions"data-bs-slide-to="1"aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions"data-bs-slide-to="2"aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card-group">
                      <div class="card">
                        <img src={carousel1} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">Development & IT</h5>
                          <p class="card-text">We are providing customized web solution to satisfy our clients across the globe. </p>
                        </div>
                      </div>
                      <div class="card">
                        <img src={carousel2} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">IT Infrastructure Services </h5>
                          <p class="card-text">Design, deploy, and manage a resilient IT environment that supports your growth.</p>
                        </div>
                      </div>
                      <div class="card">
                        <img src={carousel3} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">Cloud / Hosting Services</h5>
                          <p class="card-text">We are designed to elevate your website's performance and keep it running smoothly 24/7</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card-group">
                      <div class="card">
                        <img src={carousel4} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">ERP / CRM / CMS </h5>
                          <p class="card-text">Streamlining business operations with comprehensive ERP, CRM, and CMS solutions.</p>
                        </div>
                      </div>
                      <div class="card">
                        <img src={carousel5} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">UI / UX  Design</h5>
                          <p class="card-text">Crafting intuitive and engaging user experiences through creative UI/UX design. </p>
                          </div>
                      </div>
                      <div class="card">
                        <img src={carousel6} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">Native Apps</h5>
                          <p class="card-text">Building high-performance, user-friendly native applications for mobile and web.</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card-group">
                      <div class="card">
                        <img src={carousel7} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">IT Managed Service</h5>
                          <p class="card-text">Proactive IT managed services and support for optimal system performance. Ensuring business continuity, security</p>
                          </div>
                      </div>
                      <div class="card">
                        <img src={carousel8} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">Support & Admin</h5>
                          <p class="card-text">Efficient and effective administration solutions for streamlined business operations.</p>
                        </div>
                      </div>
                      <div class="card">
                        <img src={carousel9} alt="" class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">UI / UX design</h5>
                          <p class="card-text">Transform your website, app, or product with our UI/UX design,</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev"type="button"data-bs-target="#carouselExampleCaptions"data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div id="content3" className="row">
            <div className="col-lg-6" id="con1">
              <img src={img2} alt="" />
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
              <button>
                Contact now <i class="fa-solid fa-share-from-square"></i>
              </button>
            </div>
          </div>
        
        </div>
      </div>
      <div className="container">
        <div id="content4">
          <h2>Select your industry. Discover our impact.</h2>
          <div className="row justify-content-between">
            <p className="col-lg-6">
              Discover our extensive IT capabilities, delivering tailored
              solutions and infrastructure service to fuel your
              organization's growth
            </p>
            <a className="col-lg-6" href="#">View all industry</a>
          </div>
          <div id="grid-container">
            <div className="grid-cards col-lg-12 d-flex">
              <div className="grid-img col-1">
                <img src={img3} alt="" />
              </div>
              <div className="grid-cont col-10">
                <h4>Communications, Media, and Information Services</h4>
                <p>Connect. Curate. Comprehend </p>
                <p>
                  We help you tap value beyond the <br /> boundaries.
                </p>
                <button>
                  Let’s talk <i class="fa-regular fa-circle-right"></i>
                </button>
              </div>
              <div className="grid-icon col-1">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>

            <div className="grid-cards col-lg-12 d-flex">
              <div className="grid-img col-1">
                <img src={img4} alt="" />
              </div>
              <div className="grid-cont col-10">
                <h4>Education</h4>
                <p>
                  Education reimagined: Immersive, personalized, and seamlessly
                  connected
                </p>
                <p>
                  We partner with educational institutions to revolutionize
                  learning through innovative digital solutions
                </p>
                <button>
                  Let’s talk <i class="fa-regular fa-circle-right"></i>
                </button>
              </div>
              <div className="grid-icon col-1">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>

            <div className="grid-cards col-12 d-flex">
              <div className="grid-img col-1">
                <img src={img5} alt="" />
              </div>
              <div className="grid-cont col-10">
                <h4>Healthcare </h4>
                <p>Patient-centric approach</p>
                <p>
                  We enable the realization of intelligent, connected, and
                  patient-focused healthcare solutions
                </p>
                <button>
                  Let’s talk <i class="fa-regular fa-circle-right"></i>
                </button>
              </div>
              <div className="grid-icon col-1">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>

            <div className="grid-cards col-12 d-flex">
              <div className="grid-img col-1">
                <img src={img6} alt="" />
              </div>
              <div className="grid-cont col-10">
                <h4>Retail</h4>
                <p>Lead the evolution of the retail industry</p>
                <p>
                  We enable you to become the leading enterprise of tomorrow,
                  starting today{" "}
                </p>
                <button>
                  Let’s talk <i class="fa-regular fa-circle-right"></i>
                </button>
              </div>
              <div className="grid-icon col-1">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div id="content5" className="row col-12">
          <div className="col-lg-5 right">
            <img src={img7} alt="" />
          </div>
          <div className="col-lg-7 left">
            <h3>We're a dynamic team focused on excellence</h3>
            <p>
              We bring together deep industry expertise and the latest IT
              advancements to deliver custom solutions and products that
              perfectly fit the needs and behavior of their users
            </p>
            <div id="grid-container">
              <div className="grid-items d-flex gap-3">
                <div>
                  <img src={img8} alt="" />
                </div>
                <div>
                  <p>Unrivaled Expertise</p>
                </div>
              </div>
              <div className="grid-items d-flex gap-3">
                <div>
                  <img src={img9} alt="" />
                </div>
                <div>
                  <p>Reliability Redefined</p>
                </div>
              </div>
              <div className="grid-items d-flex gap-3">
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <p>Tailored Solutions</p>
                </div>
              </div>
              <div className="grid-items d-flex gap-3">
                <div>
                  <img src={img11} alt="" />
                </div>
                <div>
                  <p>Continuous Support </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_content1;
