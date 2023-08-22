import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AuthSlice from "./features/AuthSlice";
import ProductSlice from "./features/ProductSlice";
import CartSlice from "./features/CartSlice";

const rootReducer = combineReducers({
  auth: AuthSlice,
  product: ProductSlice,
  cart: CartSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["product", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
