let cartas = ["🙈","🙉","🙊","😈","😌","😤","😎","🐼","⚡","🐉","👀","👴","👵","💩","☠","🐜","🐫","🐲","💧","🌝","🐄"] 
let tituloCarta = ["El mono ciego","El mono sordo", "El mono mudo","El amargo del Independiente","La calor","El getón","El canchero","El Pandolfi","Ray","Shen-Long-Jonhson","Chusma","Viejo choto", "Vieja chota","La cacona","Piratilla","Hormiga Atómica","Camel","Bowser","Gota","CaraMoon","Novillo"]
let descripcionCarta = ["Si no lo veo no es ilegal esa es la filosofía de este chango",
"Este no te quiere ni escuchar prefiere verte",
"Este mono sabe demasiado asi que por las dudas se queda asi",
"Hincha fanatico del rojo puaj fuchi mejor no digo mas",
"Algunos dicen que esta tenso, yo creo que tiene calor",
"Mirale la geta. Mamita! Este es pariente de Steven Tyler",
"El mas canchero de todos papá mirale los ReyBen que tiene",
"Este panda no sabe kun-fu. Se hizo famoso en internet con su panda bebe",
"Con esta carta tenes el poder de Thor pero no el martillo porque no soh digno mostro",
"La mejor carta. Pedi un deseo que si te esforzas lo cumplis",
"Te esta espiando a traves de la camara del celu guarda che!",
"A este le molesta que jueges a la pelota en la vereda",
"Esta no te devuelve la pelota si se cayó por encima del portón",
"Oh... admirala... la caca, la caculia, le cacusa, como este juego",
"Arrgh!!! Te gusta la aventura y las noches de bailanta",
"La mas picante de las homigas, la roja pica que arde",
"Dan ganas de fumarce un tabaquito",
"Si Nintendo viera esta carta terminamos presos por Copyright. Mario LTA",
"Agua... como te deseo. Agua... te miro y te quiero...",
"Apareció en un capitulo de Coraje el Perro Cobarde",
"Que ternurita la vaquita. 680 el kilo será de dios..."]

let pantallaPrincipal = document.getElementById("pantalla-principal")
let pantallaAnimacion = document.getElementById("pantalla-animacion")
let pantallaCartas = document.getElementById("pantalla-cartas")
let pantallaResultados = document.getElementById("pantalla-resultados")
let pantallaMatch = document.getElementById("pantalla-match")
let botonJugar = document.getElementById("boton-jugar")
let jugador1 = document.getElementById("jugador-1")
let jugador2 = document.getElementById("jugador-2")

botonJugar.addEventListener("click",function(){
    let nombreJugador1 = jugador1.value
    let nombreJugador2 = jugador2.value
    pantallaPrincipal.style.display = "none"
    //pantallaAnimacion.style.display = "block"
})