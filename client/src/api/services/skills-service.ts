import AboutService from './about-service';

interface getSkillsResponse {
    title: string;
    value: string
}

class SkillsService extends AboutService {

    /** Returns user's skills list */
    async getSkills(): Promise<getSkillsResponse[]> {
        const response = await this.httpClient.request<getSkillsResponse[]>({
            url: `${this.baseUrl}/about-page-service/customer-api/skills`,
            method: 'GET'
        });

        return response.data;
    }
}

export default SkillsService;
