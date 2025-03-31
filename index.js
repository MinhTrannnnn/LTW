require("dotenv").config();
const express = require("express");

const moment = require('moment');

// Kết nối Database
const database = require("./config/database");
const systemConfig = require("./config/system");
database.connect();

// Import các route
const clientRoute = require("./routes/client/index.route");
const adminRoute = require("./routes/admin/index.route");


const app = express(); // Tạo express
const port = process.env.PORT;

app.locals.moment = moment;
// Middleware hỗ trợ
app.use(express.static(`${__dirname}/public`));


app.set("views", `${__dirname}/views`); // Tìm file index.pug trong thư mục views
app.set("view engine", "pug"); // Chỉ định pug làm view engine


app.locals.prefixAdmin = systemConfig.prefixAdmin; // Biến toàn cục prefixAdmin

clientRoute(app);
adminRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`${__dirname}`);
});
  