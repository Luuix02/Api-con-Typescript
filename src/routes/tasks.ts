import express from 'express';


const router = express.Router();

 router.get('/', (_req, res) => {
    res.send('')
 })

 router.post('/', (_req, res) => {
res.send('Metodo para guardar tareas')
 })
 export default router