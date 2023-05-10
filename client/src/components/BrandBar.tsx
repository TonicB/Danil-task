import React, {useContext} from "react";
import {observer} from "mobx-react-lite"
// import { Context } from "../index"
import DeviceStore from "../store/DeviceStore";
import { Card, Row } from 'react-bootstrap';




const BrandBar = observer(() => {
  // const {device} : { device?: DeviceStore }= useContext(Context) ?? []
  // if (!device) {
  //   return null; 
  // }
  return (
    <Row className="d-flex">
      123
      {/* {device.brands.map(brand => 
        <Card 
        key={brand.id}
        className="p-3"
        style={{cursor: 'pointer', width: 'fit-content'}}
        // active={brand.id === device.selectedType?.id}
        onClick={() => device.setselectedBrand(brand)}
        border={brand.id === device.selectedBrand?.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      )} */}
    </Row>
  )
})
  
export default BrandBar

