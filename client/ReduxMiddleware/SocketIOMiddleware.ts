import { ActionType } from '../Types/ActionType';
import * as io from 'socket.io-client';
import { Store } from 'react-redux'

let socket:SocketIOClient.Socket;

export function SocketIOMiddleware(store: Store<any>) {
    return next => (action:ActionType) => {
        if(socket && action.socketAction){
            socket.emit(action.type, action.payload);
            return null;
        }
        return next(action);
    }
}

export default function(store: Store<any>) {
    socket = io.connect("localhost:3000");
    socket.on('ADD_CARDS', action => store.dispatch(action));
    socket.on('SELECTED_CARD', action => store.dispatch(action));
}


