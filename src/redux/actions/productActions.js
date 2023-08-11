import {ActionTypes} from '../contants/action-type';

export const setproducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
