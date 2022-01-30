import { toLower } from "lodash"
import { ITask } from "../../pages/homePage/state/homePageSlice"

export const isUnique = (input: string) => {
  const arr = input.split("")

  let map: Record<string, boolean> = {}

  for (let i = 0; i < arr.length; i++) {
    const testChar = toLower(arr[i])

    if (map[testChar]) {
      return false
    } else {
      map[testChar] = true
    }
  }

  return true
}

export const isUniqueInput: string = "StringBuilder"

export const isUniqueInputTask: ITask = {
  id: "isUnique",
  taskName: "Is Unique",
  type: "array",
  defaultInput: isUniqueInput,
}
