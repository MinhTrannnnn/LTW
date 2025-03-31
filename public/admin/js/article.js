
// Form Search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        let url = new URL(window.location.href);
        const keyword = e.target.elements.keyword.value;
        console.log(e.target.elements.keyword.value);
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        }
        else url.searchParams.delete("keyword");
        window.location.href = url.href;

    });
}
// End Form Search

// Pagination
const paginationStatus = document.querySelectorAll("[button-pagination]")
if (paginationStatus.length > 0) {
    let url = new URL(window.location);
    paginationStatus.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");

            if (page) {
                url.searchParams.set("page", page);
            }
            else url.searchParams.delete("page");
            window.location.href = url.href;
        })
    })
}
// End Pagination

// Sort
const sort=document.querySelector("[sort]");
if(sort){
    let url=new URL(window.location.href);
    const sortSelect=document.querySelector("[sort-select]");
    const sortClear=document.querySelector("[sort-clear]");
    // Sort
    sortSelect.addEventListener("change",(e)=>{
        const value=e.target.value;
        const [sortKey,sortValue]=value.split("-");
        url.searchParams.set("sortKey",sortKey);
        url.searchParams.set("sortValue",sortValue);
        window.location.href=url.href;
    })
    // ClearSort
    sortClear.addEventListener("click",()=>{
        url.searchParams.delete("sortKey");
        url.searchParams.delete("sortValue");
        window.location.href=url.href;
    })

    // Selected for option
    const sortKey=url.searchParams.get("sortKey");
    const sortValue=url.searchParams.get("sortValue");
    if(sortKey && sortValue) {
        const stringSort = `${sortKey}-${sortValue}`;
        console.log(stringSort);
        const optionSelected = sortSelect.querySelector(`option[value='${stringSort}']`);
        optionSelected.selected = true;
    }
}
// End Sort

// CheckboxMulti
const checkboxMulti=document.querySelector("[checkbox-multi]");
if(checkboxMulti){
    const inputCheckAll=document.querySelector("input[name='checkall']");
    const inputsId=checkboxMulti.querySelectorAll("input[name='id']");
    inputCheckAll.addEventListener("click",()=>{
        inputsId.forEach(input=>{
            input.checked=inputCheckAll.checked;
        })
    })
    inputCheckAll.addEventListener("click",()=>{
        if(inputCheckAll.checked){
            inputsId.forEach(input=>{
                input.checked=true;
            });
        }
        else{
            inputsId.forEach(input=>{
                input.checked=false;
            });
        }
    });
    inputsId.forEach((input)=>{
        input.addEventListener("click",()=>{
            const countChecked=checkboxMulti.querySelectorAll("input[name='id']:checked").length;
            if(countChecked==inputsId.length){
                inputCheckAll.checked=true;
            }
            else{
                inputCheckAll.checked=false;
            }
        })
    })
}
// End CheckboxMulti

// Upload Image
const uploadImage = document.querySelector("[upload-image]");

if (uploadImage) {
    const uploadImageInput = document.querySelector("[upload-image-input]");
    const uploadImagePreview = document.querySelector("[upload-image-preview]");

    // Sự kiện khi chọn ảnh
    uploadImageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadImagePreview.src = URL.createObjectURL(file);
            uploadImagePreview.style.display = "block"; // Hiện ảnh
        }
    });

}
// End Upload Image