import { toLower } from "lodash"
import { ITask } from "../../pages/homePage/state/homePageSlice"

export const isPermutation = ([inputOne, inputTwo]: string[]) => {
  if (inputOne.length !== inputTwo.length) {
    return false
  }

  let testInputOne: Record<string, number> = {}
  let testInputTwo: Record<string, number> = {}

  for (let i = 0; i < inputOne.length; i++) {
    const one: string = toLower(inputOne[i])
    const two: string = toLower(inputTwo[i])

    if (testInputOne[one]) {
      testInputOne[one]++
    } else {
      testInputOne[one] = 1
    }

    if (testInputTwo[two]) {
      testInputTwo[two]++
    } else {
      testInputTwo[two] = 1
    }
  }

  for (const key in testInputOne) {
    if (testInputTwo[key] !== testInputOne[key]) {
      return false
    }
  }

  return true
}

export const isPermutationInputOne: string = "StringBuilder"
export const isPermutationInputTwo: string = "BuildedString"

export const isPermutationTask: ITask = {
  id: "isPermutation",
  taskName: "Is Permutation",
  type: "array",
  defaultInput: [isPermutationInputOne, isPermutationInputTwo],
}
