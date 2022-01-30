import React from "react"
import "./App.css"
import { appTheme } from "./App.theme"
import { ThemeProvider } from "@mui/material/styles"
import HomePage from "../pages/homePage/HomePage"

function App() {
  return (
      <ThemeProvider theme={appTheme}>
        <div className="App">
          <HomePage/>
        </div>
      </ThemeProvider>

  )
}

export default App
