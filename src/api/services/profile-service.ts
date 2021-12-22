import { Profile } from 'api/types';
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
}

export default ProfileService;
