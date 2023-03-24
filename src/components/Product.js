import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./css/Product.css";
import { getMainData } from "../Action";
import { getAllReviews } from "../Action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
const Product = () => {
  const { name } = useParams();
  // fetching product data
  const productState = useSelector((state) => state.MainData);
  const dispatch = useDispatch();

  const reviewState = useSelector((state) => state.ReviewsDatas);
  console.log(reviewState);
  // set feedback
  const [Reviews, setReviews] = useState({
    ID: name,
    name: "",
    email: "",
    description: "",
    rating: "",
  });

  const setReviewsData = (e) => {
    setReviews({ ...Reviews, [e.target.name]: e.target.value });
  };
  const submiteMreview = async (e) => {
    e.preventDefault();
    let res = await axios
      .post("/submiteReview", Reviews)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getMainData(name));
    dispatch(getAllReviews(name));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {productState.map((value, index) => {
        return (
          <>
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 col-md-push-2">
                    <div id="product-main-img">
                      <div className="product-preview">
                        <Carousel responsive={responsive}>
                          {value.images.map((value) => {
                            return (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={value}
                                    alt="img"
                                    style={{ width: "250px", height: "250px" }}
                                  />
                                </div>
                              </>
                            );
                          })}
                        </Carousel>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2 col-md-pull-5"></div>

                  <div className="col-md-5">
                    <div className="product-details">
                      <h2 className="product-name">
                        {value.ProductName.replaceAll(/\-/g, " ")}
                      </h2>
                      {/* <div>
                            <div className="product-rating">
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star-o"
                                style={{ color: "red" }}
                              ></i>
                            </div>
                            <a className="review-link">10 Review</a>
                          </div> */}
                      <div>
                        <h3 className="product-price">
                          ${value.DollarPrice}.00{" "}
                          {/* <del className="product-old-price">$990.00</del> */}
                        </h3>
                        {/* <span className="product-available">In Stock</span> */}
                      </div>
                      <p>{value.Description}</p>

                      {/* <div className="add-to-cart">
                            <div className="qty-label">
                              Qty
                              <div className="input-number">
                                <input type="number" />
                                <span className="qty-up">+</span>
                                <span className="qty-down">-</span>
                              </div>
                            </div>
                            <button className="add-to-cart-btn">
                              <i className="fa fa-shopping-cart"></i> add to cart
                            </button>
                          </div> */}

                      {/* <ul className="product-btns">
                            <li>
                              <a>
                                <i className="fa fa-heart-o"></i> add to wishlist
                              </a>
                            </li>
                          </ul> */}

                      <ul className="product-links">
                        <li>
                          {/* <strong>Amazon (buy now!):</strong> {value.AmazonLink} */}
                        </li>
                        <li>
                          <strong>Amazon (buy now!):</strong>
                          <a href={value.AmazonLink}>{value.AmazonLink}</a>
                        </li>

                        <li>
                          <strong>Pticeoye (buy now!):</strong>
                          <a href={value.PticeoyeLink}>{value.PticeoyeLink}</a>
                        </li>
                        <li>
                          <strong>Daraz (buy now!):</strong>
                          <a href={value.DarazLink}>{value.DarazLink}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {productState.map((value) => {
        return (
          <>
            <div id="tab2" className="tab-pane fade in container">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="detailsSections">
                    <h1 className="brandProduct">
                      {value.ProductName.replaceAll(/\-/g, " ")}
                    </h1>
                    <div className="brandProductSpect">Specifications</div>
                    <div className="ProductPricing">
                      Price in USD: {value.DollarPrice}$
                    </div>
                    <div className="ProductPricing">
                      Price in pakistan: {value.RupeePrice}/-
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i className="fa fa-wifi ProductCoverDataright"></i>
                        </div>
                        <span className="ProductCoverDataright">NETWORK</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row" className="ProductCoverData">
                              Technology
                            </th>
                            <td className="ProductCoverDataright">
                              {value.Technology}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2G Bands</th>
                            <td className="ProductCoverDataright">
                              {value.G2Bands}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3G Bands</th>
                            <td className="ProductCoverDataright">
                              {value.G3Bands}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4G Bands</th>
                            <td className="ProductCoverDataright">
                              {value.G4Bands}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Speed</th>
                            <td className="ProductCoverDataright">
                              {value.NetworkSpeed}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i className="fa fa-rocket ProductCoverDataright"></i>
                        </div>
                        <span className="ProductCoverDataright">LAUNCH</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row" className="ProductCoverData">
                              Announced
                            </th>
                            <td className="ProductCoverDataright">
                              {value.AnnouncedDate}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Status</th>
                            <td className="ProductCoverDataright">
                              {value.Status}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-mobile ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">BODY</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row" className="ProductCoverData">
                              Dimensions
                            </th>
                            <td className="ProductCoverDataright">
                              {value.Dimensions}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Weight</th>
                            <td className="ProductCoverDataright">
                              {value.Weight}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Sim</th>
                            <td className="ProductCoverDataright">
                              {value.Sim}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Others</th>
                            <td className="ProductCoverDataright">
                              {value.OthersBody}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-desktop ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">DISPLAY</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row" className="ProductCoverData">
                              Type
                            </th>
                            <td className="ProductCoverDataright">
                              {value.DisplayType}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Size</th>
                            <td className="ProductCoverDataright">
                              {value.DisplaySize}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Resolution</th>
                            <td className="ProductCoverDataright">
                              {value.DisplayResolution}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Protection</th>
                            <td className="ProductCoverDataright">
                              {value.DisplayProtection}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-microchip ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">PLATFORM</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row" className="ProductCoverData">
                              OS
                            </th>
                            <td className="ProductCoverDataright">
                              {value.OS}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Chipset</th>
                            <td className="ProductCoverDataright">
                              {value.Chipset}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">CPU</th>
                            <td className="ProductCoverDataright">
                              {value.CPU}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">GPU</th>
                            <td className="ProductCoverDataright">
                              {value.GPU}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-hdd-o ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">MEMORY</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">Card slot</th>
                            <td className="ProductCoverDataright">
                              {value.CardSlot}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Internal</th>
                            <td className="ProductCoverDataright">
                              {value.InternalMemory}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-camera ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">CAMERA</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">Primary</th>
                            <td className="ProductCoverDataright">
                              {value.PrimaryCamera}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Features</th>
                            <td className="ProductCoverDataright">
                              {value.CameraFeatures}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Video</th>
                            <td className="ProductCoverDataright">
                              {value.CameraVideo}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Secondary </th>
                            <td className="ProductCoverDataright">
                              {value.SecondaryCamera}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Others </th>
                            <td className="ProductCoverDataright">
                              {value.CameraOthers}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-music ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">SOUND</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">Loudspeaker</th>
                            <td className="ProductCoverDataright">
                              {value.LoudSpeaker}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3.5mm jack</th>
                            <td className="ProductCoverDataright">
                              {value.jackSound}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-wifi ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">COMMS</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">WLAN</th>
                            <td className="ProductCoverDataright">
                              {value.CommsWlan}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Bluetooth</th>
                            <td className="ProductCoverDataright">
                              {value.CommsBluetooth}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">GPS</th>
                            <td className="ProductCoverDataright">
                              {value.CommsGPS}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">NFC </th>
                            <td className="ProductCoverDataright">
                              {value.CommsNFC}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Radio </th>
                            <td className="ProductCoverDataright">
                              {value.CommsRadio}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">USB </th>
                            <td className="ProductCoverDataright">
                              {value.CommsUsb}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-star-o ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">FEATURES</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">Sensors</th>
                            <td className="ProductCoverDataright">
                              {value.Sensors}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ProductCoverData">
                      <div className="brandDetailsSection">
                        <div className="brandDetailsSectionlogo">
                          <i
                            class="fa fa-battery-full ProductCoverDataright"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="ProductCoverDataright">BATTERY</span>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">Type</th>
                            <td className="ProductCoverDataright">
                              {value.BatteryType}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Others</th>
                            <td className="ProductCoverDataright">
                              {value.BatteryOthers}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="tab3"
              className="tab-pane fade in container"
              style={{ marginTop: "50px", marginBottom: "50px" }}
            >
              <div className="row">
                <div className="col-md-7">
                  {/* <div className="">
        <div id="rating">
          <div className="rating-avg ">
            <span>4.5</span>
            <div className="rating-stars ">
              <i
                className="fa fa-star"
                style={{ color: "red" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ color: "red" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ color: "red" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ color: "red" }}
              ></i>
              <i
                className="fa fa-star-o"
                style={{ color: "red" }}
              ></i>
            </div>
          </div>
          <ul className="rating">
            <li>
              <div className="rating-stars">
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
              </div>
              <div className="rating-progress">
                <div style={{ width: "80%" }}></div>
              </div>
              <span className="sum">3</span>
            </li>
            <li>
              <div className="rating-stars">
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star-o"
                  style={{ color: "red" }}
                ></i>
              </div>
              <div className="rating-progress">
                <div style={{ width: "60%" }}></div>
              </div>
              <span className="sum">2</span>
            </li>
            <li>
              <div className="rating-stars">
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star-o"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fa fa-star-o"
                  style={{ color: "red" }}
                ></i>
              </div>
              <div className="rating-progress">
                <div></div>
              </div>
              <span className="sum">0</span>
            </li>
            <li>
              <div className="rating-stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <div className="rating-progress">
                <div></div>
              </div>
              <span className="sum">0</span>
            </li>
            <li>
              <div className="rating-stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <div className="rating-progress">
                <div></div>
              </div>
              <span className="sum">0</span>
            </li>
          </ul>
        </div>
      </div> */}
                  <Carousel responsive={responsive}>
                    {reviewState.map((data) => {
                      console.log(data.dates);
                      return (
                        <>
                          <div id="reviews">
                            <ul className="reviews ">
                              <li
                                className="reviewsOfThisProduct"
                                style={{ marginBottom: "0px" }}
                              >
                                <div className="review-heading">
                                  <h5 className="name">{data.name}</h5>
                                  <p className="date">27 DEC 2018, 8:0 PM</p>
                                  <div className="review-rating">
                                    <i className="fa fa-star"></i>

                                    <span style={{ color: "black" }}>
                                      {data.rating}
                                    </span>
                                  </div>
                                </div>
                                <div className="review-body">
                                  <p>{data.description}</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </div>

                <div className="col-md-5">
                  <div id="review-form">
                    <form className="review-form" method="post">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={Reviews.name}
                        onChange={setReviewsData}
                      />
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={Reviews.email}
                        onChange={setReviewsData}
                      />
                      <textarea
                        className="input"
                        placeholder="Your Review"
                        value={Reviews.description}
                        name="description"
                        onChange={setReviewsData}
                      ></textarea>
                      <div className="input-rating">
                        <span>Your Rating: </span>
                        <div className="stars">
                          <input
                            id="star5"
                            name="rating"
                            value="5"
                            onClick={setReviewsData}
                            type="radio"
                          />
                          <label for="star5"></label>
                          <input
                            id="star4"
                            name="rating"
                            value="4"
                            onClick={setReviewsData}
                            type="radio"
                          />
                          <label for="star4"></label>
                          <input
                            id="star3"
                            name="rating"
                            value="3"
                            onClick={setReviewsData}
                            type="radio"
                          />
                          <label for="star3"></label>
                          <input
                            id="star2"
                            name="rating"
                            value="2"
                            type="radio"
                            onClick={setReviewsData}
                          />
                          <label for="star2"></label>
                          <input
                            id="star1"
                            name="rating"
                            value="1"
                            type="radio"
                            onClick={setReviewsData}
                          />
                          <label for="star1"></label>
                        </div>
                      </div>
                      <button
                        className="primary-btn"
                        type="Submit"
                        name="ID"
                        onClick={submiteMreview}
                        value={value._id}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Product;
