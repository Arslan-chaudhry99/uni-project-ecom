let totalAmount = 0;
const ProductsDatas = (
  data = {
    content: [

      {
        id: "1",
        ProductName: "Tee Shirt",
        DollarPrice: "99",
        images: "./images/images.jpg"

      },
      {
        id: "1",
        ProductName: "Nike ",
        DollarPrice: "22",
        images: "./images/vintage-1972-t-shirt-schwarz-2.jpg"

      },
      {
        id: "1",
        ProductName: "Nike ",
        DollarPrice: "22",
        images: "./images/1-250x250.webp"

      },
      {
        id: "1",
        ProductName: "Nike ",
        DollarPrice: "22",
        images: "./images/blank-1886008__340.webp"

      },
      {
        id: "1",
        ProductName: "Nike ",
        DollarPrice: "22",
        images: "./images/download.jpg"

      },
      {
        id: "1",
        ProductName: "Nike ",
        DollarPrice: "22",
        images: "./images/2714pacificgreen_1.webp"

      },
    ],
    totalAmount: 0,
  },
  action
) => {
  switch (action.type) {
    case "getAllProductsData":
      if (action.payload.length === 0) {
        data.content = [];
        data.totalAmount = 0;

        return {
          content: [],
          totalAmount: 0,
        };
      } else {
        totalAmount = action.total;
        return {
          content: action.payload,
          totalAmount,
        };
      }
      break;

    default:
      return data;
      break;
  }
};
export default ProductsDatas;
