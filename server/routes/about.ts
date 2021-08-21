import {Router} from 'express'
import {
    addAbout,
    addExperience,
    addSkill, deleteAboutById, deleteExperienceById, deleteSkillById,
    getAbout,
    getExperience,
    getSkills
} from "../controllers/customer-api-controller.js";

const router = Router()

// TODO remove ts-ignore

// @ts-ignore
router.get("/customer-api/about", getAbout)
// @ts-ignore
router.get(`/customer-api/experience`, getExperience)
// @ts-ignore
router.get(`/customer-api/skills`, getSkills)
// @ts-ignore
router.post(`/customer-api/about`, addAbout)
// @ts-ignore
router.post(`/customer-api/experience`, addExperience)
// @ts-ignore
router.post(`/customer-api/skills`, addSkill)
// @ts-ignore
router.delete(`/customer-api/about`, deleteAboutById)
// @ts-ignore
router.delete(`/customer-api/experience`, deleteExperienceById)
// @ts-ignore
router.delete(`/customer-api/skills`, deleteSkillById)

export default router