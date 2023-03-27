let botonNav = document.getElementById("botonNav");

function aparecerMenu(){
    let nav = document.getElementById("nav")
    nav.classList.toggle("menuDesplegable")
}

botonNav.addEventListener("click", aparecerMenu)


/* modo dia y noche */

let modoClaro = document.getElementById("modoClaro");

function cambiarModo(){

let body = document.getElementById("body");


    if (body.classList.contains("modoDark")) {
        body.classList.remove("modoDark");
        modoClaro.innerHTML = "<span class='material-symbols-outlined'>light_mode  Modo Claro</span>"
    } 
    else {
        body.classList.add("modoDark");
        modoClaro.innerHTML = "<span class='material-symbols-outlined'>dark_mode Modo Oscuro</span>"

    }
    
}
modoClaro.addEventListener("click", cambiarModo)


/* boton musica */

let botonMusica = document.getElementById("botonMusica");

function activarMusica(){
    if(Audio.play()){
        alert("hola")
    }else{
        alert("hola")
    }
}
botonMusica.addEventListener("click", activarMusica)