import {Router} from 'express'
import {getAll, create, deleteWorkById} from "../controllers/experience-api-controller.js";

const router = Router()

router.get('/experience-api/work-list', getAll)

router.post('/experience-api/work-list', create)

router.delete('/experience-api/work-list', deleteWorkById)

export default router