import { ITask } from "../../pages/homePage/state/homePageSlice"

export const fibonacci = (fibonacciCount: number): number[] => {
  let fibArray = [0, 1]

  for (let i = 2; i < fibonacciCount; i++) {
    const nextNumber = fibArray[i - 2] + fibArray[i - 1]
    fibArray.push(nextNumber)
  }

  return fibArray
}

export const fibonacciInput: number = 10

export const fibonacciTask: ITask = {
  id: "fibonacci",
  taskName: "Fibonacci",
  type: "array",
  defaultInput: fibonacciInput,
}
