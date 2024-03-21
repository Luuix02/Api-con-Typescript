import express from 'express';
import  * as task_service from "../services/task_service";


const router = express.Router();

 router.get('/', (_req, res) => {
    res.send(task_service.getEntries())
 })

 router.post('/', (_req, res) => {
res.send('Metodo para guardar tareas')
 })
 export default router