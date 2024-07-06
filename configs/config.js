import { view } from "../MVC_MODEL/view.js";

export async function getJSON(URL){
    const response =  await fetch(URL);
    const data = await response.json();
    if(data.status=="fail"){
      const v = new view();
      v.handleError();
    }
    if(data.status=="success"){
        return data;
    }
}