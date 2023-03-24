import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { findProducts } from "../Action";
import { getMainData } from "../Action";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./css/Nav.css";
const Nav = () => {
  const auth = Cookies.get("userToken");

  // brand slider
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  // main hooks
  const showMenu = useRef();
  const { name } = useParams();
  // Extquery
  const Navigate = useNavigate();
  // main hooks
  // <---for expanding navbar--->
  const expandNav = () => {
    if (showMenu.current.classList.contains("active")) {
      return showMenu.current.classList.remove("active");
    }
    return showMenu.current.classList.add("active");
  };
  // redux selector
  const dispatch = useDispatch();
  const SearchState = useSelector((state) => state.SearchProducts);

  // set input data
  const findProduct = (e) => {
    dispatch(findProducts(e.target.value));
  };
  // to load searching products
  const reloadData = () => {
    dispatch(getMainData(name));
  };


  return (
    <>
      <header>
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i> +021-95-51-84
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o"></i> email@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">


              <NavLink to="/login" >
                <li style={{ cursor: "pointer", fontSize: "13px", }} >
                  <a
                    onClick={() => {
                      Navigate("/Profile");
                    }}

                  >
                    <i className="fa fa-user-o"></i>
                    <i>Login!</i>
                  </a>
                </li>
              </NavLink>
              <NavLink to="/signup" >
                <li style={{ cursor: "pointer", fontSize: "13px", }} >
                  <a
                    onClick={() => {
                      Navigate("/Profile");
                    }}

                  >
                    <i className="fa fa-user-o"></i>
                    <i>Signup!</i>
                  </a>
                </li>
              </NavLink>



            </ul>
          </div>
        </div>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="header-search"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <form>
                    <input
                      className="input"
                      placeholder="Search here"
                      onChange={findProduct}
                    />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>

              <div className="col-md-4 clearfix">
                <div className="header-ctn">
                  <div
                    className=""
                    onClick={() => {
                      Navigate("/cart");
                    }}
                  >
                    <a style={{ cursor: "pointer" }}>
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                  </div>

                  <div className="menu-toggle" onClick={expandNav}>
                    <a>
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav id="navigation">
          <div class="container">
            <div id="responsive-nav" ref={showMenu} className="">
              <ul class="main-nav nav navbar-nav">
                <li class="active">
                  <NavLink to="/">
                    <a>Home</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <a>About</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <a>Contact</a>
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-footer paddingsDataValues">
              <div className="row">
                <div className="col-md-12">
                  <div className="header-search">
                    <form>
                      <input
                        className="input"
                        placeholder="Search here"
                        onChange={findProduct}
                      />
                      <button className="search-btn">Search</button>
                    </form>
                    <div
                      className="resultsDataNav"
                      style={{
                        height: "100px",
                        overflowX: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {SearchState.length !== 0 ? (
                        SearchState.map((value) => {
                          return (
                            <>
                              <NavLink to={"/Product/" + value.ProductName}>
                                <div
                                  className="resultsDataNavContent"
                                  onClick={reloadData}
                                >
                                  <div
                                    className="MainImagesData"
                                    onClick={reloadData}
                                  >
                                    <img
                                      src={value.images[0]}
                                      alt=""
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                  </div>
                                  <div onClick={reloadData}>
                                    {value.ProductName}
                                  </div>
                                </div>
                              </NavLink>
                            </>
                          );
                        })
                      ) : (
                        <div className="productResultsDatas">
                          <h5>Result Not found!</h5>
                        </div>
                      )}
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

export default Nav;
