import React from "react";

const SignupBt = () => {
  return (
    <>
      <div id="newsletter" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="newsletter">
                <p>Sign Up</p>
                <form>
                  <input
                    class="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button class="newsletter-btn ">
                    <i class="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <ul class="newsletter-follow">
                  <li>
                    <a>
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupBt;
