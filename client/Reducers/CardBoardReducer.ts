import { ActionType } from '../Types/ActionType';
import { CardBoard} from '../state';

var initialState:CardBoard = {
    cards:[],
    selectedCards:[]
}

export default (state:CardBoard = initialState, action:ActionType):CardBoard => {
    switch(action.type){
        case "ADD_CARDS":
            return {...state, cards:action.payload};
        case "SELECTED_CARD":
            return {...state, selectedCards:state.selectedCards.concat(action.payload)};
        default:
            return state;
    }
}

export function selectCard(cardId:number):ActionType{
    return{
        type:"SELECTED_CARD",
        payload:cardId,
        socketAction:true
    }
}