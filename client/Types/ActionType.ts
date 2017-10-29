import { Action } from 'redux';

export interface ActionType extends Action{
    payload?:any;
    socketAction?:boolean;
}