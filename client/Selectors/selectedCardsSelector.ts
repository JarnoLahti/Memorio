import { Card } from '../dto';
import { State } from '../state';
import { createSelector } from 'reselect';
import * as _ from 'lodash';

const cardsSelector = (state:State) => state.cardBoard.cards;
const selectCardsSelector = (state:State) => state.cardBoard.selectedCards;

const getSelectedCards = (cards:Card[], selectedCardIds:number[]):Card[] => {
    const selectedCards = _.filter(cards, card => _.includes(selectedCardIds, card.id));
    return selectedCards;
}

export default createSelector(cardsSelector, selectCardsSelector, getSelectedCards);