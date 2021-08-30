import AboutService from "./about-service";

interface GetSkillsResponse {
    _id: string
    title: string
    value: string
}

class SkillsService extends AboutService {

    async getSkillsList(): Promise<GetSkillsResponse[]> {
        const response = await this.httpClient.request<GetSkillsResponse[]>({
            method: 'GET',
            url: `${this.baseUrl}//about-page-service/customer-api/skills`
        });

        return response.data;
    }
}

export default SkillsService