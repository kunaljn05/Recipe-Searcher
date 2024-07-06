
export class myPagination{
  
  paginationData;
  recipeData;

    render(data){
   this.recipeData=data;
   this.paginationData = document.getElementById('pagination');
   this.paginationLogic();
    }

    paginationLogic(){
    const recipeLength = this.recipeData.recipeArray.length;
    const recipePerPage = this.recipeData.totalPages;
    const numOfPages = Math.ceil(recipeLength/recipePerPage);
    const currentPage = this.recipeData.page;
        
         
        //   on first page and other page is needes
             if(currentPage === 1 && currentPage<numOfPages){
              this.paginationData.innerText=""
              return  this.paginationData.insertAdjacentHTML("afterbegin",`<button class="next dynamic_btn">
                  <span>Page ${currentPage+1}</span>
                 </button>`
             )}

             // on last page so no next button is needed
             if(currentPage===numOfPages){
              this.paginationData.innerText=""
              return this.paginationData.insertAdjacentHTML("afterbegin",`<button class="prev dynamic_btn">
                      <span>Page ${currentPage-1}</span>
                      </button>`
             )}

              //  on a page where pev and next page is needed
              if(currentPage<numOfPages){
                this.paginationData.innerText=""
               return this.paginationData.insertAdjacentHTML("afterbegin",`<button class="next dynamic_btn">
                  <span>Page ${currentPage-1}</span>
                 </button>
                 
                 <button class="prev dynamic_btn">
                      <span>Page ${currentPage+1}</span>
                      </button>`
              )}
        // on first page is needed and no other page is needed
              else{
                this.paginationData.innerText=""
                return this.paginationData.insertAdjacentHTML("afterbegin",`<button class="current dynamic_btn">
                <span>Page ${currentPage}</span>
                </button>`
              )}
 
    }

    getPageNumberFromButton(displayRecipeAccToPage){
      this.paginationData = document.getElementById('pagination');
      this.paginationData.addEventListener('click',function(e){
        console.log(e.target.innerText.length)
        // logic to be working if clicked on button in div
        if(e.target.innerText.length==6){
          const page = Number(e.target.innerText.slice(4));
          displayRecipeAccToPage(page);
        }
      })
    }
}