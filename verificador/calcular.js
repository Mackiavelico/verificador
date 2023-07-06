/*
Revertir el orden de los dígitos del RUT.
Asignar un multiplicador que comienza en 2.
Sumar cada dígito del RUT multiplicado por el multiplicador correspondiente, de derecha a izquierda.
Incrementar el multiplicador en 1 para cada dígito.
Si el multiplicador alcanza el valor 8, se reinicia en 2. (aqui se debe reemplazar es 8 por un 2)
Calcular el resto de la división de la suma obtenida por 11.
Restar el resto a 11 para obtener el valor del dígito verificador.
Si el resultado es 11, el dígito verificador es 0. Si es 10, el dígito verificador es "K". En caso contrario, el dígito verificador es el resultado obtenido.
*/

function calcularDigitoVerificador() {
    var rut = document.getElementById("rut").value;

    rut = rut.split("").reverse().join(""); // Revertir el orden del RUT

    // asignación de valores a las variables para el for
    var multiplicador = 2;
    var suma = 0;

    for (var i = 0; i < rut.length; i++) {
        suma += parseInt(rut.charAt(i)) * multiplicador;  //se parsea para que sea un int y no  un string. Con charAt() se obtiene la pos.
        multiplicador++;  // el multiplicador se incrementa en 1

        // por algoritmo cuando llega el multiplicador a 8 se reemplaza e inicia en 2
        if (multiplicador > 7) {
            multiplicador = 2;
        }
    }

    // se obtiene el resto de la división
    var digitoVerificador = 11 - (suma % 11);


    if (digitoVerificador === 11) {
        digitoVerificador = 0;
    } else if (digitoVerificador === 10) {
        digitoVerificador = "K";
    }

    rut = rut.split("").reverse().join(""); // Revertir el orden del RUT

    //se retorna el resultado al html
    //document.getElemetById establece la asociacion con el id del html
    // el .textContent guarda el resultado y concatena un texto
    document.getElementById("resultado").textContent = "El dígito verificador del RUT " + rut + " es: " + digitoVerificador;
}
