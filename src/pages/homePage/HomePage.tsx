import { isEmpty, toString } from "lodash"
import { getOr } from "lodash/fp"
import React, { useCallback, useEffect, useState } from "react"
import { methods, tasks } from "../../data/homePageData"
import { ITask, selectHomePageTasks, setHomePageTasks } from "./state/homePageSlice"
import ResultsView from "../../components/resultsView/resultsView"
import Container from "@mui/material/Container"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  Paper,
  TextField,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import TaskSelector from "../../components/taskSelector/TaskSelector"
import { IInputTypes } from "../../common/customTypes/form-types"

const HomePage = () => {
  const [selectedTask, setSelectedTask] = useState<ITask>()
  const [inputValue, setInputValue] = useState<IInputTypes>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [openErrorMessage, setOpenErrorMessage] = useState(false)
  const [resultsText, setResultsText] = useState<string | undefined>(undefined)
  const dispatch = useDispatch()
  const homePageTasks = useSelector(selectHomePageTasks)

  useEffect(() => {
    dispatch(setHomePageTasks(tasks))
  }, [dispatch])

  useEffect(() => {
    if (!isEmpty(homePageTasks)) {
      const task = homePageTasks["mergeSort"]
      setSelectedTask(task)
      setInputValue(task.defaultInput)
    }
  }, [homePageTasks])

  const handleClose = useCallback(() => {
    setOpenErrorMessage(false)
  }, [])

  const onRunClick = useCallback(() => {
    try {
      if (selectedTask) {
        let input = inputValue ?? selectedTask.defaultInput

        if (!inputValue) {
          setInputValue(input)
        }

        console.clear()
        const result = methods[selectedTask.id](input)
        setResultsText(toString(result))
      }
    } catch (e) {
      // setErrorMessage(e.stack)
      // setOpenErrorMessage(true)
    }
  }, [inputValue, selectedTask])

  const onClearData = useCallback(() => {
    dispatch(setHomePageTasks([...tasks]))
    setInputValue(null)
    setResultsText(undefined)
  }, [dispatch])

  const onInputChange = useCallback((event) => {
    const input = getOr("", "target.value", event) as string

    const split = input.split(",")

    console.log(input)
    setInputValue(split)
  }, [])

  const onTaskSelectedChange = useCallback(
    (e) => {
      const task = homePageTasks[e.target.value]
      setSelectedTask(task)
      setInputValue(task.defaultInput)
    },
    [homePageTasks],
  )

  return (
    <>
      <Container maxWidth={"xl"} sx={{ marginTop: 3 }}>
        <Grid container direction={"column"} spacing={2} justifyContent={"center"}>
          <Grid item>
            <Paper elevation={10} sx={{ padding: 2 }}>
              <Button variant={"outlined"} onClick={onRunClick}>
                Run
              </Button>

              <Button variant={"outlined"} sx={{ ml: 1 }} onClick={onClearData}>
                Clear Data
              </Button>
            </Paper>
          </Grid>

          <Grid item>
            <Paper elevation={10} sx={{ padding: 2 }}>
              <Grid container direction={"column"} spacing={2} justifyContent={"center"}>
                <Grid item>
                  <Grid
                    id={"INPUTS"}
                    container
                    direction={"row"}
                    spacing={2}
                    alignContent={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item lg={2}>
                      <TaskSelector
                        selectedTask={selectedTask}
                        onTaskSelectedChange={onTaskSelectedChange}
                        homePageTasks={homePageTasks}
                      />
                    </Grid>

                    <Grid item lg={6}>
                      <FormControl
                        variant='standard'
                        size={"small"}
                        fullWidth
                        sx={{ marginBottom: 1 }}
                      >
                        <TextField
                          id='standard-basic'
                          label={isEmpty(inputValue) ? "Params" : undefined}
                          variant='outlined'
                          size={"small"}
                          value={inputValue ?? ""}
                          onChange={onInputChange}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item>
            <Paper elevation={10}>
              <ResultsView text={resultsText} />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={openErrorMessage}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default React.memo(HomePage)
