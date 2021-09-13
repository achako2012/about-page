import React from "react";
import Articles from "../components/Articles";
import ArticlesService from "../api/services/articles-service";

export const ArticlePage: React.FC = () => {

    const articlesService = ArticlesService.create()

    return (
        <>
            <h1>Articles!</h1>
            <Articles articlesService={articlesService}/>
        </>
    )

}

