import React from "react";
import { useEffect, useState } from "react";
import "./css/Store.css";
import { getAllProductsData } from "../Action";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { useRef } from "react";
import Filters from "./Filters/Filters";
import ReactPaginate from "react-paginate";
const Store = () => {
  const navigate = useNavigate();
  const sidesWidth = useRef("");
  const { Extquery } = useParams();
  const [Actual, setActual] = useState([]);
  const productState = useSelector((state) => state.ProductsDatas);
  const dispatch = useDispatch();
  const [Mores, setMores] = useState({ name: "", value: "" });
  const [MoreFil, setMoreFil] = useState(1);
  const [Query, setQuery] = useState({ nameing: "" });
  const [ServerData, setServerData] = useState({ "": "" });

  let name;
  let value;
  const handleChange = (e) => {
    name = e.target.value;
    value = e.target.name;

    setServerData({ [e.target.name]: e.target.value });
    var options = document.querySelectorAll("option");
    for (var i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }

    switch (e.target.name) {
      case "network":
        setQuery({ nameing: "Search By Network" });
        break;
      case "BrandName":
        setQuery({ nameing: "Search By Brand" });
        break;
      case "RAMS":
        setQuery({ nameing: "Search By RAM" });
        break;
      case "pricing":
        setQuery({ nameing: "Search By price" });
        break;
      case "camera":
        setQuery({ nameing: "Search By Camera" });
        break;
      case "displaysize":
        setQuery({ nameing: "Search By Screen" });
        break;
      default:
        setQuery({ nameing: "" });
        break;
    }

    // dispatch(getAllProductsData(name, value, ));
  };
  let fetchMoreData = (event) => {
    dispatch(getAllProductsData(ServerData, event.selected));
  };

  useEffect(() => {
    dispatch(getAllProductsData(ServerData, 0));
  }, []);

  useEffect(() => {
    dispatch(getAllProductsData(ServerData, 0));
  }, [ServerData]);

  const clearFilters = () => {
    setServerData({ "": "" });
    setQuery({ nameing: "" });
  };
  return (
    <>
      <div class="section">
        <div class="container">
          <div class="row">
            <div id="aside" class="col-md-3">
              <div class="aside">
                <select
                  name="BrandName"
                  className="searchByNettwork"
                  onChange={handleChange}
                >
                  <option value="">Search By Brands</option>
                  <option value="samsung">Samsung</option>
                  <option value="vivo">Vivo</option>
                  <option value="oppo">Oppo</option>
                  <option value="infinix">Infinix</option>
                  <option value="realme">Realme</option>
                  <option value="nokia">Nokia</option>
                  <option value="apple">Apple</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="tecno">Tecno</option>
                  <option value="huawei">Huawei</option>
                  <option value="qmobile">Qmobile</option>
                  <option value="itel">itel</option>
                  <option value="onePlus">OnePlus</option>
                  <option value="sony">Sony</option>
                  <option value="honor">Honor</option>
                  <option value="htC">HTC</option>
                  <option value="meizu">Meizu</option>
                  <option value="lg">LG</option>
                  <option value="mobilink">Mobilink</option>
                  <option value="lenovo">Lenovo</option>
                  <option value="motorola">Motorola</option>
                  <option value="blackberry">BlackBerry</option>
                  <option value="alcatel">Alcatel</option>
                  <option value="oPhone">OPhone</option>
                  <option value="calme">Calme</option>
                  <option value="gright">GRight</option>
                  <option value="gfive">GFive</option>
                  <option value="club">Club</option>
                  <option value="rivo">Rivo</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="voice">Voice</option>
                  <option value="haier">Haier</option>
                </select>
                <select
                  name="RAMS"
                  className="searchByNettwork"
                  onChange={handleChange}
                >
                  <option value="">Search By RAM</option>
                  <option value="2GB">2GB RAM</option>
                  <option value="3GB">3GB RAM</option>
                  <option value="4GB">4GB RAM</option>
                  <option value="6GB">6GB RAM</option>
                  <option value="8GB">8GB RAM</option>
                  <option value="12GB">12GB RAM</option>
                </select>
                <select
                  name="pricing"
                  className="searchByNettwork"
                  onChange={handleChange}
                >
                  <option value="">Search By Prices</option>
                  <option value="45000-to-above">Rs. 45000 & Above</option>
                  <option value="35000-to-45001">Rs. 35000 to 45001</option>
                  <option value="25000-to-35001">Rs. 25000 to 35001</option>
                  <option value="25000-to-35001">Rs. 25000 to 35001</option>
                  <option value="15000-to-25000">Rs. 15000 to 25000</option>
                  <option value="10000-to-15001">Rs. 10000 to 15001</option>
                  <option value="5000-to-10001">Rs. 5000 to 10001</option>
                  <option value="less-than-5000">less than 5000</option>
                </select>
                <select
                  name="camera"
                  id=""
                  className="searchByNettwork"
                  onChange={handleChange}
                >
                  <option>Search By CAM</option>
                  <option value="13MGA">13 Megapixel</option>
                  <option value="8MGA">8 Megapixel</option>
                  <option value="5MGA">5 Megapixel</option>
                  <option value="3MGA">3 Megapixel</option>
                  <option value="2MGA"> 2 Megapixel</option>
                  <option value="1MGA"> 1 Megapixel</option>
                  <option value="VGA">VGA Camera</option>
                  <option value="WOC">Without Camera</option>
                </select>
                <select
                  name="displaysize"
                  id=""
                  className="searchByNettwork"
                  onChange={handleChange}
                >
                  <option value=""> Search By Screen</option>
                  <option value="1.0-to-2.9">1.0 to 2.9 Inches</option>
                  <option value="3.0-to-4.0">3.0 to 4.0 Inches</option>
                  <option value="4.1-to-4.9">4.1 to 4.9 Inches</option>
                  <option value="5.0-to-6.9">5.0 to 6.9 Inches</option>
                  <option value="7.0-to-8.9">7.0 to 8.9 Inches</option>
                </select>
              </div>

              <div class="aside"></div>
            </div>
            <div className="currentBagesData">
              <div className="currentBagesData-1">
                {Query.nameing}
                <i class="fa fa-filter" aria-hidden="true"></i>
              </div>
              {Query.nameing !== "" ? (
                <div className="currentBagesData-2" onClick={clearFilters}>
                  <span>Clear Filter</span>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              id="store"
              class="col-md-9"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {productState.content.length === 0 ? (
                <div className="alert alert-danger error_alert" role="alert">
                  <strong>No product! </strong>is available.
                </div>
              ) : (
                productState.content.map((value) => {
                  return (
                    <>
                      <div
                        class="product productSliderMain container col-md-3"
                        style={{ marginRight: "20px" }}
                      >
                        <div class="product-img">
                          <i class="fa fa-heart-o"></i>
                          <span className="CartTagLine">new</span>
                          <img
                            src={value.images[0]}
                            alt="image"
                            loading="lazy"
                          />
                        </div>
                        <div class="product-body">
                          <h3 class="product-name">
                            <a>{value.ProductName.replaceAll(/\-/g, " ")}</a>
                          </h3>
                          <h4 class="product-price">
                            Rs {value.RupeePrice}
                            <del
                              class="product-old-price"
                              style={{ color: "#dc3545" }}
                            >
                              $990.00
                            </del>
                          </h4>

                          <button class="add-to-cart-btn">
                            <i class="fa fa-shopping-cart"></i> add to cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </div>
            <span style={{ float: "right" }}>
              <ReactPaginate
                breakLabel="..."
                onPageChange={fetchMoreData}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={productState.totalAmount}
                previousLabel="Pre"
                renderOnZeroPageCount={null}
                activeClassName="active"
                containerClassName="pagination justify-content-center"
                breakLinkClassName="page-link"
                breakClassName="page-item"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
