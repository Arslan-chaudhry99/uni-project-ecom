import React from "react";
import "./css/contact.css"
const Contact = () => {
  return (
    <>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="content">
              <div class="">
                <div class="row align-items-stretch no-gutters contact-wrap">
                  <div class="col-md-12">
                    <div class="form h-100">
                      <h3>Get Started</h3>
                      <form
                        class="mb-5"
                        method="post"
                        id="contactForm"
                        name="contactForm"
                      >
                        <div class="row">
                          <div class="col-md-6 form-group mb-3">
                            <label for="" class="col-form-label">
                              Name *
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Your name"
                            />
                          </div>
                          <div class="col-md-6 form-group mb-3">
                            <label for="" class="col-form-label">
                              Email *
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Your email"
                            />
                          </div>
                        </div>

                      

                        <div class="row">
                          <div class="col-md-12 form-group mb-3">
                            <label for="message" class="col-form-label">
                              Message *
                            </label>
                            <textarea
                              class="form-control"
                              name="message"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Write your message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12 form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-info py-2 px-4"
                              
                            />
                            <span class="submitting"></span>
                          </div>
                        </div>
                      </form>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
