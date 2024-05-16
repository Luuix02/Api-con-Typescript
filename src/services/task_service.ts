
import taskData from "./tasks.json"
import  {TaskEntry} from "../types"

const tasks : Array<TaskEntry> = taskData as Array<TaskEntry>
taskData as Array<TaskEntry>
export const getEntries = () => tasks

export const addEntry = (new_task_entry: newTaskEntry): TaskEntry => {
    const new_task = {
        id: Math.max(...tasks.map(d => d.id))+1,
        ...new_task_entry
    }
    tasks.push(new_task)
    return new_task
}

export const findById = (id:number): TaskEntry | undefined=>{
    const entry = tasks.find(d => d.id == id)
    return entry
}

export type newTaskEntry = Omit<TaskEntry, 'id'>

