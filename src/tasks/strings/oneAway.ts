import { ITask } from "../../pages/homePage/state/homePageSlice"

export const oneAway = ([inputOne, inputTwo]: string[]) => {
  const longString = inputOne.length >= inputTwo.length ? inputOne : inputTwo
  const shortString = inputOne.length < inputTwo.length ? inputOne : inputTwo

  if (longString.length === shortString.length) {
    for (let i = 0; i < inputOne.length; i++) {
      if (inputOne[i] !== inputTwo[i]) {
        const removedOne = removeChar(longString, i)
        const removedTwo = removeChar(shortString, i)

        return removedOne === removedTwo
      }
    }

    return true
  }

  const longStringArray = longString.split("")

  for (let i = 0; i < longStringArray.length; i++) {
    if (longString[i] !== shortString[i]) {
      const removedLong = removeChar(longString, i)

      return removedLong === shortString
    }
  }

  return true
}

const removeChar = (input: string, index: number): string => {
  const arr = Array.from(input)

  arr.splice(index, 1)

  return arr.join("")
}

export const oneAwayInputOne: string = "pales"
export const oneAwayInputTwo: string = "pale"

export const oneAwayTask: ITask = {
  id: "oneAway",
  taskName: "OneAway",
  type: "array",
  defaultInput: [oneAwayInputOne, oneAwayInputTwo],
}
