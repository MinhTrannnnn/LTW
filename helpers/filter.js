module.exports=(query)=>{
    let filter = [
        {
            name:"All",
            status:"",
            class:""
        },
        {
            name:"Published",
            status:"active",
            class:""
        },
        {
            name:"Draft",
            status:"inactive",
            class:""
        }
    ];
    
    // Set active class based on query status
    filter.forEach(item => {
        if ((query.status && item.status === query.status) || 
            (!query.status && item.status === "")) {
            item.class = "active";
        } else {
            item.class = "";
        }
    });
    
    return filter;
}