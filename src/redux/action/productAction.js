import {ActionTypes} from "../constat/action-types"

export const setProducts = (products) =>{

    return {

        type : ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const setectedProduct = (product) =>{

    return {

        type : ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
