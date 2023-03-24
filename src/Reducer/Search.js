const initial = [];
const SearchProducts = (data = initial, action) => {
  if (action.type === "findProducts") {
    return action.payload;
  }
  return data;
};
export default SearchProducts;
