let area = 20000;

let calcularLado = () =>{

    let i
    for( i = 0; i * i < area; i++ ){
        i * i;
    }

    return i-1
}

let ancho = calcularLado()
let altura = calcularLado()
area2.value = 20000
area1.value  = calcularLado() * calcularLado()
dimensiones.value = calcularLado()
raiz.value = calcularLado()

let iniciar = () => {
    borrar()
    dibujar()

    borrarRegla()
    dibujarRegla()
}

let borrar = () => {
    puntos = []
    let cuenta = calcularLado() * calcularLado()
    for (let i = 1; i <= cuenta; i++) {
        if (i % 10 === 0 && i < calcularLado()){
            puntos.push('🟨')
        }else {
            puntos.push('🟦')
        }
    }
}

let dibujar = () => {
    let cuadrado = ''
    for (let i = 0; i < puntos.length; i++) {
        if (i % ancho === 0 && i !== 0) {
            cuadrado += '\n'
        }
        cuadrado += puntos[i]
    }
    plano.innerText = cuadrado
}

let borrarRegla = () => {
    puntosRegla = []
    let cuentaRegla = calcularLado()
    for (let i = 0; i < cuentaRegla; i++) {
            puntosRegla.push('🟨')
    }
}
let dibujarRegla = () => {
    let regla = ''
    for (let i = 0; i < puntosRegla.length; i++) {
        if (i % ancho === 0 && i !== 0) {
            regla += '\n'
        }
        regla += puntosRegla[i]
    }
    rule.innerText = regla
}