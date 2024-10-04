import React from "react";
import "../../../assets/styles/home/footer/Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="container mx-auto" id="footer-header">
        <div className="row justify-content-evenly align-items-center">
            <div className="col-lg-6 row justify-content-center align-items-lg-center">
                <div className="col-lg-2 col-2"><i class="fa-regular fa-paper-plane" style={{backgroundColor:"#007456",color:"#FFFFFF"}}></i></div>
                <div className="col-lg-10 col-10">
                    <h2>Take the next bold step.</h2>
                    <p>Our focus on connecting services, solutions, and suppliers delivers a whole new level of choice for your enterprise:</p>
                </div>
            </div>
            <div className="col-lg-6" id="footer-input">
                <input type="email" name="email" id="email" placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>

      <div class="container-fluid" id="footer">
        <footer class="text-center text-lg-start container">
          <section>
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-content">
                  <h6 class="mb-3">About Us</h6>
                  <p>At conneX dotz, we're dedicated to delivering holistic ITInfrastructure Services & Solutions that empower businesses to thrive in the digital age</p>
                  <h6 class="mb-3">Registered Address</h6>
                  <p>No, 526, Main Road Salavakkam.</p>
                  <p>+91 7339 060 227</p>
                  <p>letstalk@connexdotz.in</p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-content">
                  <h6 class="mb-3">Company</h6>
                  <p><a href="#">About us</a></p>
                  <p><a href="#">Carrer</a></p>
                  <p><a href="#">Blogs</a></p>
                  <p><a href="#">FAQ’s</a></p>
                  <p><Link to="/contact">Contact </Link></p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3 footer-content">
                  <h6 class="mb-3">Services</h6>
                  <p><a href="#">IT Infrastructure service</a></p>
                  <p><a href="#">Development & IT</a></p>
                  <p><a href="#">UI / UX design</a></p>
                  <p><a href="#">Native application</a></p>
                  <p><a href="#">Cloud / Hosting service</a></p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-content">
                  <h6 class="mb-3">Support</h6>
                  <p><a href="#">Privacy policy</a></p>
                  <p><a href="#">Terms of use</a></p>
                  <p><a href="#">Help center</a></p>
                  <p><a href="#">Updates</a></p>
                  <p><a href="#">Ducumentation</a></p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-content">
                  <h6 class="mb-3">Connect</h6>
                  <p><a href="#"> Linkedin</a></p>
                  <p><a href="#">Twitter</a></p>
                  <p><a href="#">Facebook</a></p>
                  <p><a href="#">Instagram</a></p>
                  <p><a href="#">Youtube </a></p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
      <div className="container-fluid mx-auto" id="copy-rights">
          <div class="text-left container"> © 2024 <a  href="#">Connex Dotz </a>Private Limited. All Right Reserved.</div>
      </div>
    </>
  );
};

export default Footer;
