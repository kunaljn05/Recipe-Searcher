import { anotherRecipeObject } from "./model.js";
export class servingsView {

    rightContainer;
    currentServings;
    render(){
     this.rightContainer = document.querySelector('.second_container');
     this.handleServings();
    }

    handleServings(){
        this.rightContainer.addEventListener('click',function(e){
         const value = e.target.innerText;
         const currentObject = anotherRecipeObject.anotherObject;
          let currentServings = currentObject.servings;
          
         if(value == "INCREASE"){

          anotherRecipeObject.anotherObject.servings = currentServings + 1;

          anotherRecipeObject.anotherObject.ingredients.map(function(i){
            // newQuantity = (oldQuantity * servings ) / 5
            i.quantity =Math.ceil(( i.quantity * anotherRecipeObject.anotherObject.servings )/5);
          })

          const data = anotherRecipeObject.anotherObject;
          this.rightContainer = document.querySelector('.second_container');


          this.rightContainer.innerHTML=""
          return  this.rightContainer.insertAdjacentHTML("afterbegin",`
        <div class="single_recipe_container">
        <img id="src_image"src="${data.image}"/>
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
          
         ) }
         else if(value == "DECREASE"){
            const currentObject = anotherRecipeObject.anotherObject;
            let currentServings = currentObject.servings;

            if(currentServings==0) return;
  
            anotherRecipeObject.anotherObject.servings = currentServings - 1;
  
            anotherRecipeObject.anotherObject.ingredients.map(function(i){
              // newQuantity = (oldQuantity * servings ) / 5
              i.quantity =Math.ceil(( i.quantity * anotherRecipeObject.anotherObject.servings )/5);
            })
  
            const data = anotherRecipeObject.anotherObject;
            this.rightContainer = document.querySelector('.second_container');
            this.rightContainer.innerHTML=""
            return  this.rightContainer.insertAdjacentHTML("afterbegin",`
          <div class="single_recipe_container">
          <img id="src_image"src="${data.image}"/>
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
        )}
        })
    }
}