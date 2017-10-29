import { State } from './state';
import cardBoard from './Reducers/CardBoardReducer';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import socketIOHandler, { SocketIOMiddleware } from './ReduxMiddleware/SocketIOMiddleware'

var reducers = combineReducers({
    cardBoard:cardBoard
});

var Store = createStore(reducers, applyMiddleware(SocketIOMiddleware));

socketIOHandler(Store);

export default Store;
