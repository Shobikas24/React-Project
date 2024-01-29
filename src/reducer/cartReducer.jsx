import Photo from "../React-app/images/photo.webp";
import Dog from "../React-app/images/dog.png";
import Nature from "../React-app/images/nature.jpg";

const initialState = {
  courses1: [
    {
      id: 1,
      price: 39,
      title:'Start',
      paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque',
      image: Photo,
      name:"Photography image",
  },
  {
      id: 2,
      price: 59,
      title:'Basic',
      paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque',
      image: Dog,
      name:"Dog image",

  },
  {
      id: 3,
      price: 89,
      title:'Pro',
      paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque',
      image: Nature,
      name:"Natural Scenary image",
  }
  ],
  cart: []
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        courses1: state.courses1.map(product =>
          product.id === action.payload
            ? { ...product, quantity: 0 }
            : product
        ),
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    

    default:
      return state
  }
}
export default cartReducer;


