var search = document.getElementById("inputPassword");
search.addEventListener("click",function(){
    search.style.width="400px";
})
var anch = document.getElementById("an");
anch.addEventListener("mouseenter",function(){
    anch.style.backgroundColor="white";
    anch.addEventListener("mouseleave",function(){
        anch.style.backgroundColor="white";

    })
})