import { API_URL } from "../helpers/helper.js";
import { getJSON } from "../configs/config.js";

export const anotherRecipeObject = {
    anotherObject : {}
};
export const allData ={
    recipeArray : [],
    page : 1,
    totalPages : 10
};

 export async function storeRecipeData(hashId){
    
    // const response = await fetch(`${API_URL}/${hashId}`);
    // const singleRecipeData = await response.json();
    const singleRecipeData = await getJSON(`${API_URL}/${hashId}`);
    const finalRecipe = singleRecipeData.data.recipe;

        anotherRecipeObject.anotherObject = {
        publisher : finalRecipe.publisher,
        title : finalRecipe.title,
        ingredients : finalRecipe.ingredients,
        image : finalRecipe.image_url,
        cookingTime : finalRecipe.cooking_time,
        servings : finalRecipe.servings
    }
    // console.log(anotherObject)
}

 export async function storeAllRecipeData(searchedData){
    const recipeData = await getJSON(`${API_URL}?search=${searchedData}&key=a55ab2e3-fd12-4a4d-8973-57e27e0d8071`
    )
     allData.recipeArray = recipeData.data.recipes;
}

export function pagination(page){
 allData.page=page;
 let start = (page-1)*allData.totalPages;
 let stop = page*allData.totalPages;
 return allData.recipeArray.slice(start,stop);
}

let bookMarkArray = [];
export function BookmarkedData(data){
bookMarkArray.push(data);
localStorage.setItem('bookmarks',JSON.stringify(bookMarkArray));
return JSON.parse(localStorage.getItem('bookmarks'));
}
