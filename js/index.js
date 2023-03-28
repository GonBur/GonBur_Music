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
        modoClaro.innerHTML = "<span class='material-symbols-outlined'>light_modeModo Claro</span>"
    } 
    else {
        body.classList.add("modoDark");
        modoClaro.innerHTML = "<span class='material-symbols-outlined'>dark_modeModo Oscuro</span>"

    }
    
}
modoClaro.addEventListener("click", cambiarModo);


/* boton musica */

let botonMusica = document.getElementById("botonMusica");

let audio = document.getElementById("audio");


function activarMusica(){
    if(audio.paused){
        audio.play()
        botonMusica.innerHTML = "<span  class='material-symbols-outlined'>equalizer</span>";
    }else{
        audio.pause()
        botonMusica.innerHTML = "<span  class='material-symbols-outlined'>equalizer</span>";
    }

    if(botonMusica.classList.contains("animacion_musica")){
        botonMusica.classList.remove("animacion_musica")
    }
    else{
        botonMusica.classList.add("animacion_musica")
    }
}
botonMusica.addEventListener("click", activarMusica)


