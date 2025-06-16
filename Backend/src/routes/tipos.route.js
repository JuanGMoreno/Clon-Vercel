
import {Router} from 'express';
import { getTipos,crearTipo,eliminarTipo,actualizarTipo } from '../controllers/tipo.controller.js';

export const routerTipo = Router();

routerTipo.get('/tipo',getTipos);

routerTipo.post('/tipo',crearTipo);

routerTipo.delete('/tipo/:id',eliminarTipo);

routerTipo.put('/tipo/:id',actualizarTipo);

