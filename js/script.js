

let btn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

btn,addEventListener("click",()=>{
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
})


