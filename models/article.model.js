const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const articleSchema = new mongoose.Schema(
    {
        title: String,
        category:String,
        // author_id: {
        //     type: String,
        //     default: ""
        // },
        description: String,
        content: String,
        thumbnail: String,
        tags: [{ type: String }], 
        views: Number,
        // comments:Array,
        status: String,
        position: Number,
        slug: { type: String, slug: "title", unique: true },
        deleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    }
    ,
    {
        timestamps: true
    }
);

const Article = mongoose.model('Article', articleSchema, "articles");

module.exports = Article;