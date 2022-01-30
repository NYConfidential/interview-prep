import { ITask } from "../pages/homePage/state/homePageSlice"
import newYearChaos, { newYearChaosTask } from "../tasks/arrays/New-Year-Chaos"
import { hourglassSum, hourglassSumTask } from "../tasks/arrays/2D-Array-DS"
import { isUnique, isUniqueInputTask } from "../tasks/arrays/isUnique"
import { isPermutation, isPermutationTask } from "../tasks/arrays/isPermutation"
import { uRlify, uRlifyTask } from "../tasks/arrays/uRLify"
import { oneAway, oneAwayTask } from "../tasks/strings/oneAway"
import { fibonacci, fibonacciTask } from "../tasks/arrays/fibonacci"
import { fibonacciRecursive, fibonacciRecursiveTask } from "../tasks/recursion/fibonacciRecursive"
import { tripleStep, tripleStepTask } from "../tasks/recursion/tripleStep"
import { simpleSort, simpleSortTask } from "../tasks/sort/simpleSort"
import { mergeSort, mergeSortTask } from "../tasks/sort/mergeSort"

const tasks: ITask[] = [
  hourglassSumTask,
  isPermutationTask,
  isUniqueInputTask,
  newYearChaosTask,
  uRlifyTask,
  oneAwayTask,
  fibonacciTask,
  fibonacciRecursiveTask,
  tripleStepTask,
  simpleSortTask,
  mergeSortTask,
]

export const methods: Record<string, (params?: any) => any> = {
  hourglassSum,
  isPermutation,
  isUnique,
  newYearChaos,
  uRlify,
  oneAway,
  fibonacci,
  fibonacciRecursive,
  tripleStep,
  simpleSort,
  mergeSort,
}

const getTaskById = (id: number): ITask => {
  return tasks[id - 1]
}

export { tasks, getTaskById }
