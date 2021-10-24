var pages=["Home","About", "Interact"];
function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}
function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}
function navigate(pg){
    if ( pg ==="Home"){
            homePage();
    }else if( pg === "About"){
            aboutPage();
    }else{
        interactPage();
    }
}
function homePage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML = "Home";
    wrapper.appendChild(header);
}
function aboutPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML=""
    var header = document.createElement("h1");
    header.innerHTML="About";
    var name = document.createElement("h3");
    name.innerHTML="Kierra White";
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}
function interactPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Interact";
    wrapper.appendChild(header);
    var click = 0;
    click +=1;
    click = document.createElement("div");
   document.getElementById("click").innerHTML= click;
    wrapper.appendChild(click);

}
createNav();
createWrapper();
navigate("Home");