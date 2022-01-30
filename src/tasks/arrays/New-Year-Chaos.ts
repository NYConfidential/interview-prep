import { toNumber, map, trim } from "lodash"
import { ITask } from "../../pages/homePage/state/homePageSlice"

const newYearChaos = (input: string): number | string => {
  const arr = map(trim(input).split(" "), (inputElement: string) => toNumber(inputElement))

  let total = 0

  for (let i = 0; i < arr.length - 1; i++) {
    // const current = arr[i]
    const next = arr[i + 1]

    let runnerTotal: number | string = 0
    for (let j = i + 1; j < arr.length; j++) {
      const runner = arr[j]
      if (runner < next) {
        runnerTotal += 1
        if (runnerTotal > 2) break
      }
    }

    if (runnerTotal > 2) {
      total = -1
      break
    } else {
      total += runnerTotal
    }
  }

  console.log(total === -1 ? "Too chaotic" : total)

  return total
}

export default newYearChaos

export const newYearChaosTask: ITask = {
  id: "newYearChaos",
  taskName: "New Year Chaos",
  type: "array",
  defaultInput: "1 2 5 3 7 8 6 4",
}
