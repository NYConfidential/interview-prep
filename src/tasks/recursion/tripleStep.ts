import { ITask } from "../../pages/homePage/state/homePageSlice"

export const tripleStep = (stepsLeft: number): number => {
  if (stepsLeft < 0) {
    return 0
  } else if (stepsLeft === 0) {
    return 1
  } else {
    return tripleStep(stepsLeft - 1) + tripleStep(stepsLeft - 2) + tripleStep(stepsLeft - 3)
  }
}

export const tripleStepInput: number = 10

export const tripleStepTask: ITask = {
  id: "tripleStep",
  taskName: "TripleStep",
  type: "array",
  defaultInput: tripleStepInput,
}
