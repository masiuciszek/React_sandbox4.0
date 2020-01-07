export interface State {
  value: number;
}


export enum ActionTypesApp{
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE'
}

export interface IncreaseValueActionType {
  type: ActionTypesApp.INCREASE;
}
export interface DecreaseValueActionType {
  type: ActionTypesApp.DECREASE;
}


export type AppActionTypes = IncreaseValueActionType | DecreaseValueActionType
