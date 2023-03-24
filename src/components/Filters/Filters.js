import React from "react";
import { useState } from "react";
const Content = [
  {
    _id: 1,
    name: "5G",
    type: "network",
  },
  {
    _id: 2,
    name: "4G",
    type: "network",
  },
  {
    _id: 3,
    name: "samsung",
    type: "brand",
  },
  {
    _id: 4,
    name: "vivo",
    type: "brand",
  },
  {
    _id: 5,
    name: "oppo",
    type: "brand",
  },
  {
    _id: 6,
    name: "infinix",
    type: "brand",
  },
  {
    _id: 7,
    name: "realme",
    type: "brand",
  },
  {
    _id: 8,
    name: "nokia",
    type: "brand",
  },
  {
    _id: 9,
    name: "apple",
    type: "brand",
  },
  {
    _id: 10,
    name: "xiaomi",
    type: "brand",
  },
  {
    _id: 11,
    name: "tecno",
    type: "brand",
  },
  {
    _id: 12,
    name: "huawei",
    type: "brand",
  },
  {
    _id: 13,
    name: "qmobile",
    type: "brand",
  },
  {
    _id: 14,
    name: "itel",
    type: "brand",
  },
  {
    _id: 15,
    name: "onePlus",
    type: "brand",
  },
  {
    _id: 16,
    name: "sony",
    type: "brand",
  },
  {
    _id: 17,
    name: "honor",
    type: "brand",
  },
  {
    _id: 18,
    name: "htC",
    type: "brand",
  },
  {
    _id: 19,
    name: "meizu",
    type: "brand",
  },
  {
    _id: 20,
    name: "lg",
    type: "brand",
  },
  {
    _id: 21,
    name: "mobilink",
    type: "brand",
  },
  {
    _id: 22,
    name: "lenovo",
    type: "brand",
  },
  {
    _id: 23,
    name: "motorola",
    type: "brand",
  },
  {
    _id: 24,
    name: "blackberry",
    type: "brand",
  },
  {
    _id: 25,
    name: "alcatel",
    type: "brand",
  },
  {
    _id: 26,
    name: "oPhone",
    type: "brand",
  },
  {
    _id: 27,
    name: "calme",
    type: "brand",
  },
  {
    _id: 28,
    name: "gright",
    type: "brand",
  },
  {
    _id: 29,
    name: "club",
    type: "brand",
  },
  {
    _id: 30,
    name: "rivo",
    type: "brand",
  },
  {
    _id: 31,
    name: "microsoft",
    type: "brand",
  },
  {
    _id: 32,
    name: "voice",
    type: "brand",
  },
  {
    _id: 33,
    name: "2GB",
    type: "ram",
  },
  {
    _id: 34,
    name: "4GB",
    type: "ram",
  },
  {
    _id: 35,
    name: "6GB",
    type: "ram",
  },
  {
    _id: 36,
    name: "8GB",
    type: "ram",
  },
  {
    _id: 37,
    name: "12GB",
    type: "ram",
  },
  {
    _id: 38,
    name: "35000-to-45001",
    type: "price",
  },
  {
    _id: 39,
    name: "25000-to-35001",
    type: "price",
  },
  {
    _id: 40,
    name: "15000-to-25000",
    type: "price",
  },
  {
    _id: 41,
    name: "10000-to-15001",
    type: "price",
  },
  {
    _id: 42,
    name: "5000-to-10001",
    type: "price",
  },
  {
    _id: 43,
    name: "less-than-5000",
    type: "price",
  },
  {
    _id: 44,
    name: "45000-to-above",
    type: "price",
  },
  {
    _id: 45,
    name: "13MGA",
    type: "camera",
  },
  {
    _id: 46,
    name: "8MGA",
    type: "camera",
  },
  {
    _id: 47,
    name: "5MGA",
    type: "camera",
  },
  {
    _id: 48,
    name: "3MGA",
    type: "camera",
  },
  {
    _id: 49,
    name: "2MGA",
    type: "camera",
  },
  {
    _id: 50,
    name: "1MGA",
    type: "camera",
  },
  {
    _id: 51,
    name: "VGA",
    type: "camera",
  },
  {
    _id: 52,
    name: "WOC",
    type: "camera",
  },
  {
    _id: 53,
    name: "1.0-to-2.9",
    type: "display",
  },
  {
    _id: 54,
    name: "3.0-to-4.0",
    type: "display",
  },
  {
    _id: 55,
    name: "4.1-to-4.9",
    type: "display",
  },
  {
    _id: 56,
    name: "5.0-to-6.9",
    type: "display",
  },
  {
    _id: 57,
    name: "7.0-to-8.9",
    type: "display",
  },
];
function Filters(props) {
  const [Checked, setChecked] = useState([]);
  
  const handleChange = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.hanfleFilters(newChecked);
  };
  return (
    <>
      <div style={{ fontSize: "18px", fontWeight: "600" }}>Brand</div>
      {Content.filter((value) => {
        return value.type === "brand";
      }).map((value, index) => {
        return (
          <>
            <div>
              <input
                onChange={() => handleChange(value.name)}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                checked={Checked.indexOf(value.name) === -1 ? false:true}
              />
              <label
                for="vehicle1"
                style={{ marginLeft: "5px", fontWeight: "500" }}
              >
                {" "}
                {value.name.toUpperCase()}
              </label>
            </div>
          </>
        );
      })}
      {/* this is next section */}
      <div style={{ fontSize: "18px", fontWeight: "600" }}>Network</div>
      {Content.filter((value) => {
        return value.type === "network";
      }).map((value, index) => {
        return (
          <>
            <div>
              <input
                onChange={() => handleChange(value.name)}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label
                for="vehicle1"
                style={{ marginLeft: "5px", fontWeight: "500" }}
              >
                {" "}
                {value.name.toUpperCase()}
              </label>
            </div>
          </>
        );
      })}
      {/* this is next section */}
      <div style={{ fontSize: "18px", fontWeight: "600" }}>Ram size</div>
      {Content.filter((value) => {
        return value.type === "ram";
      }).map((value, index) => {
        return (
          <>
            <div>
              <input
                onChange={() => handleChange(value.name)}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label
                for="vehicle1"
                style={{ marginLeft: "5px", fontWeight: "500" }}
              >
                {" "}
                {value.name.toUpperCase()}
              </label>
            </div>
          </>
        );
      })}
      {/* this is next section */}
      <div style={{ fontSize: "18px", fontWeight: "600" }}>Camera</div>
      {Content.filter((value) => {
        return value.type === "camera";
      }).map((value, index) => {
        return (
          <>
            <div>
              <input
                onChange={() => handleChange(value.name)}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label
                for="vehicle1"
                style={{ marginLeft: "5px", fontWeight: "500" }}
              >
                {" "}
                {value.name.toUpperCase()}
              </label>
            </div>
          </>
        );
      })}
      {/* this is next section */}
      <div style={{ fontSize: "18px", fontWeight: "600" }}>Price</div>
      {Content.filter((value) => {
        return value.type === "price";
      }).map((value, index) => {
        return (
          <>
            <div>
              <input
                onChange={() => handleChange(value.name)}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label
                for="vehicle1"
                style={{ marginLeft: "5px", fontWeight: "500" }}
              >
                {" "}
                {value.name.toUpperCase()}
              </label>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Filters;
