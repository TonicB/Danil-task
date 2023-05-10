import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { deviceReducer } from "./DeviceReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  devices: deviceReducer
})

export type RootState = ReturnType<typeof rootReducer>