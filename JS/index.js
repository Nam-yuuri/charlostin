var close_btn = document.getElementById("Close")

close_btn.onclick = function () {
    document.getElementById("mfp-wrap_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}

var open_btn = document.getElementById("Open_video")

open_btn.onclick = function () {
    document.getElementById("mfp-wrap_id").style.display = "block"
    document.getElementById("mfp-bg_id").style.display = "block"
}

document.getElementById("mfp-bg_id").onclick = function () {
    document.getElementById("mfp-wrap_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}
document.getElementById("mfp-container_id").onclick = function () {
    document.getElementById("mfp-wrap_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}



var close_btn = document.getElementById("Close")

close_btn.onclick = function(){
    document.getElementById("mfp-wrap1_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}

var open_btn = document.getElementById("Open_video")

open_btn.onclick = function(){
    document.getElementById("mfp-wrap1_id").style.display = "block"
    document.getElementById("mfp-bg_id").style.display = "block"
}

document.getElementById("mfp-bg_id").onclick = function(){
    document.getElementById("mfp-wrap1_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}
document.getElementById("mfp-container_id").onclick = function(){
    document.getElementById("mfp-wrap1_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}

var Al = document.getElementById("All")
var Ac = document.getElementById("Activities")
var Po = document.getElementById("Pool")
var Re = document.getElementById("Restaurant")
var Ro = document.getElementById("Rooms")
var Sp = document.getElementById("Spa")
var We = document.getElementById("Wedding")

Al.onclick = function(){
    document.getElementById("all_id").style.display= "block"
    document.getElementById("Activities_id").style.display= "none"
    document.getElementById("Pool_id").style.display= "none"
    document.getElementById("Restaurant_id").style.display= "none"
    document.getElementById("Rooms_id").style.display= "none"
    document.getElementById("Spa_id").style.display= "none"
    document.getElementById("Wedding_id").style.display= "none"

    document.getElementById("All").classList.add("active")
    document.getElementById("Activities").classList.remove("active")
    document.getElementById("Pool").classList.remove("active")
    document.getElementById("Restaurant").classList.remove("active")
    document.getElementById("Rooms").classList.remove("active")
    document.getElementById("Spa").classList.remove("active")
    document.getElementById("Wedding").classList.remove("active")
}
Ac.onclick = function(){
    document.getElementById("all_id").style.display= "none"
    document.getElementById("Activities_id").style.display= "block"
    document.getElementById("Pool_id").style.display= "none"
    document.getElementById("Restaurant_id").style.display= "none"
    document.getElementById("Rooms_id").style.display= "none"
    document.getElementById("Spa_id").style.display= "none"
    document.getElementById("Wedding_id").style.display= "none"

    document.getElementById("All").classList.remove("active")
    document.getElementById("Activities").classList.add("active")
    document.getElementById("Pool").classList.remove("active")
    document.getElementById("Restaurant").classList.remove("active")
    document.getElementById("Rooms").classList.remove("active")
    document.getElementById("Spa").classList.remove("active")
    document.getElementById("Wedding").classList.remove("active")
}
Po.onclick = function(){
    document.getElementById("all_id").style.display= "none"
    document.getElementById("Activities_id").style.display= "none"
    document.getElementById("Pool_id").style.display= "block"
    document.getElementById("Restaurant_id").style.display= "none"
    document.getElementById("Rooms_id").style.display= "none"
    document.getElementById("Spa_id").style.display= "none"
    document.getElementById("Wedding_id").style.display= "none"

    document.getElementById("All").classList.remove("active")
    document.getElementById("Activities").classList.remove("active")
    document.getElementById("Pool").classList.add("active")
    document.getElementById("Restaurant").classList.remove("active")
    document.getElementById("Rooms").classList.remove("active")
    document.getElementById("Spa").classList.remove("active")
    document.getElementById("Wedding").classList.remove("active")
}
Re.onclick = function(){
    document.getElementById("all_id").style.display= "none"
    document.getElementById("Activities_id").style.display= "none"
    document.getElementById("Pool_id").style.display= "none"
    document.getElementById("Restaurant_id").style.display= "block"
    document.getElementById("Rooms_id").style.display= "none"
    document.getElementById("Spa_id").style.display= "none"
    document.getElementById("Wedding_id").style.display= "none"

    document.getElementById("All").classList.remove("active")
    document.getElementById("Activities").classList.remove("active")
    document.getElementById("Pool").classList.remove("active")
    document.getElementById("Restaurant").classList.add("active")
    document.getElementById("Rooms").classList.remove("active")
    document.getElementById("Spa").classList.remove("active")
    document.getElementById("Wedding").classList.remove("active")
}
Ro.onclick = function(){
    document.getElementById("all_id").style.display= "none"
    document.getElementById("Activities_id").style.display= "none"
    document.getElementById("Pool_id").style.display= "none"
    document.getElementById("Restaurant_id").style.display= "none"
    document.getElementById("Rooms_id").style.display= "block"
    document.getElementById("Spa_id").style.display= "none"
    document.getElementById("Wedding_id").style.display= "none"

    document.getElementById("All").classList.remove("active")
    document.getElementById("Activities").classList.remove("active")
    document.getElementById("Pool").classList.remove("active")
    document.getElementById("Restaurant").classList.remove("active")
    document.getElementById("Rooms").classList.add("active")
    document.getElementById("Spa").classList.remove("active")
    document.getElementById("Wedding").classList.remove("active")
}
Sp.onclick = function(){
    document.getElementById("all_id").style.display= "none"
    document.getElementById("Activities_id").style.display= "none"
    document.getElementById("Pool_id").style.display= "none"
    document.getElementById("Restaurant_id").style.display= "none"
    document.getElementById("Rooms_id").style.display= "none"
    document.getElementById("Spa_id").style.display= "block"
    document.getElementById("Wedding_id").style.display= "none"

    document.getElementById("All").classList.remove("active")
    document.getElementById("Activities").classList.remove("active")
    document.getElementById("Pool").classList.remove("active")
    document.getElementById("Restaurant").classList.remove("active")
    document.getElementById("Rooms").classList.remove("active")
    document.getElementById("Spa").classList.add("active")
    document.getElementById("Wedding").classList.remove("active")
}
We.onclick = function(){
    document.getElementById("all_id").style.display= "none"
    document.getElementById("Activities_id").style.display= "none"
    document.getElementById("Pool_id").style.display= "none"
    document.getElementById("Restaurant_id").style.display= "none"
    document.getElementById("Rooms_id").style.display= "none"
    document.getElementById("Spa_id").style.display= "none"
    document.getElementById("Wedding_id").style.display= "block"

    document.getElementById("All").classList.remove("active")
    document.getElementById("Activities").classList.remove("active")
    document.getElementById("Pool").classList.remove("active")
    document.getElementById("Restaurant").classList.remove("active")
    document.getElementById("Rooms").classList.remove("active")
    document.getElementById("Spa").classList.remove("active")
    document.getElementById("Wedding").classList.add("active")
}





$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 2000,
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",


            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 2000,
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",



            }
        },
        {
            breakpoint: 427,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 2000,
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",



            }
        }
    ]
});


$('.autoplay1').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    Speed: 5000,


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1000,
                Speed: 5000,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1000,
                Speed: 5000,

            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1000,
                Speed: 5000,

            }
        }
    ]
});