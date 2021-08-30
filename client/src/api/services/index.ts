import SkillsService from "./skills-service";

export interface ApiServices {
    skillsService: SkillsService
}

export const initializationApiServices = async (): Promise<ApiServices> => {

    return {
        skillsService: SkillsService.create()
    }
}