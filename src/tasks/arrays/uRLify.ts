import { trimEnd } from "lodash"

export const uRlify = (input: string) => {
  const split = trimEnd(input).split(" ")

  let result = ""

  for (let i = 0; i < split.length; i++) {
    if (i === split.length - 1) {
      result += split[i]
    } else {
      result += split[i] + "%20"
    }
  }

  return result
}

export const uRlifyInput: string = "Mr John Smith    "

export const uRlifyTask = {
  id: "uRlify",
  taskName: "URlify",
  type: "array",
  fullTaskName: "",
  defaultInput: uRlifyInput,
}
