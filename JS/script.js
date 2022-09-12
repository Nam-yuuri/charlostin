document.getElementById("icon_search_btn").onclick = function(){
    document.getElementById("mfp-content_id").style.display = "block"
    document.getElementById("bgr").style.display = "block"
    document.getElementById("mfp-wrap_id").style.display = "block"

    document.getElementById("mfp-wrap_id").style.top = window.pageYOffset + "px"
    document.getElementById("mfp-wrap_id").style.position = "absolute"
    document.getElementById("mfp-wrap_id").style.height = "438px"
    console.log(window.pageYOffset)
}

document.getElementById("btn_CL").onclick = function(){
    document.getElementById("mfp-content_id").style.display = "none"
    document.getElementById("bgr").style.display = "none"
    document.getElementById("mfp-wrap_id").style.display = "none"
}

document.getElementById("bgr").onclick = function(){
    document.getElementById("mfp-content_id").style.display = "none"
    document.getElementById("bgr").style.display = "none"
    document.getElementById("mfp-wrap_id").style.display = "none"
}







document.getElementById("nice-select-input_id").onclick = function(){
    document.getElementById("nice-select-input_id").classList.toggle("open")
}




var En = document.getElementById("en").innerHTML;
var Ban = document.getElementById("ban").innerHTML;
var Ind = document.getElementById("ind").innerHTML;



document.getElementById("en").onclick = function(){
    document.getElementById("lang").innerHTML = En
    document.getElementById("en").classList.add("focus")
    document.getElementById("ban").classList.remove("focus")
    document.getElementById("ind").classList.remove("focus")
}
document.getElementById("ban").onclick = function(){
    document.getElementById("lang").innerHTML = Ban
    document.getElementById("ban").classList.add("focus")
    document.getElementById("en").classList.remove("focus")
    document.getElementById("ind").classList.remove("focus")
}
document.getElementById("ind").onclick = function(){
    document.getElementById("lang").innerHTML = Ind
    document.getElementById("ind").classList.add("focus")
    document.getElementById("en").classList.remove("focus")
    document.getElementById("ban").classList.remove("focus")
}









var navbarpage = document.getElementById("navbarpage_id");
var menuitem = document.getElementById("menu-item");
var navbarbrand_id = document.getElementById("navbar-brand_id")

function myFunction() {

    if (window.scrollY >= 300) {
        navbarpage.style.position = "fixed"
        navbarpage.style.width = "100%"
        navbarpage.style.backgroundColor = "#fff"
        navbarpage.style.top = 0
        navbarpage.style.zIndex = 9
        // navbarpage.style.height = "70px"

        // navbarbrand_id.style.paddingTop = 0
        // navbarbrand_id.style.bottom = "15px"
        console.log(window.pageYOffset)
    }

    if (window.scrollY < 300) {
        navbarpage.style.position = "relative"
        // menuitem.style.marginRight = "25px";
        // menuitem.style.marginRight = "25px";


        console.log(window.pageYOffset)
    }
}







