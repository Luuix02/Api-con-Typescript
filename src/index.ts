
import express from "express";
import task_router from "./routes/tasks";
import { addEntry, findById, getEntries } from './services/task_service';

const app = express();
app.use(express.json())
app.use('/api/task', task_router)

const PORT = 2500;

app.get('/tasks', (_req, res) => {
   res.send(getEntries())
 })


app.post('/tasks', (req, res) => {
   const {name, date, level, description} = req.body

   const new_taskEntry = addEntry({
      name, date, level, description
   })
   res.json(new_taskEntry)
})

app.get('/tasks/:id', (req, res) => {
   const task = findById(+req.params.id)
   return (task != null) ? res.send(task) : res.sendStatus(404)
})


 app.listen(PORT, () => {
    console.log(`server connected to port http://localhost:${PORT}`)
 })

