var close_btn = document.getElementById("Close")

close_btn.onclick = function(){
    document.getElementById("mfp-wrap_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}

var open_btn = document.getElementById("Open_video")

open_btn.onclick = function(){
    document.getElementById("mfp-wrap_id").style.display = "block"
    document.getElementById("mfp-bg_id").style.display = "block"
}

document.getElementById("mfp-bg_id").onclick = function(){
    document.getElementById("mfp-wrap_id").style.display = "none"
    document.getElementById("mfp-bg_id").style.display = "none"
}
document.getElementById("mfp-container_id").onclick = function(){
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














$('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    Speed: 2000,


    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                Speed: 2000,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                // arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                Speed: 2000,

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
                autoplaySpeed: 2000,
                Speed: 2000,

            }
        }
    ]
});


