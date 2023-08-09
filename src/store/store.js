import { configureStore } from "@reduxjs/toolkit";
import userAddressSlice from "./Slice/userAddressSlice";
import localAuthSlice from "./Slice/localAuthSlice";
import CartSlice from "./Slice/CartSlice";
import ModalSlice from "./Slice/ModalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import WishSlice from "./Slice/wishSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "wish"], //유지 시킬 데이터
  blacklist: ["address", "modal"], //데이터 유지 필요 없는 것들
};

const reducer = combineReducers({
  //redux 등록하는 곳
  address: userAddressSlice.reducer,
  auth: localAuthSlice.reducer,
  cart: CartSlice.reducer,
  modal: ModalSlice.reducer,
  wish: WishSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
