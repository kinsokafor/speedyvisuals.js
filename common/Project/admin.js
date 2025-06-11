import {shared as buyer} from './buyer'
import {shared as seller} from './seller'

const shared = [

]

export default [
    ...shared,
    ...buyer,
    ...seller
]

export {shared}