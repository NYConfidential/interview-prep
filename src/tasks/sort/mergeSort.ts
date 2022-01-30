import { convertToNumbersArray } from "../../common/dataHelpers"
import { ITask } from "../../pages/homePage/state/homePageSlice"
import { floor, isEmpty } from "lodash"

export const mergeSort = (input: unknown[]) => {
  let sortedArray = [...convertToNumbersArray(input)]

  return mergeSortRecursive(sortedArray)
}

const mergeSortRecursive = (input: number[]): number[] => {
  if (input.length > 2) {
    const split = floor(input.length / 2)
    let splitter = input[split]

    let left = []
    let right = []

    for (let i = 0; i < input.length; i++) {
      if (input[i] <= splitter) {
        left.push(input[i])
      } else {
        right.push(input[i])
      }
    }

    left = mergeSortRecursive(left)
    right = mergeSortRecursive(right)

    if (isEmpty(left) || isEmpty([right])) {
    }

    const result = [...left, ...right]

    return result
  } else if (input.length === 2) {
    if (input[0] > input[1]) {
      return [input[1], input[0]]
    }
  }

  return input
}

export const mergeSortInput: number[] = [0, 1, 9, 2, 3, 4, 5, 10, 7, 8, 6]

export const mergeSortTask: ITask = {
  id: "mergeSort",
  taskName: "Merge Sort",
  type: "array",
  defaultInput: mergeSortInput,
}
