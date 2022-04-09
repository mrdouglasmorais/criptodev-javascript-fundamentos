const students = [
  {
    name: 'João Paulo',
    age: 31,
    occupation: 'Motorista',
    gender: 'Male'
  },
  {
    name: 'Guilherme Boaventura',
    age: 18,
    occupation: 'Estudante',
    gender: 'Male'
  },
  {
    name: 'Lorrana',
    age: 26,
    occupation: 'Estudante',
    gender: 'Female'
  }
]

let mapearEstudantes = students.map( item => console.log('map', {
  nome: item.name,
  idade: item.age,
  ocupacao: item.occupation
}))
mapearEstudantes
// o MAP percorre o array acessando as informações por níveis de indice

let filtrandoEstudantes = students.filter( item => item.gender !== 'Female')
console.log('filter', filtrandoEstudantes)
// o FILTER serve para trazer resultados e elementos especificos para

let buscandoAlunos = students.find( item => item.age === 'João Paulo')
console.log('find', buscandoAlunos)
//  busca elemntos com parametros