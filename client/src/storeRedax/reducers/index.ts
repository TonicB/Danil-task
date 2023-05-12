import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { deviceReducer } from "./DeviceReducer";
import { cartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  devices: deviceReducer,
  cartDevices: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>