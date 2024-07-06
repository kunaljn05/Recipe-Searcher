import { anotherRecipeObject } from "./model.js";
import { BookmarkedData } from "./model.js";
export class bookmark {
    rightContainer;
    storeBookmark;

    render(){
        this.rightContainer = document.querySelector('.second_container'),
        this.storeBookmark = document.querySelector('.store_bookmark'),
        this.collectBookmarkData()
    }

    collectBookmarkData(){
        this.rightContainer = document.querySelector('.second_container');
        this.rightContainer.addEventListener('click',function(e){
            const text = e.target.innerText;
            const addTitle = anotherRecipeObject.anotherObject.title;
            this.storeBookmark = document.querySelector('.store_bookmark')
            if(text=="Bookmark"){
               let title =  BookmarkedData(addTitle);
               this.storeBookmark = document.querySelector('.store_bookmark')
                this.storeBookmark.insertAdjacentHTML('afterbegin',`
                <h2>${i}</h2>
               `)
            //     
            //   
              e.target.innerText="Bookmarked"
            }
        })
    }

    // displayData(bmdata){
    //     bmdata.bookMarkArray.map(function(i){
    //         this.storeBookmark = document.querySelector('.store_bookmark')
    //      this.storeBookmark.insertAdjacentHTML('afterbegin',`
    //     <h2>* ${i}</h2>
    //     `)
    //     })
    // }

}
