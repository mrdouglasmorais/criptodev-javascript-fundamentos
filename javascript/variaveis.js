const Name = "Douglas Morais"
console.log(Name)
// Const tem escopo de bloco podendo ser ouvida em todo arquivo onde foi declarada
// Os valores de uma constate não podem ser alterados

let age = 22;
console.log(typeof age);

age = '22'
console.log(typeof age)
// A varivel do tipo Let tem um escopo de bloco
// Aceita alteração de valores e tipos

var occupation = "Dev"
console.log(occupation)

occupation = true
console.log(occupation)
// A varivel do tipo var tem um escopo global dentro do projeto.
// Não aconselhado o uso em casos específicos onde é necessário ter mais controle sobre a aplicação.