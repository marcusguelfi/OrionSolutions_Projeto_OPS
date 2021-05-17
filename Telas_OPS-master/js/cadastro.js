var address = document.querySelector("#address");
var state = document.querySelector("#state");
var city = document.querySelector("#city");
var neighborhood =  document.querySelector("#neighborhood");


function searchZip(value){
    var zip = "https://viacep.com.br/ws/"+value+"/json"
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(zip,options)
    .then((response => {response.json()
        .then(data => {
            address.value = data.logradouro;
            state.value = data.uf;
            city.value = data.localidade;
            neighborhood.value = data.bairro
        })}))   
    .catch(error => {console.log('Deu erro: ' + e)});

}
