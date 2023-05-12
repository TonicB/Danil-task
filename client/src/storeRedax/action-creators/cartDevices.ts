import { Dispatch } from "redux"
import axios from "axios"
import { CartDeviceAction, CartDeviceActionTypes } from "../../types/cartDevices"
import { Device } from "../../../../src/models/models"

export const setCartDevice = (device: Device): CartDeviceAction => {
  return {
    type: CartDeviceActionTypes.ADD_CART_DEVICE_SUCCESS,
    payload: device,
  };
};

// export const fetchDevice = () => {
//   return async (dispatch: Dispatch<DeviceAction>) =>{
//     try {
//       dispatch({type: DeviceActionTypes.FETCH_DEVICES})
//       const responce = await axios.get('http://localhost:5000/api/device')
//         dispatch({type: DeviceActionTypes.FETCH_DEVICES_SUCCESS, payload: responce.data})
//     } catch (e) {
//       console.log(e)
//       dispatch({
//         type: DeviceActionTypes.FETCH_DEVICES_ERROR,
//         payload: 'Users loading error'
//       })
//     }
//   }
// }

// export const setCartDevice = (device: Device) => {
//   return async (dispatch: Dispatch<CartDeviceAction>) =>{
//     try {
//       dispatch({type: CartDeviceActionTypes.ADD_CART_DEVICE})
//         dispatch({type: CartDeviceActionTypes.ADD_CART_DEVICE_SUCCESS, payload: device})
//     } catch (e) {
//       console.log(e)
//       dispatch({
//         type: CartDeviceActionTypes.ADD_CART_DEVICE_ERROR,
//         payload: 'Carts loading error'
//       })
//     }
//   }
// }