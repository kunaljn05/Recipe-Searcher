import { anotherRecipeObject } from "./model.js";
export class view{
  
    rightContainer;
    html;

    render(){
        this.rightContainer = document.querySelector('.second_container');
        this.clear();
        let data = anotherRecipeObject.anotherObject;
        this.html = this.display(data);
        this.addDataTorightContainer();
    }

    clear(){
        this. rightContainer.innerHTML="";
    }

    display(data){
        return  `
        <div class="single_recipe_container">
        <img id="src_image"src="${data.image}"/>
        <button id="bookmark"> Bookmark </button>
        <h2 id="src_title">Title: ${data.title}</h2>
        <h3 id="src_publisher">Publisher: ${data.publisher}</h3>
        <h3 id="src_servings">Servings: ${data.servings}</h3>
        <button id="inc">INCREASE</button>
        <button id="dec">DECREASE</button>
        <h3 id="src_cookingTime">Cooking-time: ${data.cookingTime}</h3>
        </div>
        
        <div class="src_ingredients">
        ${data.ingredients.map(function(i){
           return `<div>
              <span>* ${i.description} --</span>
              <span>${i.quantity}</span>
              <span>${i.unit}</span>
           </div>`
        }).join("")}
        </div>
   `
    }
   
    addDataTorightContainer(){
        this.rightContainer.insertAdjacentHTML('afterbegin',this.html);
    }

    hasChangeEventListner(data){
        window.addEventListener('hashchange',data);
    }

    handleError(){
        this.rightContainer = document.querySelector('.second_container');
        this.rightContainer.innerHTML="";
        this.rightContainer.textContent = "invalid id"
    }
}