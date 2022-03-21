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

