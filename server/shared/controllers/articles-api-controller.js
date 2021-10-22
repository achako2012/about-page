import Articles from "../models/Articles.js";
export const getArticles = async (req, res) => {
    const articles = await Articles.find({}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    res.status(200).json(articles);
};
export const getArticleById = async (req, res) => {
    const articleId = req.params.uid;
    const article = await Articles.findOne({ _id: articleId }, undefined, undefined, (err, result) => {
        if (err)
            console.log(err);
        console.log(result);
    });
    res.status(200).json(article);
};
export const updateArticleById = async (req, res) => {
    const { id, entity, title, subTitle } = req.body;
    const query = { _id: id };
    const update = {
        $set: {
            title: title,
            subTitle: subTitle,
            article: entity
        }
    };
    await Articles.updateOne(query, update);
    res.status(200).json({ "message": "updated" });
};
export const createArticle = async (req, res) => {
    const { title, subTitle, thumbnail, color, article, html } = req.body;
    const date = Date.now();
    const newArticle = {
        title: title,
        subTitle: subTitle,
        thumbnail: thumbnail,
        color: color,
        article: article,
        date: date,
        html: html
    };
    //TODO solve this
    const foo = await Articles.create(newArticle);
    // Articles.create(newArticle, (err, doc) => {
    //
    //     if (err)
    //         console.log(err);
    //
    //     console.log("Object ARTICLE is saved", doc);
    // })
    res.status(201).json(foo);
};
export const deleteArticleById = async (req, res) => {
    const articleId = req.body.id;
    await Articles.findOneAndDelete({ _id: articleId }, undefined, (err, result) => {
        if (err)
            console.log(err);
        console.log(result);
    });
    res.status(200).json({ "message": "articles" });
};
//# sourceMappingURL=articles-api-controller.js.map