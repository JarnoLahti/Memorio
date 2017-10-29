import { Card } from './dto';
export interface State{
    cardBoard:CardBoard;
}

export interface CardBoard{
    cards:Card[];
    selectedCards:number[];
}