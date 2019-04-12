function calcularCirculo(){
    let Raio
    Raio = parseFloat(frmRaio.valorRaio.value.replace(",","."))
    Circuferencia = 2 * Math.PI * Raio
    frmRaio.valorResultado.value = Circuferencia
}