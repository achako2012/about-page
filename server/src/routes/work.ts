import {Router} from 'express'
import {getAll, create, deleteWorkById} from "../controllers/work-api-controller.js";

const router = Router()

// TODO remove ts-ignore

// @ts-ignore
router.get('/work-list-api/work-list', getAll)
// @ts-ignore
router.post('/work-list-api/work-list', create)
// @ts-ignore
router.delete('/work-list-api/work-list', deleteWorkById)

export default router