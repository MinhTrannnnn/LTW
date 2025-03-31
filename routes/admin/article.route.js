const express = require('express');
const multer = require("multer");
const route=express.Router();
const storageMulter = require("../../helpers/Multer");
const upload = multer({ storage: storageMulter() });

const controller = require("../../controllers/admin/article.controller");

route.get('/', controller.index);

route.get('/create', 
    controller.create
);

route.post('/create', 
    upload.single('thumbnail'),
    controller.createPost
);

module.exports=route;