import { makeAutoObservable } from "mobx";

type Type = {
  id: number;
  name: string;
}

type Brand = {
  id: number;
  name: string;
}

type Device = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

// type SelectedType = Type

export default class DeviceStore {
  _types: Array<Type>;
  _brands: Array<Brand>;
  _devices: Array<Device>;
  _selectedType: Type | null;
  _selectedBrand: Brand | null;
  
  // остальной код



  constructor() {

    this._types = [
      {id: 1, name: 'Sails'},
      {id: 2, name: 'Masts'},
      {id: 3, name: 'Boards'},
    ]
    this._brands = [ 
      {id: 1, name: 'Neilpryde'},
    {id: 2, name: 'Gaastra'},
    {id: 3, name: 'RRD'}
  ]

    this._devices = [ 
    {id: 1, name: 'Vapor', price: 25000, rating:5, img: 'https://ga-windsurfing.com/wp-content/uploads/2022/12/2023_Vapor-C1_GA-Sails.png'}
    ]
    this._selectedType = null
    this._selectedBrand = null
      makeAutoObservable(this)
  }

  setTypes(types: Type[]) {
    this._types = types
  }

  setBrands(brands: Brand[]) {
    this._brands = brands
  }

  setDevices(devices: Device[]) {
    this._devices = devices
  }

  setSelectedType (type: Type) {
    this._selectedType = type
  }

  setselectedBrand (brand: Brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}







  