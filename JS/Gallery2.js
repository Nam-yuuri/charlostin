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