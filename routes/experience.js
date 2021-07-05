import {Router} from 'express'
import {getAll, create, deleteWorkById} from "../controllers/experience-api-controller.js";

const router = Router()

router.get('/work-list-api/work-list', getAll)

router.post('/work-list-api/work-list', create)

router.delete('/work-list-api/work-list', deleteWorkById)

export default router