// inserindo dados
// objeto JSON chave:valor
localStorage.setItem("name", "Matheus");

//resgatar item/dado
const name = localStorage.getItem("name");

console.log(name);

//resgatar item que não existe 
const lastName = localStorage.getItem("lastName");
console.log(lastName);

if(!lastName){
    console.log("Sem sobrenome");
}

// remover item/dado
localStorage.removeItem("name");

// Limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

console.log(typeof localStorage.getItem("a"));


// salvar objeto
const person ={
    name:"Thiago",
    age: 36,
    job: "Programer"
}

localStorage.setItem("person", person);
// conversão objeto json
localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");
console.log(getPerson);
console.log(getPerson.name);

const personObj = JSON.parse(getPerson);
console.log(typeof personObj);
console.log(personObj.job);

localStorage.clear();