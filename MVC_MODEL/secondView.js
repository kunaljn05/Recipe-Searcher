
export class secondView {

    leftContainer;
    render(data){
   this.leftContainer=document.querySelector('.first_container');
   this.getReicpeDataView(data);
    }

    getReicpeDataView(data){
        console.log(data)
        data.map((i)=>{
               const publisher = i.publisher;
               const myImage = i.image_url;
               const title = i.title;
               let id = i.id;
        
            //    console.log(id)
               
            return this.leftContainer.insertAdjacentHTML('afterbegin',  `
                          <a href="#${id}">
                          <div class="recipe_container">
                             <h2 id="publisher">${publisher}</h2>
                             <img id="recipe_image" src="${myImage}"/>
                             <h3 id="title">${title}</h3>
                            </div></a>
                            `);
                         
        
            })
    }
}