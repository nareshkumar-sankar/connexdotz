import React from 'react'
import "../../../assets/styles/home/content/Home_content2.css"
import img12 from "../../../assets/img/home/content/img12.png"
import img13 from "../../../assets/img/home/content/img13.jpg"
import img14 from "../../../assets/img/home/content/img14.jpg"
import img15 from "../../../assets/img/home/content/img15.png"
import img16 from "../../../assets/img/home/content/img16.jpg"

const Home_content2 = () => {
  return (
    <>
        <div className='contaier-fluid' id='content6'>
            <div className='container' >
                <h1>Every Part of Your IT <br /> Ecosystem. Taken Care Of</h1>
                <div className='col-12 row' id='con1'>
                    <div className='col-lg-4'>
                        <div className='d-flex gap-5 items'>
                            <div><span>1</span></div>
                            <div>Consulting</div>
                        </div>
                        <div className='d-flex gap-5 items'>
                            <div><span>2</span></div>
                            <div>Implementation</div>
                        </div>
                        <div className='d-flex gap-5 items'>
                            <div><span>3</span></div>
                            <div>Management and support</div>
                        </div>
                    </div>
                    <div className='col-lg-4' id='con2'>
                        <img src={img12} alt="" />
                    </div>
                    <div className='col-lg-4' id='con3'>
                        <div className='d-flex gap-5 items'>
                            <div><span>4</span></div>
                            <div>Security</div>
                        </div>
                        <div className='d-flex gap-5 items'>
                            <div><span>5</span></div>
                            <div>Migration</div>
                        </div>
                        <div className='d-flex gap-5 items'>
                            <div><span>6</span></div>
                            <div>Help desk services</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid' id='content7'>
            <div className='container'>
                <h2>What our customers says</h2>
                <h3>Don't take our word for it, take theirs!</h3>
                <div id='client-cards' className='d-flex gap-5 flex-wrap'>
                    <div className='client-card'>
                        <div className='con1 d-flex'>
                            <div><img src={img13} alt="" /></div>
                            <div>
                                <p>Gokul </p>
                                <p>JD Printers</p>
                            </div>
                            <div><i class="fa-solid fa-quote-right"></i></div>
                        </div>
                        <div className='con2'>
                            <p>We partnered with connex dotz for our IT infrastructure needs, and the results have been outstanding. Their team is incredibly knowledgeable, responsive, and committed to delivering high-quality service</p>
                        </div>
                    </div>

                    <div className='client-card'>
                        <div className='con1 d-flex '>
                            <div><img src={img13} alt="" /></div>
                            <div>
                                <p>Dhasarathan</p>
                                <p>hdr technologies</p>
                            </div>
                            <div><i class="fa-solid fa-quote-right"></i></div>
                        </div>
                        <div className='con2'>
                            <p>Connex dotz, delivered an exceptional website that has completely transformed our online presence. Their design team is incredibly talented, creating a modern, user-friendly interface that truly captures our brand’s essence.</p>
                        </div>
                    </div>

                    <div className='client-card'>
                        <div className='con1 d-flex'>
                            <div><img src={img13} alt="" /></div>
                            <div>
                                <p>Lavanya</p>
                                <p>dplanthasa</p>
                            </div>
                            <div><i class="fa-solid fa-quote-right"></i></div>
                        </div>
                        <div className='con2'>
                            <p>Connex dotz did an excellent job on our e-commerce development project. They provided valuable insights into best practices and guided us through the process with expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid' id='content8'>
            <div className='container'>
                <h2>Latest from our blog</h2>
                <h3>Get interesting insights, articles, and news</h3>
                <div>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        <div class="col" className='content'>
                          <div class="card">
                            <img src={img14} alt="" class="img-fluid"/>
                            <div class="card-body">
                              <p class="card-title">November 5, 2024 <span>Jobs & Salary</span></p>
                              <p class="card-text">The Future of IT Services: Trends to Watch in 2025  </p>
                            </div>
                          </div>
                        </div>
                        <div class="col" className='content'>
                          <div class="card">
                            <img src={img15} alt="" class="img-fluid"/>
                            <div class="card-body">
                              <p class="card-title">November 10, 2024 <span>Tips & Trends</span></p>
                              <p class="card-text">The Art of Effective Website Design: Key Elements for Success</p>
                            </div>
                          </div>
                        </div>
                        <div class="col" className='content'>
                          <div class="card">
                          <img src={img16} alt="" class="img-fluid"/>
                            <div class="card-body">
                              <p class="card-title">November 13, 2024 <span>Career Advice</span></p>
                              <p class="card-text">Building a Successful E-Commerce Platform: Best Practices and Strategies</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div id='card-btn'>
                    <button>View more articles</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home_content2
