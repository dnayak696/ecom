import { createStore , combineReducers, applyMiddleware,} from 'redux';
import productReducer from './reducers/productReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  product: productReducer
})
// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk) );

export default store;