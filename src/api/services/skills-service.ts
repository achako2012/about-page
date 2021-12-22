import { Skill } from 'api/types';
import AboutService from './about-service';

class SkillsService extends AboutService {
    /** Returns user's skills list */
    async getSkills(): Promise<Skill[]> {
        const response = await this.httpClient.request<Skill[]>({
            url: `${this.baseUrl}/about-page-service/customer-api/skills`,
            method: 'GET'
        });

        return response.data;
    }
}

export default SkillsService;
