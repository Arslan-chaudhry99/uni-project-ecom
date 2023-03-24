import React from "react";

const Profile = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="main-body">
                <div className="row gutters-sm">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Admin"
                            className="rounded-circle"
                            width="150"
                          />
                          <div className="mt-1">
                            <h4>John Doe</h4>


                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3"></div>

                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Username</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Arslan Chaudhry
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">First Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">Arslan</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Last Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Chaudhry
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            arslanchaudhry9011@gmail.com
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            +92 341-5403790
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address 1st</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Bay Area, San Francisco, CA
                          </div>
                        </div>
                      </div>
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

export default Profile;
