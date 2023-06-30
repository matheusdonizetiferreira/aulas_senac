/* function consultaCep(){
    const cep = document.querySelector("#cep");
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

   /* console.log(cep.value)
    console.log(url) */

  /*  fetch(url)
    .then(response => response.json())
    .then(data => exibirResultado(data))
    .catch(error => console.log(error));

} */

async function consultaCep(){
    const cep = document.querySelector("#cep");
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        exibirResultado(data)
    } catch (error) {
        console.log(error);
    }

}

function exibirResultado(data) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ''
    const logradouro = document.querySelector("#logradouro");
    const bairro = document.querySelector("#bairro");
    const complemento = document.querySelector("#complemento");
    const cep = document.querySelector("#cep");


    if(data.erro){
        resultado.textContent = "Cep não encontrado"
    } else {
        const endereco = `
            <p><strong>Logradouro:</strong>${data.logradouro}</p>
        `;
        resultado.innerHTML = endereco;
        logradouro.value = data.logradouro;
        bairro.value = data.bairro;
        complemento.value = data.complemento;

    }


}

function exibirResultado(data){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ''

    if(data.erro){
        resultado.textContent = "Cep não encontrado"
    } else{
        const endereco = `
        <p><strong>Cep:</strong>${data.cep}</p>
        <p><strong>Logradouro:</strong>${data.logradouro}</p>
        <p><strong>Bairro:</strong>${data.bairro}</p>
        <p><strong>Complemento:</strong>${data.complemento}</p>
        <p><strong>Localidade:</strong>${data.localidade}</p>
        <p><strong>Uf:</strong>${data.uf}</p>
        <p><strong>ddd:</strong>${data.ddd}</p>
        <p><strong>Ibge:</strong>${data.ibge}</p>
        `;
        resultado.innerHTML = endereco;

    }
}