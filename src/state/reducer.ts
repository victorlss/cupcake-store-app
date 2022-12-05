export const reducer = (state: any, action: {type: string; payload: any}) => {
  switch (action.type) {
    case 'setCartItems':
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
