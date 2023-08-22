import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [
  {
    userInfo: {
      id: null,
      email: null,
      userName: null,
    },
    cart: [],
    quantity: 0,
    totalPrice: 0,
  },
];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    UserCart(state, action) {
      const newUser = action.payload;
      const exist = state.find(
        (user) => user.userInfo.id === newUser.userInfo.id
      );
      if (!exist) {
        state.push(newUser);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    AddToCart(state, action) {
      const productItem = action.payload;
      const productStorage = JSON.parse(localStorage.getItem("Product"));
      const getProduct = productStorage.findIndex(
        (item) => item.id === productItem.id
      );

      const user = state.find(
        (user) => user.userInfo.id === productItem.userID
      );

      const activeUser = state[state.indexOf(user)];
      const exist = activeUser.cart.find((item) => item.id === productItem.id);

      if (exist) {
        exist.quantity += productItem.quantity;
        activeUser.quantity += productItem.quantity;
        activeUser.totalPrice +=
          productItem.quantity * productItem.price -
          (productItem.price * productItem.sale) / 100;
        productStorage[getProduct].inStock -= productItem.quantity;
        productStorage[getProduct].sold += productItem.quantity;
        localStorage.setItem("Product", JSON.stringify(productStorage));
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        activeUser.cart.push({
          userID: productItem.userID,
          id: productItem.id,
          fullName: productItem.fullName,
          price: productItem.price,
          sale: productItem.sale,
          image: productItem.image,
          quantity: productItem.quantity,
          category: productItem.category,
          brand: productItem.brand,
        });
        activeUser.quantity += productItem.quantity;
        activeUser.totalPrice +=
          productItem.quantity *
          (productItem.price - (productItem.price * productItem.sale) / 100);
        productStorage[getProduct].inStock -= productItem.quantity;
        productStorage[getProduct].sold += productItem.quantity;
        localStorage.setItem("Product", JSON.stringify(productStorage));
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    RemoveFromCart(state, action) {
      const productItem = action.payload;
      const productStorage = JSON.parse(localStorage.getItem("Product"));
      const getProduct = productStorage.findIndex(
        (item) => item.id === productItem.id
      );

      const user = state.find(
        (user) => user.userInfo.id === productItem.userID
      );
      const activeUser = state[state.indexOf(user)];

      const exist = activeUser.cart.find((item) => item.id === productItem.id);
      if (exist) {
        exist.quantity--;
        activeUser.quantity--;
        activeUser.totalPrice -=
          productItem.price - (productItem.price * productItem.sale) / 100;
        productStorage[getProduct].inStock += 1;
        productStorage[getProduct].sold -= 1;
        if (exist.quantity === 0) {
          activeUser.cart.splice(activeUser.cart.indexOf(exist), 1);
        }
        localStorage.setItem("cart", JSON.stringify(state));
        localStorage.setItem("Product", JSON.stringify(productStorage));
      }
    },

    RemoveAll(state, action) {
      const productItem = action.payload;
      const productStorage = JSON.parse(localStorage.getItem("Product"));
      const getProduct = productStorage.findIndex(
        (item) => item.id === productItem.id
      );

      const user = state.find(
        (user) => user.userInfo.id === productItem.userID
      );
      const activeUser = state[state.indexOf(user)];

      const exist = activeUser.cart.find((item) => item.id === productItem.id);
      if (exist) {
        exist.quantity -= productItem.quantity;
        activeUser.quantity -= productItem.quantity;
        activeUser.totalPrice -=
          productItem.quantity *
          (productItem.price - (productItem.price * productItem.sale) / 100);
        productStorage[getProduct].inStock += productItem.quantity;
        productStorage[getProduct].sold -= productItem.quantity;

        activeUser.cart.splice(activeUser.cart.indexOf(exist), 1);

        localStorage.setItem("cart", JSON.stringify(state));
        localStorage.setItem("Product", JSON.stringify(productStorage));
      }
    },
  },
});

export const { UserCart, AddToCart, RemoveFromCart, RemoveAll } =
  CartSlice.actions;

export const item = (state) => state.cart;

export default CartSlice.reducer;
