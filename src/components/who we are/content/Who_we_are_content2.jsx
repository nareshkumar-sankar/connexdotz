import React, { useEffect, useState } from 'react'
import "../../../assets/styles/Who we are/Who_we_are_content2.css"
import img4 from "../../../assets/img/who we are/img7.png"
import img5 from "../../../assets/img/home/content/img8.png"
import img6 from "../../../assets/img/home/content/img9.png"
import img7 from "../../../assets/img/home/content/img10.png"
import img8 from "../../../assets/img/home/content/img11.png"
import img9 from "../../../assets/img/home/content/img13.jpg"

const Who_we_are_content2 = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1(prevCount => {
        if (prevCount < 10) {
          return prevCount + 1;
        } else {
          clearInterval(interval1); 
          return prevCount;
        }
      });
    }, 200);

    return () => clearInterval(interval1);
  }, []);

  useEffect(()=>{
    const interval2 = setInterval(() => {
        setCount2(prevCount => {
          if (prevCount < 20) {
            return prevCount + 1;
          } else {
            clearInterval(interval2); 
            return prevCount;
          }
        });
      }, 100);
  
      return () => clearInterval(interval2);
  },[])

  useEffect(()=>{
    const interval3 = setInterval(() => {
        setCount3(prevCount => {
          if (prevCount < 20) {
            return prevCount + 1;
          } else {
            clearInterval(interval3); 
            return prevCount;
          }
        });
      }, 100);
  
      return () => clearInterval(interval3);
  },[])

  useEffect(()=>{
    const interval4 = setInterval(() => {
        setCount4(prevCount => {
          if (prevCount < 50) {
            return prevCount + 1;
          } else {
            clearInterval(interval4); 
            return prevCount;
          }
        });
      }, 40);
  
      return () => clearInterval(interval4);
  },[])

  return (
    <>
        <div className='container'>
            <div id="who-we-are-content5" className="row gap-4">
              <div className="col-lg-6 right">
                <img src={img4} alt="" />
              </div>
              <div className="col-lg-6 left">
                <h3>We're a dynamic team focused on excellence</h3>
                <p>
                  We bring together deep industry expertise and the latest IT
                  advancements to deliver custom solutions and products that
                  perfectly fit the needs and behavior of their users
                </p>
                <div id="grid-container">
                  <div className="grid-items d-flex gap-3">
                    <div>
                      <img src={img5} alt="" />
                    </div>
                    <div>
                      <p>Unrivaled Expertise</p>
                    </div>
                  </div>
                  <div className="grid-items d-flex gap-3">
                    <div>
                      <img src={img6} alt="" />
                    </div>
                    <div>
                      <p>Reliability Redefined</p>
                    </div>
                  </div>
                  <div className="grid-items d-flex gap-3">
                    <div>
                      <img src={img7} alt="" />
                    </div>
                    <div>
                      <p>Tailored Solutions</p>
                    </div>
                  </div>
                  <div className="grid-items d-flex gap-3">
                    <div>
                      <img src={img8} alt="" />
                    </div>
                    <div>
                      <p>Continuous Support </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='who-we-are-content6'>
                <div id='con1'>
                <h5>OUR MISSION </h5> 
                <p>We mission is to empower every industry <br />professional to find their perfect work <br />opportunity, faster and easier than ever before.</p>
                </div>
                <div id='con2' className='row col-12 text-center'>
                    <div className='col-lg-3'><div>{count1}+</div> <p>Employees</p></div>
                    <div className='col-lg-3'><div>{count2}+</div> <p>Projects</p></div>
                    <div className='col-lg-3'><div>{count3}+</div> <p>Customers</p></div>
                    <div className='col-lg-3'><div>{count4}+</div> <p>Cup of cofee</p></div>
                </div>
            </div>
        </div>

        <div className='container-fluid' id='who-we-are-content7'>
            <div className='container'>
                <h2>What our customers says</h2>
                <h3>Don't take our word for it, take theirs!</h3>
                <div id='client-cards' className='d-flex gap-4 flex-wrap'>
                    <div className='client-card'>
                        <div className='con1 d-flex'>
                            <div><img src={img9} alt="" /></div>
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
                            <div><img src={img9} alt="" /></div>
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
                            <div><img src={img9} alt="" /></div>
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
        
    </>
  )
}

export default Who_we_are_content2
