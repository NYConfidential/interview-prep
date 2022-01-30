import { toNumber } from "lodash"

export const convertToNumbersArray = (input: unknown[]) => {
  let numberArray: number[] = []

  for (let i = 0; i < input.length; i++) {
    numberArray.push(toNumber(input[i]))
  }

  return numberArray
}
