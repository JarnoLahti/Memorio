import { Card } from './dtos';

export const ADD_CARDS = "socket/ADD_CARDS"
export const SELECT_CARD = "socket/SELECT_CARD"

export function addCards(cards:Card[]){
    return {
        type:ADD_CARDS,
        payload:cards
    }
}

export function selectCard(cardId:number){
    return {
        type:SELECT_CARD,
        payload:cardId
    }
}