const systemConfig = require("../../config/system");
const dashboardRoutes = require("./dashboard.route");
const articleRoutes = require("./article.route");
module.exports=(app)=>{
    const PathAdmin = systemConfig.prefixAdmin;    
    
    app.use(PathAdmin + "/dashboard", dashboardRoutes);

    app.use(PathAdmin + "/articles", articleRoutes);

}