import React, { useState } from 'react'
import "../../../assets/styles/contact/Contact_content.css"

const Contact_content = () => {

    const [count, setCount] = useState(0)

    function checkBox(e) {
      if (e.target.value == "") {
        setCount(0)
      }
      else {
        setCount(e.target.value.length)
      }
    }

  return (
    <>
      <div className="container-fluid" id="contact-content1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h1>What’s on your mind?</h1>
              <p>
                We’re here to help! Tell us what you’re looking for
                and we’ll get you connected to the right people.
              </p>
            </div>
            <div className="col-lg-7">
              <div id="img-div1"></div>
              <div id="img-div2"></div>
              <div id="img-div3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id='contact-content2'>
        <div className='container'>
          <h1>Request for Services</h1>
          <p>
            We've driven growth and purposeful transformation across every
            industry <br />
            and we're excited to build on your belief. Tell us a bit more about
            yourself, so we can get the ball rolling.{" "}
          </p>
        </div>

          <div className='container'>
          <div className="input-items row col-lg-12 col-12" >
              <div className='col-lg-5'>
                <p>
                  First name<span>*</span>
                </p>
                <input type="text" className="input-style" required autoFocus/>
              </div>

              <div className='col-lg-5' id='flex-order1'>
                <p>
                  Email<span>*</span>
                </p>
                <input type="email" className="input-style" required />
              </div>

              <div className='col-lg-5' id='flex-order2'>
                <p>
                  Industry<span>*</span>
                </p>
                <input type="text" className="input-style" required />
              </div>

              <div className='col-lg-5' id='flex-order3'>
                <p>
                  Last name <span>*</span>
                </p>
                <input type="text" className="input-style" required />
              </div>

              <div className='col-lg-5' id='flex-order4'>
                <p>
                  Organization<span>*</span>
                </p>
                <input type="text" className="input-style" required />
              </div>

              <div className='col-lg-5' id='flex-order5'>
                <p>
                  How can we help you?<span>*</span>
                </p>
                <input
                  type="text"
                  id="input-text"
                  onChange={checkBox}
                  maxLength={2000}
                />
                <div className='col-lg-9 col-11' id="txt-count">({count}/2000)</div>
              </div>
          </div>
          </div>

       <div className='container'>
       <div className="check-out-style">
          <div>
            <input type="checkbox" />
          </div>
          <p>
            I consent to processing of my personal data entered above 
            for connexdotz to contact me.
          </p>
        </div>
        <div className="check-out-style">
          <div>
            <input type="checkbox" />
          </div>
          <p>
            I would like to receive details about products, services and
            events from connexdotz.
          </p>
        </div>
        <div id="terms">
          <p>For further details on how your personal data will be processed</p>
          <p>and how your consent can be managed,</p>
          <p>
            refer to the <span>Connex Dotz Privacy policy</span>
          </p>
        </div>
        <div id="btn">
          <button>Send request</button>
        </div>
       </div>
      </div>
    </>
  );
}

export default Contact_content
