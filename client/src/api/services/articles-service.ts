import AboutService from './about-service';
import { Header } from '../confg';
import { Article } from '../../types';

class ArticlesService extends AboutService {
    /** Returns articles list */
    async getArticles(): Promise<Article[]> {
        const response = await this.httpClient.request<Article[]>({
            method: 'GET',
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`
        });

        return response.data;
    }

    /** Returns articles by Id */
    async getArticleById(id: string): Promise<Article> {
        const response = await this.httpClient.request<Article>({
            method: 'GET',
            url: `${this.baseUrl}/about-page-service/articles-api/article/${id}`
        });

        return response.data;
    }

    async postArticles(
        title: string,
        subTitle: string,
        thumbnail: string,
        color: string,
        entity: string,
        html: string
    ): Promise<Article> {
        const response = await this.httpClient.request({
            method: 'POST',
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`,
            headers: {
                [Header.ContentType]: 'application/json'
            },
            data: {
                title,
                subTitle,
                thumbnail,
                color,
                entity,
                html
            }
        });

        return response.data;
    }

    async updateArticle(
        id: string,
        title: string,
        subTitle: string,
        thumbnail: string,
        color: string,
        entity: string,
        html:string
    ): Promise<void> {
        return this.httpClient.request({
            method: 'PUT',
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`,
            headers: {
                [Header.ContentType]: 'application/json'
            },
            data: {
                id,
                title,
                subTitle,
                thumbnail,
                color,
                entity,
                html
            }
        });
    }

    async deleteArticle(id: string): Promise<void> {
        return this.httpClient.request({
            method: 'DELETE',
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`,
            headers: {
                [Header.ContentType]: 'application/json'
            },
            data: {
                id
            }
        });
    }
}

export default ArticlesService;
