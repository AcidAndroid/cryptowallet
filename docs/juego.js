//Juego de piedra papel o tijera

/*
1 piedra
2 papel
3 tijera
4 rendirse
*/

const round = 3
let roundActual = 1
let usuario = 0
let cpu = 0
const opciones = {
    1: "piedra",
    2: "papel",
    3: "tijera"
}


while (roundActual <= round) {

    cpu = Math.floor((Math.random() * 3) + 1);
    //se pide al usaurio un numero del 1 al 4
    usuario = prompt('Juguemos piedra-papel-tijera.! \n 1-Piedra \n 2-Papel \n 3- Tijera \n 4- Salirse');
    // usuario = 1
    // cpu = 3
    if (isNaN(usuario) || Number(usuario) > 4) {
        alert('No escribiste una opcion valida');
    } else {
        console.log('Veamos quien ganó')
        console.log('Tu:' + usuario)
        console.log('CPU:' + cpu)
            //Valida quien gana 

        if (Number(usuario) == 4) {
            alert('Te rendiste!!');
        } else {
            if (Number(usuario) > Number(cpu)) {
                alert(`Ganaste! \n Tu escogiste ${opciones[usuario]} y el CPU: ${opciones[cpu]}`)
                    //alert('Ganaste! \n Tu escogiste:' + opciones[usuario] + ' y el CPU:' + opciones[cpu]);            
            } else if (Number(usuario) < Number(cpu)) {

                if (Number(usuario) === 1 && Number(cpu) === 3) {
                    alert(`Ganaste! \n Tu escogiste ${opciones[usuario]} y el CPU: ${opciones[cpu]}`)
                } else {
                    //alert('Perdiste! \n Tu escogiste:' + opciones[usuario] + ' y el CPU:' + opciones[cpu]);
                    alert(`Perdiste! \n Tu escogiste ${opciones[usuario]} y el CPU: ${opciones[cpu]}`)
                }


            } else {
                alert(`Empate! \n Tu escogiste ${opciones[usuario]} y el CPU: ${opciones[cpu]}`)
            }
        }



    }
    roundActual++
}