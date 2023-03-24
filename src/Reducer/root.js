import { combineReducers } from "redux";
import ProductsDatas from "./Products";
import ReviewsDatas from "./Reviews";
import MainData from "./Main";
import SearchProducts from "./Search";
const rootReducer = combineReducers({
  ProductsDatas,
  ReviewsDatas,
  MainData,
  SearchProducts,
});
export default rootReducer;
