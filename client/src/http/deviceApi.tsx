import {$host} from "./index"

export const createDevice = async(device: any) => {
  const {data} = await $host.post('create')
  return data
}

export const fetchDevice = async() => {
  const {data} = await $host.get('api/device')
  return data
}