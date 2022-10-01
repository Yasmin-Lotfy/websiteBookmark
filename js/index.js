var submit = document.getElementById("submit");
var siteName = document.getElementById("siteName")
var siteLink = document.getElementById("siteLink")
var allBookmarks;

// to display all data once refesh if the is data at local storage
if(localStorage.getItem("books") != null){
    allBookmarks =JSON.parse(localStorage.getItem("books"));
    displayData()
}else{
    allBookmarks = [];
}

// on click action 
submit.addEventListener("click",function(){
    books={
        name:siteName.value,
        link:siteLink.value,
    }
    allBookmarks.push(books);
    addToLocalStorage()
    displayData();
    clearData()

})
//add to local storage function
function addToLocalStorage(){
    window.localStorage.setItem("books",JSON.stringify(allBookmarks))
}

//display data
function displayData(){
    var table="";
    for(var i=0; i<allBookmarks.length; i++){
        table+=`<tr>
                    <td class="ps-3 fs-4"><i class=" text-warning pe-3 fs-6 fa-solid fa-book-bookmark"></i>${allBookmarks[i].name}</td>
                    <td >
                        <a class="visit" target="_blank" href="${allBookmarks[i].link}">
                        Visit</a>
                    </td>
                    <td ><a onclick="deleteData(${i})" class="delete">Delete</a></td>
                </tr>`;

    }
    // console.log(table)
    document.getElementById("tableData").innerHTML=table;
}

//clear data
function clearData(){
    siteName.value = "";
    siteLink.value ="";
}

//delete data
function deleteData(index){
    allBookmarks.splice(index,1);
    addToLocalStorage()
    displayData()

}