import { ITask } from "../../pages/homePage/state/homePageSlice"

export const fibonacciRecursive = (fibonacciRecursiveCount: number): number[] => {
  return recursiveAlgo([0, 1], fibonacciRecursiveCount - 2)
}

const recursiveAlgo = (input: number[], recursiveCount: number): number[] => {
  if (recursiveCount === 0) {
    return input
  } else {
    input.push(input[input.length - 2] + input[input.length - 1])
    return recursiveAlgo(input, --recursiveCount)
  }
}

export const fibonacciRecursiveInput: number = 10

export const fibonacciRecursiveTask: ITask = {
  id: "fibonacciRecursive",
  taskName: "fibonacciRecursive",
  type: "array",
  defaultInput: fibonacciRecursiveInput,
}
