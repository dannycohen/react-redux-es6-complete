import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvaiant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initiateState){
    return createStore(
        rootReducer,
        initiateState,
        applyMiddleware(thunk, reduxImmutableStateInvaiant())
    );
}