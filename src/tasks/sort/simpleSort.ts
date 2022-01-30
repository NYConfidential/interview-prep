import { ITask } from "../../pages/homePage/state/homePageSlice"

export const simpleSort = (input: number[]) => {
  let sortedArray = [...input]

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] > sortedArray[j]) {
        const temp = sortedArray[i]
        sortedArray[i] = sortedArray[j]
        sortedArray[j] = temp
      }
    }
  }

  return sortedArray
}

export const simpleSortInput: number[] = [0, 1, 2, 3, 4, 5, 10, 7, 8, 9, 6]

export const simpleSortTask: ITask = {
  id: "simpleSort",
  taskName: "Simple Sort",
  type: "array",
  defaultInput: simpleSortInput,
}
