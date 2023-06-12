 var altura = 20
var peso = 10 
var imc = peso / (altura * altura);
var x = new Date()

document.getElementById("mostrador").innerHTML = x.getDate()+"/"+x.getMonth()+"/"+x.getFullYear()+" - "+x.getHours()+":"+x.getMinutes();

function calc( massa, altura){
   
    return massa / (altura * altura);

}

function getData(){

    let formmassa = document.getElementById("Peso").value;
    let formaltura = document.getElementById("Altura").value;
    while(formaltura == 0){
        alert("Valor invalido para a altura");
        return;
    }    
    let imc = calc(formmassa, formaltura);
    document.getElementById("resultado").innerHTML = imc;
    analise(imc);

}

function analise(imc){
    if(imc < 16.9){
        alert("Atenção! você está muito abaixo do peso");
    } 
    else if(imc <= 18.4){
        alert(" Atenção! você esta abaixo do peso ideal");
    }
    else if(imc <= 24.9){
        alert("Você esta dentro do peso ideal");
    }
    else if(imc <= 29.9){
        alert("Atenção! Você esta acima do peso");
    }
    else if(imc <= 34.9){
        alert("Atenção! Você esta com obesidade grau 1");
    }
    else if(imc <= 34.9){
        alert("Atenção! Você esta com obesidade grau 2");
    }
    else{
        alert("Atenção! Você esta com obesidade grau 3");
    } 

} 

 for(var i = 0; i<=50; i++){
    console.log("o valor  de i é: "+i);
} 

var lista = [];

lista[0] = "Aberta";
lista[1] = "Fechada";
lista[2] = "Aberta";
lista[3] = "Fechada";

for(var j=0; j<=3; j++){
    console.log("convidado de número "+(j+1)+": "+lista[j]);
}

var portas = [];
for(var i=0; i<100; i++){
    portas[i] = false;
}
    for(var j=1; j<=100; j++){
        for(w=0; w<=100; w+=j){
            portas[w] = !portas[w];
        }
    }
    cont = 0;
    for(var z=0; z<100; z++){
        if(portas[z]==true){
            cont = cont + 1;
        }
    }
    console.log(cont);
    
/* `IMC = ${imc.toFixed(2)}` */