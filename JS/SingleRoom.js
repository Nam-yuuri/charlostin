var btn1 = document.getElementById("Description")
var btn2 = document.getElementById("Information")
var btn3 = document.getElementById("Reviews")
var btn4 = document.getElementById("Pricing")

btn1.onclick = function () {
    document.getElementById("hb_room_description").style.display = "block"
    document.getElementById("hb_room_additinal").style.display = "none"
    document.getElementById("hb_room_reviews").style.display = "none"
    document.getElementById("hb_room_pricing_plans").style.display = "none"

    document.getElementById("Description_a").classList.add("active")
    document.getElementById("Information_a").classList.remove("active")
    document.getElementById("Reviews_a").classList.remove("active")
    document.getElementById("Pricing_a").classList.remove("active")
}

btn2.onclick = function () {
    document.getElementById("hb_room_description").style.display = "none"
    document.getElementById("hb_room_additinal").style.display = "block"
    document.getElementById("hb_room_reviews").style.display = "none"
    document.getElementById("hb_room_pricing_plans").style.display = "none"

    document.getElementById("Information_a").classList.add("active")
    document.getElementById("Description_a").classList.remove("active")
    document.getElementById("Reviews_a").classList.remove("active")
    document.getElementById("Pricing_a").classList.remove("active")
}

btn3.onclick = function () {
    document.getElementById("hb_room_description").style.display = "none"
    document.getElementById("hb_room_additinal").style.display = "none"
    document.getElementById("hb_room_reviews").style.display = "block"
    document.getElementById("hb_room_pricing_plans").style.display = "none"

    document.getElementById("Reviews_a").classList.add("active")
    document.getElementById("Description_a").classList.remove("active")
    document.getElementById("Information_a").classList.remove("active")
    document.getElementById("Pricing_a").classList.remove("active")
}

btn4.onclick = function () {
    document.getElementById("hb_room_description").style.display = "none"
    document.getElementById("hb_room_additinal").style.display = "none"
    document.getElementById("hb_room_reviews").style.display = "none"
    document.getElementById("hb_room_pricing_plans").style.display = "block"

    document.getElementById("Pricing_a").classList.add("active")
    document.getElementById("Description_a").classList.remove("active")
    document.getElementById("Information_a").classList.remove("active")
    document.getElementById("Reviews_a").classList.remove("active")
}


var btn5 = document.getElementById("nice-select_id")

btn5.onclick = function () {
    btn5.classList.toggle("open")
}

document.getElementById('nice-select_Children').onclick = function(){
    document.getElementById('nice-select_Children').classList.toggle("open")
}






var opt = document.getElementsByClassName("option")
var cur1 = document.getElementById("current_id1")
var cur2 = document.getElementById("current_id2")


opt[3].onclick = function(){
    // alert(this.innerHTML)
    cur1.innerHTML= this.innerHTML
}
opt[4].onclick = function(){
    // alert(this.innerHTML)
    cur1.innerHTML= this.innerHTML
}
opt[5].onclick = function(){
    // alert(this.innerHTML)
    cur1.innerHTML= this.innerHTML
}
opt[6].onclick = function(){
    // alert(this.innerHTML)
    cur1.innerHTML= this.innerHTML
}
opt[7].onclick = function(){
    // alert(this.innerHTML)
    cur1.innerHTML= this.innerHTML
}


opt[8].onclick = function(){
    // alert(this.innerHTML)
    cur2.innerHTML= this.innerHTML
}
opt[9].onclick = function(){
    // alert(this.innerHTML)
    cur2.innerHTML= this.innerHTML
}
opt[10].onclick = function(){
    // alert(this.innerHTML)
    cur2.innerHTML= this.innerHTML
}
opt[11].onclick = function(){
    // alert(this.innerHTML)
    cur2.innerHTML= this.innerHTML
}
opt[12].onclick = function(){
    // alert(this.innerHTML)
    cur2.innerHTML= this.innerHTML
}












$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 3000,
    Speed: 3000,
    // draggable: false,
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    center: false,
    nav: false,
    margin: 10,
    focusOnSelect: true,
    
});


// var a = window.pageYOffset


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

