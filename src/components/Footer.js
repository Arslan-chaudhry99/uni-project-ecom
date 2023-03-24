import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="section">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-xs-6">
                <div class="footer">
                  <h3 class="footer-title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>
                  <ul class="footer-links">
                    <li>
                      <a >
                        <i class="fa fa-map-marker"></i>1734 Stonecoal Road
                      </a>
                    </li>
                    <li>
                      <a >
                        <i class="fa fa-phone"></i>+021-95-51-84
                      </a>
                    </li>
                    <li>
                      <a >
                        <i class="fa fa-envelope-o"></i>email@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-xs-6">
                <div class="footer">
                  <h3 class="footer-title">Categories</h3>
                  <ul class="footer-links">
                    <li>
                      <a >Hot deals</a>
                    </li>
                    <li>
                      <a >Laptops</a>
                    </li>
                    <li>
                      <a >Smartphones</a>
                    </li>
                    <li>
                      <a >Cameras</a>
                    </li>
                    <li>
                      <a >Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="clearfix visible-xs"></div>

              <div class="col-md-3 col-xs-6">
                <div class="footer">
                  <h3 class="footer-title">Information</h3>
                  <ul class="footer-links">
                    <li>
                      <a >About Us</a>
                    </li>
                    <li>
                      <a >Contact Us</a>
                    </li>
                    <li>
                      <a >Privacy Policy</a>
                    </li>
                    <li>
                      <a >Orders and Returns</a>
                    </li>
                    <li>
                      <a >Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-xs-6">
                <div class="footer">
                  <h3 class="footer-title">Service</h3>
                  <ul class="footer-links">
                    <li>
                      <a >My Account</a>
                    </li>
                    <li>
                      <a >View Cart</a>
                    </li>
                    <li>
                      <a >Wishlist</a>
                    </li>
                    <li>
                      <a >Track My Order</a>
                    </li>
                    <li>
                      <a >Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="bottom-footer" class="section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
               
                <span class="copyright">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by
                  <a  target="_blank">
                    Colorlib
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
