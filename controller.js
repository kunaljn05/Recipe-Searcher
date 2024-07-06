// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=a55ab2e3-fd12-4a4d-8973-57e27e0d8071

// a55ab2e3-fd12-4a4d-8973-57e27e0d8071

const searchItem = document.getElementById('search_item');
const searchBtn = document.getElementById('search_btn');
const leftContainer = document.querySelector('.first_container');
const rightContainer = document.querySelector('.second_container');
const bookmarkBtn = document.getElementById('bookmarks');
const storeBookmark = document.querySelector('.store_bookmark');

import { anotherRecipeObject, storeRecipeData } from "./MVC_MODEL/model.js";
import { view } from "./MVC_MODEL/view.js";
import { getJSON } from "./configs/config.js";
import { API_URL } from "./helpers/helper.js";
import { storeAllRecipeData } from "./MVC_MODEL/model.js";
import { secondView } from "./MVC_MODEL/secondView.js";
import { allData } from "./MVC_MODEL/model.js";
import { pagination  } from "./MVC_MODEL/model.js";
import { myPagination } from "./MVC_MODEL/myPagination.js";
import { servingsView } from "./MVC_MODEL/servingsView.js";
import { bookmark } from "./MVC_MODEL/bookmark.js";

 async function getRecepieData(){

    try{

        let searchedData = searchItem.value;
        await storeAllRecipeData(searchedData);
        const arv = new secondView();
        // for rendering limited pages
        arv.render(pagination(1));
         
        // for showing buttons
        const myPage = new myPagination();
        myPage.render(allData);
      
    }
    catch(error){
    console.log(error)
    }
 }

searchBtn.addEventListener('click',function(){
    leftContainer.innerHTML="";
    getRecepieData();
})

async function getSingleReicpeData(){
    
    let hashId = window.location.hash.slice(1);
        await storeRecipeData(hashId)
    const v = new view();
    v.render();
    
}

function callHashChangeEventListner(){
    const v = new view();
    v.hasChangeEventListner(getSingleReicpeData)
}

callHashChangeEventListner()


// function to display recipes accoriding to pages clicked

function displayRecipeAccToPage(page){
    const arv = new secondView();
    // for rendering limited pages
    arv.render(pagination(page));
     
    // for showing buttons
    const myPage = new myPagination();
    myPage.render(allData);
}

// function to call getpagefrombutton function in pagination.js
function callIt(){
const myPage = new myPagination();
myPage.getPageNumberFromButton(displayRecipeAccToPage);
}

callIt();

function servingsHandling(){
const sv = new servingsView();
sv.render();
}

servingsHandling()

// code for bookmark
function callBookmark(){
 const bm = new bookmark();
 bm.render();
}

callBookmark();

// displaying bookmark data

bookmarkBtn.addEventListener('click',function(){
 storeBookmark.style.opacity=1;
})