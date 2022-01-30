import React from "react"
import { Typography } from "@mui/material"
import Container from "@mui/material/Container"

export interface IResultsView {
  text?: string
}

const ResultsView = ({ text }: IResultsView) => {
  return (
    <Container>
      <Typography variant='h3'>Results View</Typography>
      <Container maxWidth={"xl"} sx={{ minHeight: 500, marginTop: 2 }}>
        <Typography variant='h4' sx={{ background: "aliceBlue" }}>
          {text}
        </Typography>
      </Container>
    </Container>
  )
}

export default ResultsView
