import React from 'react'
import "../../../assets/styles/what we do/What_we_do_content2.css"
import img1 from "../../../assets/img/What we do/img17.png"

const What_we_do_content2 = () => {
  return (
    <>
        <div id='what-we-do-content5' className='container-fluid'>
            <div className='container'>
                <div className='row col-12 justify-content-between'>
                    <div className='col-lg-1 col'></div>
                    <div className='col-lg-4 align-self-center'>
                        <h6>Connex dotz</h6>
                        <h2>We should get to know each other!</h2>
                        <p>Find professionals from around the world and across all skills.</p>
                        <a href="#">Contact Now  </a>
                    </div>
                    <div className='col-lg-6'>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        
            <div className='container mx-auto' id='what-we-do-content6'>
                <h2>Our Process</h2>
                <p>How we excel in delivering optimal solutions.</p>
                <div>
                    <div className='row col-12 gap-5 mx-auto'>
                        <div class="card col-4">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div>1</div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                          <div class="card-body">
                            <h5 class="card-title">Discover</h5>
                            <p class="card-text">The discovery period is a time where we get a better understanding of the project at hand. </p>
                          </div>
                        </div>
                        <div class="card col-4">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div>2</div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                          <div class="card-body">
                            <h5 class="card-title">Estimate</h5>
                            <p class="card-text">After we get a better understanding of the project, we put together a Statement of Work based on the project requirements. </p>
                          </div>
                        </div>
                        <div class="card col-4">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div>3</div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Meetings</h5>
                                <p class="card-text">This is the step where all the magic happens,where we take your idea and turn it into reality.</p>
                            </div>
                        </div>
                    
                    
                        <div class="card col-4">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div>4</div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                          <div class="card-body">
                            <h5 class="card-title">Develop</h5>
                            <p class="card-text">the process of creating, implementing, and maintaining software, systems, and technologies.</p>
                          </div>
                        </div>
                        <div class="card col-4">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div>5</div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                          <div class="card-body">
                            <h5 class="card-title">QA/Testing</h5>
                            <p class="card-text">er companies may overlook but is vitally important to the success of anything that is developed.</p>
                          </div>
                        </div>
                        <div class="card col-4">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div>6</div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Review</h5>
                                <p class="card-text">After fully building out and testing the product but before going live, we send a demo of the entire build for review. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='what-we-do-content7' className='container'>
                <div className='row col-12 gap-4'>
                    <div className='col-lg-1'></div>
                    <div class="card col-lg-5">
                        <div class="card-body">
                            <h5 class="card-title">Stay ahead of change</h5>
                            <p class="card-text">Explore our research, insights, and examples of real client impact, designed to help you embrace the key forces of change and get to value faster.</p>
                            <a href="#">Start now</a>
                        </div>
                    </div>
                    <div class="card col-lg-5">
                        <div class="card-body">
                            <h5 class="card-title">Request a custom set of services</h5>
                            <p class="card-text">Briefly describe what help you need, and we’ll get back with a tailored service offering.</p>
                            <a href="#">Start now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default What_we_do_content2
