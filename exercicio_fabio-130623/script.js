var a = prompt("Valor do primeiro termo:")
var op1 = prompt("digite a op1")
var b = prompt("valor do segundo termo:")
var op2 = prompt("digite a op2")
var c = prompt("Valor do terceiro termo:")

var na = parceInt(a)
var nb = parceInt(b)
var nc = parceInt(c)

if (op2 == "-") {
    var delta = (nb * nb) - 4 * na * c;
}
else {
    delta = (nb * nb) - 4 * na * nc
}
var x1
var x2
if (delta < 0) {
    console.log("Não existem raízes reais para a equação")
}
else {
    if (op1 == "-") {
        x1 = (-(nb * -1) + Math.sqrt(delta)) / 2 * na;
        x2 = (-(nb * -1) + Math.sqrt(delta)) / 2 * na;
        console.log("raíz 1:" + x1 + " raíz 2:"+ x2);
    } else 
        x1 = (-(nb) + Math.sqrt(delta)) / 2 * na;
        x2 = (-(nb) + Math.sqrt(delta)) / 2 * na;
}
