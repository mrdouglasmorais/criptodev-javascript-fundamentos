import axios from 'axios'

// Promisse
const delayDeSegundos = (sec) => {
  return new Promise( () => {
    setTimeout(() =>{
      console.log('Delay', sec )
    }, sec)
  } )
}

delayDeSegundos(1500);


// function(){}
// Funcão anonima, não recebe um nome apenas o uso da palavra resevada function.
// Ela tem o início dinâmico.


function calculo(){
  let a = 1
  let b = 5
  return console.log(a + b)
}

calculo();
// Funções com sentença fixa, onde não recebem parâmetros

function calculate(valueA, valueB, valueC){
  let result = (valueA + valueB) - valueC
  return console.log(result)
}

calculate(6, 1, 2);
// funções com setença dinamica onde os parametros ou valor são infromados no ato da invocação da função

() => {
  console.log('Arrow function, anonimo')
}
// arrow function formato anonimo espera um evento para ser disparado

let test = () => console.log('Arrow function')

test();

// Assincronidade
const getApiData = async () => {
  let request = await axios.get('https://gama-next-server.herokuapp.com/courses')

  let result = request.data

  return result
}

getApiData().then( res => {
  console.log(res)
}).catch( e => console.error(e))
.finally( () => console.log('Encerrado'))


function exampleRest(...value){
  let val = value
  let result = val.map( el => console.log('funções com rest', el))
  return result
}

exampleRest();
exampleRest(5);
exampleRest(5, 6, 7);


