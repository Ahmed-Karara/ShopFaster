import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../components/products/ProductData";

const initialState = {
  Products:
    JSON.parse(localStorage.getItem("Product")) ||
    localStorage.setItem("Product", JSON.stringify(ProductData)),
  FilteredProduct:
    JSON.parse(sessionStorage.getItem("FilteredProduct")) || ProductData,
  detailedProduct:
    JSON.parse(sessionStorage.getItem("singleProduct")) || ProductData,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AddProduct(state, action) {
      const newProduct = action.payload;
      state.Products.push(newProduct);
      localStorage.setItem("Product", JSON.stringify(state.Products));
    },
    RemoveProduct(state, action) {
      const selectedItem = action.payload;
      console.log(selectedItem);
      const exist = state.Products.find((item) => item.id === selectedItem);
      if (exist) {
        state.Products.splice(state.Products.indexOf(exist), 1);
      }
      localStorage.setItem("Product", JSON.stringify(state.Products));
    },

    EditProduct(state, action) {
      const product = action.payload;
      const exist = state.Products.find((item) => item.id === product.id);
      if (exist) {
        state.Products.splice(state.Products.indexOf(exist), 1, product);
      }
      localStorage.setItem("Product", JSON.stringify(state.Products));
    },

    FilterProduct(state, action) {
      const filter = state.Products.filter(
        (product) => product.category === action.payload
      );
      state.FilteredProduct = filter;
      const saveData = JSON.stringify(filter);
      sessionStorage.setItem("FilteredProduct", saveData);
    },

    ProductPage(state, action) {
      const single = state.Products.filter(
        (product) => product.id === action.payload
      );
      state.detailedProduct = single;
      const saveProduct = JSON.stringify(single);
      sessionStorage.setItem("singleProduct", saveProduct);
    },
  },
});

export const {
  AddProduct,
  RemoveProduct,
  EditProduct,
  FilterProduct,
  ProductPage,
} = ProductSlice.actions;

export const allProducts = (state) => state.product.Products;

export const selectedProducts = (state) => state.product.FilteredProduct;

export const oneProduct = (state) => state.product.detailedProduct;

export default ProductSlice.reducer;
