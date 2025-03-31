const Article = require("../../models/article.model");

// [GET] /articles
module.exports.index = async (req,res) => {
    try {
        const articles = await Article.find({
            deleted: false,
        }).sort({ position:"desc" });
        console.log(articles);
        res.render("client/pages/articles/index", {
            pageTitle: "Articles | News Management",
            articles: articles
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};
