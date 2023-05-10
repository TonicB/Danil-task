import { DeviceAction, DeviceActionTypes, DeviceState } from "../../types/device"

const initialState: DeviceState = {
  devices: [],
  loading: false,
  error: null
  
}

export const deviceReducer = (state = initialState, action: DeviceAction): DeviceState => {
  switch (action.type) {
    case DeviceActionTypes.FETCH_DEVICES:
      return {loading: true, error: null, devices: []}
    case DeviceActionTypes.FETCH_DEVICES_SUCCESS:
      return {loading: false, error: null, devices: action.payload}
    case DeviceActionTypes.FETCH_DEVICES_ERROR:
      return {loading: false, error: action.payload, devices: []}
      case DeviceActionTypes.CREATE_DEVICE:
        return { ...state, loading: true, error: null };
      case DeviceActionTypes.CREATE_DEVICE_SUCCESS:
        const updateDevices = [...state.devices, action.payload]
        return { ...state, devices: updateDevices, loading: false, error: null };
      case DeviceActionTypes.CREATE_DEVICE_ERROR:
        return { ...state, loading: false, error: action.payload };
    default:
      return state
  }
}