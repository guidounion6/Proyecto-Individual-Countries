import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../Reducer/reducer'
import thunkMiddleware from 'redux-thunk'


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); // Esta linea nos permite hacer petic

  


export default store
