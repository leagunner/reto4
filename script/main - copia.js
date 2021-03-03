let cartas = ["🙈","🙉","🙊","😈","😌","😤","😎","🐼","⚡","🐉","👀","👴","👵","💩","☠","🐜","🐫","🐲","💧","🌝","🐄"] 
let tituloCarta = ["El mono ciego","El mono sordo", "El mono mudo","El amargo del Independiente","El sumiso","El snifler","El canchero","El Pandolfi","Raio","Shen-Long-Jonhson","Chusma","Viejo choto", "Vieja chota","La cacona","Piratilla","Hormiga Atómica","Camel","Bowser","Gota","CaraMoon","Novillo"]
let descripcionCarta = ["Si no lo veo no es ilegal esa es la filosofía de este chango",
"Este no te quiere ni escuchar prefiere verte",
"Este mono sabe demasiado asi que por las dudas se queda asi",
"Hincha fanatico del rojo puaj fuchi mejor no digo mas",
"Le gusta vivir a bajo las ordenes de otro. Onda Smithers",
"El primo del tio marido del Diegote QEPD",
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
//Pantallas
let pantallaPrincipal = document.getElementById("pantalla-principal")
let pantallaAnimacion = document.getElementById("pantalla-animacion")
let pantallaCartas = document.getElementById("pantalla-cartas")
let pantallaResultados = document.getElementById("pantalla-resultados")
let resultadosJugador1= document.getElementById("resultados-jugador1")
let resultadosJugador2= document.getElementById("resultados-jugador2")
let resultadoMatch= document.getElementById("resultado-match")
let pantallaHistorial = document.getElementById("pantalla-historial")
//Botones
let botonJugar = document.getElementById("boton-jugar")
let botonVolverATirar = document.getElementById("volver-a-tirar")
let botonVerResultados = document.getElementById("ver-resultados")
let botonCerrarResultados = document.getElementById("boton-cerrar-resultados")
let botonGuardarPartida = document.getElementById("boton-guardar-partida")
let botonSalir = document.getElementById("boton-salir")
//Jugadores
let jugador1 = document.getElementById("jugador-1")
let jugador2 = document.getElementById("jugador-2")
//Contenedores de cartas
let contenedorCarta1 = document.getElementById("contenedor-carta1")
let contenedorCarta2 = document.getElementById("contenedor-carta2")
let contenedorCarta3 = document.getElementById("contenedor-carta3")
let contenedorCarta4 = document.getElementById("contenedor-carta4")
let contenedorCarta5 = document.getElementById("contenedor-carta5")
let contenedorCarta6 = document.getElementById("contenedor-carta6")

let numeros=[]
function numerosAleatoriosNoRepetidos(min, max, cantidad) {
    if (min>max || cantidad>max-min) {
        return false;
    }
    while (numeros.length<cantidad) {
        const num = Math.floor((Math.random() * (max - min)) + min )
        if (numeros.indexOf(num)==-1) {
            numeros.push(num)
        }
    }
    return numeros;
}

botonJugar.addEventListener("click",function(){
    numerosAleatoriosNoRepetidos(0,20,6)
    let nombreJugador1 = jugador1.value
    let nombreJugador2 = jugador2.value
    if (nombreJugador1 != "" && nombreJugador2 != "" ){
        pantallaPrincipal.style.display = "none"
        pantallaAnimacion.style.display = "block"
        setTimeout(function(){
        pantallaAnimacion.style.display = "none"
        pantallaCartas.style.display = "block"
    }, 3000)
    
    let carta1 = numeros[0]
    let carta2 = numeros[1]
    let carta3 = numeros[2]
    let carta4 = numeros[3]
    let carta5 = numeros[4]
    let carta6 = numeros[5]
    contenedorCarta1.innerHTML = `<p>Carta 1/6 de ${nombreJugador1}</p> <h1>${cartas[carta1]}</h1> <h3>${tituloCarta[carta1]}</h3> <p>${descripcionCarta[carta1]}</p>`
    contenedorCarta2.innerHTML = `<p>Carta 2/6 de ${nombreJugador1}</p> <h1>${cartas[carta2]}</h1> <h3>${tituloCarta[carta2]}</h3> <p>${descripcionCarta[carta2]}</p>`
    contenedorCarta3.innerHTML = `<p>Carta 3/6 de ${nombreJugador1}</p> <h1>${cartas[carta3]}</h1> <h3>${tituloCarta[carta3]}</h3> <p>${descripcionCarta[carta3]}</p>`
    contenedorCarta4.innerHTML = `<p>Carta 4/6 de ${nombreJugador2}</p> <h1>${cartas[carta4]}</h1> <h3>${tituloCarta[carta4]}</h3> <p>${descripcionCarta[carta4]}</p>`
    contenedorCarta5.innerHTML = `<p>Carta 5/6 de ${nombreJugador2}</p> <h1>${cartas[carta5]}</h1> <h3>${tituloCarta[carta5]}</h3> <p>${descripcionCarta[carta5]}</p>`
    contenedorCarta6.innerHTML = `<p>Carta 6/6 de ${nombreJugador2}</p> <h1>${cartas[carta6]}</h1> <h3>${tituloCarta[carta6]}</h3> <p>${descripcionCarta[carta6]}</p>`
    botonGuardarPartida.addEventListener("click",function(){
        pantallaResultados.style.display = "none"
        pantallaPrincipal.style.display = "block"
        pantallaHistorial.style.display = "block"
        jugador1.value = ""
        jugador2.value = ""
        partidaJugador1 = [carta1,carta2,carta3]
        partidaJugador2 = [carta4,carta5,carta6]
        let modelo = `Partida de ${nombreJugador1} y ${nombreJugador2} <img src="images/chulardi.png" class="chulito" nombrej1="${nombreJugador1}" nombrej2="${nombreJugador2}"carta1="${carta1}" carta2="${carta2}" carta3="${carta3}" carta4="${carta4}" carta5="${carta5}" carta6="${carta6}"><br>`
        pantallaHistorial.innerHTML += modelo
    })
    botonVolverATirar.addEventListener("click",function(){
        pantallaCartas.style.display="none"
        pantallaPrincipal.style.display="block"
        jugador1.value = ""
        jugador2.value = ""
    })
    botonVerResultados.addEventListener("click",function(){
        pantallaCartas.style.display = "none"
        pantallaResultados.style.display ="block"
        resultadosJugador1.innerHTML = `<h1>${nombreJugador1}<h1/> <h3>${cartas[carta1]+cartas[carta2]+cartas[carta3]}</h3>`
        resultadosJugador2.innerHTML = `<h1>${nombreJugador2}<h1/> <h3>${cartas[carta4]+cartas[carta5]+cartas[carta6]}</h3>`
        let sumasCartasJ1 = carta1+carta2+carta3
        let sumasCartasJ2 = carta4+carta5+carta6
        if(sumasCartasJ1 % 2 == sumasCartasJ2 % 2){
            resultadoMatch.innerHTML = `<p>${nombreJugador1} y ${nombreJugador2} matchearon</p>` 
        }else{resultadoMatch.innerHTML = `<p>${nombreJugador1} y ${nombreJugador2} no matchearon</p>` }
        botonCerrarResultados.addEventListener("click",function(){
            pantallaResultados.style.display = "none"
            pantallaPrincipal.style.display = "block"
            jugador1.value = ""
            jugador2.value = ""
        })
        botonSalir.addEventListener("click",function(){
            pantallaResultados.style.display = "none"
            pantallaPrincipal.style.display = "block"
            jugador1.value = ""
            jugador2.value = ""
        })
        
        document.addEventListener("click",function(e){
            if (e.target.className == "chulito"){
                pantallaPrincipal.style.display = "none"
                pantallaAnimacion.style.display = "block"
                setTimeout(function(){
                pantallaAnimacion.style.display = "none"
                pantallaCartas.style.display = "block"
            }, 3000)
            // let player1 = e.target.getAttribute("nombrej1")
            // let player2 = e.target.getAttribute("nombrej2")
            // let card1 = e.target.getAttribute("carta1")
            // let card2 = e.target.getAttribute("carta2")
            // let card3 = e.target.getAttribute("carta3")
            // let card4 = e.target.getAttribute("carta4")
            // let card5 = e.target.getAttribute("carta5")
            // let card6 = e.target.getAttribute("carta6")
         }//contenedorCarta1.innerHTML = `<p>Carta 1/6 de ${player1}</p> <h1>${cartas[card1]}</h1> <h3>${tituloCarta[card1]}</h3> <p>${descripcionCarta[card1]}</p>`
        // contenedorCarta2.innerHTML = `<p>Carta 2/6 de ${player1}</p> <h1>${cartas[card2]}</h1> <h3>${tituloCarta[card2]}</h3> <p>${descripcionCarta[card2]}</p>`
        // contenedorCarta3.innerHTML = `<p>Carta 3/6 de ${player1}</p> <h1>${cartas[card3]}</h1> <h3>${tituloCarta[card3]}</h3> <p>${descripcionCarta[card3]}</p>`
        // contenedorCarta4.innerHTML = `<p>Carta 4/6 de ${player2}</p> <h1>${cartas[card4]}</h1> <h3>${tituloCarta[card4]}</h3> <p>${descripcionCarta[card4]}</p>`
        // contenedorCarta5.innerHTML = `<p>Carta 5/6 de ${player2}</p> <h1>${cartas[card5]}</h1> <h3>${tituloCarta[card5]}</h3> <p>${descripcionCarta[card5]}</p>`
        // contenedorCarta6.innerHTML = `<p>Carta 6/6 de ${player2}</p> <h1>${cartas[card6]}</h1> <h3>${tituloCarta[card6]}</h3> <p>${descripcionCarta[card6]}</p>`
        })
    })
    }else{
        alert("Completa los campos de Jugador 1 y 2")
    } 
})
