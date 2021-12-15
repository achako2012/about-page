import AboutService from './about-service';
import { Header } from '../confg';

class AuthService extends AboutService {
  /** Returns JWT token */
  async getUserToken(email: string, password: string): Promise<any> {
    const response = await this.httpClient.request({
      method: 'POST',
      url: `${this.baseUrl}/about-page-service/auth/login`,
      headers: {
        [Header.ContentType]: 'application/json',
      },
      data: {
        email,
        password,
      },
    });

    return response.data;
  }
}

export default AuthService;
