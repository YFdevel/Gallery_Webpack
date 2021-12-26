import {pictures} from "./pictures";

function loadGallery(callback) {
    const element = document.createElement("div");
    element.className = "gallery";
    document.body.appendChild(element);
     element.onload = callback();
}
function loadCards() {
    pictures.forEach((item)=>{
        const element = document.createElement("div");
        element.className = "card";
        element.innerHTML+=`<h3>${item.heading}</h3><img src=./gallery/images/${item.image}>`;
        document.querySelector(".gallery").appendChild(element);
    })

}
loadGallery(loadCards);