const mayor = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            alert("el numero mayor es: " + a)
        } else {
            alert("el numero mayor es: " + c)
        }
    } else {
        if (b > c) {
            alert("el numero mayor es: " + b)
        } else {
            alert("el numero mayor es: " + c)
        }

    }
}
const multiple = (a, b) => {
    let resto = a % b
    if (resto === 0) {
        return true
    } else {
        return false;
    }
}
const comission = (a) => {
    if (a <= 150) {
        alert('Usted no recibe comision')
    } else if (a > 150 && a <= 400) {
        alert("Su comision es de " + (a * 10) / 100)
    } else if (a > 400) {
        alert("Su comision es de " + ((a * 9) / 100) + 50)
    }
}
const exercise1 = () => {
    const a = prompt("Dame un numero")
    const b = prompt("Dame un numero")
    const c = prompt("Dame un numero")
    mayor(a, b, c);
}

const exercise2 = () => {
    let multiplos7 = []
    let limite = 1
    let contador = 6
    do {
        contador = contador + 1
        if (multiple(contador, 7)) {
            if (multiple(contador, 2) || multiple(contador, 3) || multiple(contador, 5)) {
                continue;
            } else {
                multiplos7.push(contador)
                limite = limite + 1
            }
        }

    } while (limite < 51)
    console.log(multiplos7)
}
const exercise3 = () => {
    const ventas = prompt("Ingresa tus ventas y calcularemos tu comision")
    comission(ventas)
}
const exercise4 = () => {
    for (i = 0; i < movies.length; i++) {
        if (movies[i].original_language == "en") {
            console.log(movies[i])
        }
    }
}
const exercise5 = () => {
    let numero = prompt("Dame un numero")
    let enteros = []
    let lenght = prompt("Dime la longitud de tu array")
    for (let i = 0; i < lenght; i++) {
        let number = prompt("Dame un numero para agregar al array")
        enteros.push(number)
    }
    let numberindex = enteros.indexOf(numero) + 1
    for (let i = 0; i < numberindex; i++) {
        const removed = enteros.shift()
        enteros.push(removed)
    }
    console.log(enteros)
}


