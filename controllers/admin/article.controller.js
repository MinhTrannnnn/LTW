const Article = require("../../models/article.model");
const filter = require("../../helpers/filter");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");

// [GET] /admin/articles
module.exports.index = async (req,res)=>{
    // Build filter conditions
    const find = {
        deleted: false
    };
    
    // Xử lý tìm kiếm
    const objectSearch = searchHelper(req.query);
    if(objectSearch.keyword){
        find.title = objectSearch.regex;
    }
    
    // Phân trang
    let ObjectPagination={
        currentPage:1,
        limitItems:4
    };
    const countArticles = await Article.countDocuments(find);
    ObjectPagination=paginationHelper(ObjectPagination,req.query,countArticles);    
    
    
    // Apply status filter if provided
    if(req.query.status && req.query.status !== "") {
        find.status = req.query.status;
    }
    const filterOptions = filter(req.query);
    

    let sort={};
    if(req.query.sortKey && req.query.sortValue){
        sort[req.query.sortKey]=req.query.sortValue;
    }
    else{
        sort.position="desc";
    }

    
    // Fetch articles with all filters applied
    const articles = await Article
    .find(find)
    .skip(ObjectPagination.skip)
    .sort(sort)
    .limit(ObjectPagination.limitItems);

    res.render("admin/pages/articles/index",{
        pageTitle:"Trang bai viet",
        articles: articles,
        filter: filterOptions,
        keyword: objectSearch.keyword,
        pagination: ObjectPagination
    });
}

// [GET] /articles/create
module.exports.create = async (req,res) => {
    res.render("admin/pages/articles/create", {
        pageTitle: "Create Article | News Management",
    });
};

// [POST] /articles/create
module.exports.createPost = async (req,res) => {
    if(req.body.position==""){
        const countArticles = await Article.countDocuments();
        req.body.position=countArticles+1;
    }
    else{
        req.body.position=parseInt(req.body.position);
    }
    req.body.thumbnail=`/uploads/${req.file.filename}`;
    
    const article=new Article(req.body);
    await article.save();
    res.redirect(`${systemConfig.prefixAdmin}/articles`);

};