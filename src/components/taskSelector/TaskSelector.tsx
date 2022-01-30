import React from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { map } from "lodash"
import { ITask } from "../../pages/homePage/state/homePageSlice"

export interface ITaskSelector {
  homePageTasks: Record<string, ITask>
  selectedTask: ITask | undefined
  onTaskSelectedChange: (event: any) => void
}

const TaskSelector = ({ homePageTasks, selectedTask, onTaskSelectedChange }: ITaskSelector) => {
  return selectedTask ? (
    <FormControl variant='outlined' size={"small"} fullWidth>
      <InputLabel id='demo-simple-select-label'>Task</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectedTask.id}
        label='Task'
        onChange={(e) => {
          onTaskSelectedChange(e)
        }}
      >
        {map(homePageTasks, (task: ITask, key: string) => {
          return (
            <MenuItem key={key} value={task.id}>
              {task.taskName}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  ) : null
}

export default TaskSelector
