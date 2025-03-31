const homeRoute = require("./home.route");
const articleRoute = require("./article.route");

module.exports=(app)=>{
    app.use('/',homeRoute);
    app.use('/articles',articleRoute);
}