export interface IAction {
  type: string
}

export interface IActionString extends IAction {
  payload: string
}

export interface IActionObjectArray extends IAction {
  payload: object[]
}
