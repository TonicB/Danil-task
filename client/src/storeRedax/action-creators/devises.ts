import { Dispatch } from "redux"
import axios from "axios"
import { DeviceAction, DeviceActionTypes } from "../../types/device"

export const fetchDevice = () => {
  return async (dispatch: Dispatch<DeviceAction>) =>{
    try {
      dispatch({type: DeviceActionTypes.FETCH_DEVICES})
      const responce = await axios.get('http://localhost:5000/api/device')
        dispatch({type: DeviceActionTypes.FETCH_DEVICES_SUCCESS, payload: responce.data})
    } catch (e) {
      console.log(e)
      dispatch({
        type: DeviceActionTypes.FETCH_DEVICES_ERROR,
        payload: 'Devices loading error'
      })
    }
  }
}

export const setDevice = (data: FormData) => {
  return async (dispatch: Dispatch<DeviceAction>) =>{
    try {
      dispatch({type: DeviceActionTypes.CREATE_DEVICE})
      const responce = await axios.post('http://localhost:5000/api/device', data)
      console.log(responce)
        dispatch({type: DeviceActionTypes.CREATE_DEVICE_SUCCESS, payload: responce.data})
    } catch (e) {
      console.log(e)
      dispatch({
        type: DeviceActionTypes.CREATE_DEVICE_ERROR,
        payload: 'Devices loading error'
      })
    }
  }
}