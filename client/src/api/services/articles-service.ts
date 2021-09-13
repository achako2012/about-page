import AboutService from './about-service';

interface getArticlesResponse {
    title: string;
    article: string
}

class ArticlesService extends AboutService {

    /** Returns articles list */
    async getArticles(): Promise<getArticlesResponse[]> {
        const response = await this.httpClient.request<getArticlesResponse[]>({
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`,
            method: 'GET'
        });

        return response.data;
    }

}

export default ArticlesService;
