import { createStore } from 'redux';
import rootReducer from '../reducer/cartReducer';

console.log('store State:');
const store = createStore(rootReducer);

export default store;

