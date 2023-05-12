import * as DeviceActionCreators from './devises'
import * as CartActionCreators from './cartDevices'

export default {
    ...DeviceActionCreators,
    ...CartActionCreators
}