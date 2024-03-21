
import taskData from "./tasks.json"
import  {TaskEntry} from "../types"

const tasks : Array<TaskEntry> = 
taskData as Array<TaskEntry>
export const getEntries = () => tasks
