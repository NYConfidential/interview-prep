import { toNumber } from "lodash"
import { ITask } from "../../pages/homePage/state/homePageSlice"

export const hourGlassSumInput: number[][] = []

// 0 -4 -6 0 -7 -6
// -1 -2 -6 -8 -3 -1
// -8 -4 -2 -8 -8 -6
// -3 -1 -2 -5 -7 -4
// -3 -5 -3 -6 -6 -6
// -3 -6 0 -8 -6 -7

hourGlassSumInput.push("0 -4 -6 0 -7 -6".split(" ").map((i) => toNumber(i.trim())))
hourGlassSumInput.push("-1 -2 -6 -8 -3 -1".split(" ").map((i) => toNumber(i.trim())))
hourGlassSumInput.push("-8 -4 -2 -8 -8 -6".split(" ").map((i) => toNumber(i.trim())))
hourGlassSumInput.push("-3 -1 -2 -5 -7 -4".split(" ").map((i) => toNumber(i.trim())))
hourGlassSumInput.push("-3 -5 -3 -6 -6 -6".split(" ").map((i) => toNumber(i.trim())))
hourGlassSumInput.push("-3 -6 0 -8 -6 -7".split(" ").map((i) => toNumber(i.trim())))

export function hourglassSum(arr: number[][]): number {
  const matrixRows = arr.length - 2
  const matrixColumns = arr[0].length - 2
  let maxSum = Number.NEGATIVE_INFINITY

  for (let row = 0; row < matrixRows; row++) {
    for (let column = 0; column < matrixColumns; column++) {
      let rowCount = 0
      let sum = 0
      for (let rowStep = row; rowStep < row + 3; rowStep++) {
        if (rowCount !== 1) {
          for (let columnStep = column; columnStep < column + 3; columnStep++) {
            const val = arr[rowStep][columnStep]
            console.log(`odd row: ${rowStep} - column: ${columnStep} : `, val)
            sum += val
          }
        } else {
          const val = arr[rowStep][column + 1]
          sum += val
        }

        rowCount++
      }

      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }

  console.log(maxSum)
  return maxSum
}

export const hourglassSumTask: ITask = {
  id: "hourglassSum",
  taskName: "2D-Array-DS",
  type: "array",
  defaultInput: hourGlassSumInput,
}
