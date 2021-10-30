import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {Article} from "../types";

interface ArticleViewProps {
    article: Article,

    onDeleteClick(_id: string): Promise<void>
}

export const ArticleView: React.FC<ArticleViewProps> = props => {
    const {...article} = props.article

    return (
        <article id={article._id} className='article-view'>
            <div id='content'>
                <div className='title'>
                    <h2 id='title'>{article.title}</h2>
                </div>
                <div className='entry-content'>
                    <p id='sub-title'>{article.subTitle}</p>
                </div>
                <div className='buttons'>
                    <Button outline onClick={() => props.onDeleteClick(article._id)}>Delete</Button>
                    <Link to={`/articles/${article._id}/edit`}>
                        <Button outline>Edit</Button>
                    </Link>
                    <Link to={`/articles/${article._id}`}>
                        <Button outline>Read more</Button>
                    </Link>
                </div>
            </div>
            <div id='thumbnail' style={{backgroundColor: article.color}}>
                <img src={article.thumbnail} alt='articleIcon'/>
            </div>
        </article>
    )
}