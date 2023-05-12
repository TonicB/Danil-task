import { CartDeviceAction, CartDeviceActionTypes, CartDeviceState } from "../../types/cartDevices"

const initialState: CartDeviceState = {
  cartDevices: [],
  loading: false,
  error: null
  
}

export const cartReducer = (state = initialState, action: CartDeviceAction): CartDeviceState => {
  switch (action.type) {
    case CartDeviceActionTypes.FETCH_CART_DEVICES:
      return {loading: true, error: null, cartDevices: []}
    case CartDeviceActionTypes.FETCH_CART_DEVICES_SUCCESS:
      return {loading: false, error: null, cartDevices: action.payload}
    case CartDeviceActionTypes.FETCH_CART_DEVICES_ERROR:
      return {loading: false, error: action.payload, cartDevices: []}
      case CartDeviceActionTypes.ADD_CART_DEVICE:
        return { ...state, loading: true, error: null };
      case CartDeviceActionTypes.ADD_CART_DEVICE_SUCCESS:
        const updateCartDevices = [...state.cartDevices, action.payload]
        return { ...state, cartDevices: updateCartDevices, loading: false, error: null };
      case CartDeviceActionTypes.ADD_CART_DEVICE_ERROR:
        return { ...state, loading: false, error: action.payload };
    default:
      return state
  }
}