
import express from "express";
import task_router from "./routes/tasks";

const app = express();
app.use(express.json())
app.use('/api/task', task_router)

const PORT = 25000;

app.get('/tasks', (_req, res) => {
    res.send("servidor conectado usando typescript")
    
 })

 app.listen(PORT, () => {
    console.log(`server connected to port http://localhost:${PORT}`)
 })
