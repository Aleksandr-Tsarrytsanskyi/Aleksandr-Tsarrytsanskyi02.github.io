document.addEventListener("DOMContentLoaded", init)

function init() {
    const sunglasses = document.querySelector("#main .active_sunglasses");
    const linksHover = document.querySelectorAll(".link_hover");
   for(let link of linksHover ){
    link.addEventListener("mouseover", function(event) {
        let events = event.target;
        events.classList.add("show_active");
    }) 
   }
   for(let link of linksHover) {
    link.addEventListener("mouseout", function(event) {
        let events = event.target;
        events.classList.remove("show_active");
        events.classList.add("hide_active");
    })
   }
    

}