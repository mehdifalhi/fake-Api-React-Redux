import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
//import { productReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  
});
export default reducers;