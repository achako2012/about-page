import { Experience, Profile, Skill } from 'api/types';
import AboutService from './about-service';

class ProfileService extends AboutService {
    /** Returns user's skills list */
    async getProfile(): Promise<Profile[]> {
        const response = await this.httpClient.request<Profile[]>({
            url: `${this.baseUrl}/about-page-service/customer-api/profile`,
            method: 'GET'
        });

        return response.data;
    }

    /** Returns user's skills list */
    async getSkills(): Promise<Skill[]> {
        const response = await this.httpClient.request<Skill[]>({
            url: `${this.baseUrl}/about-page-service/customer-api/skills`,
            method: 'GET'
        });

        return response.data;
    }

    /** Returns user's experience list */
    async getExperience(): Promise<Experience[]> {
        const response = await this.httpClient.request<Experience[]>({
            url: `${this.baseUrl}/about-page-service/customer-api/experience`,
            method: 'GET'
        });

        return response.data;
    }
}

export default ProfileService;
