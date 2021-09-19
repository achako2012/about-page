import AboutService from './about-service';
import {Header} from "../confg";

export interface Article {
    _id: string;
    title: string;
    article: string;
    date: string;
    html: string;
}


class ArticlesService extends AboutService {

    /** Returns articles list */
    async getArticles(): Promise<Article[]> {
        const response = await this.httpClient.request<Article[]>({
            method: 'GET',
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`
        });

        return response.data;
    }

    async postArticles(title: string, article: string, html: string): Promise<Article> {
        const response = await this.httpClient.request({
            method: "POST",
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`,
            headers: {
                [Header.ContentType]: 'application/json'
            },
            data: {
                title: title,
                article: article,
                html: html
            }
        });

        return response.data;
    }

    async deleteArticle(id: string): Promise<void> {
        return this.httpClient.request({
            method: 'DELETE',
            url: `${this.baseUrl}/about-page-service/articles-api/articles-list`,
            headers: {
                [Header.ContentType]: 'application/json'
            },
            data: {
                id: id
            }
        })
    }

}

export default ArticlesService;
