module.exports = (query) =>{
    let objectSearch={
        keyword: "",
        regex:""
    }

    if(query.keyword){
        objectSearch.keyword=query.keyword;
        // /keyword/i chỉ tìm đúng từ keyword , js k tự động tạo biểu thức chính quy từ chuỗi
        const regex=new RegExp(objectSearch.keyword,"i");
        // RegExp tạo biểu thức chính quy từ chuỗi 
        objectSearch.regex=regex;
    }

    return  objectSearch;
}