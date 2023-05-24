const usersInput = parseFloat(prompt(`Hello! Please, enter a number between one and twenty to start the calculation.`));
let table = "";

/*  PARA (inicializacao; condicao; finalizacao) {
  FAÇA alguma coisa...
} */
for(let index = 0; index <= 20; index++) {
  let results = usersInput * index;
  table += `${usersInput} x ${index} = ${results} \n`; // table += é uma forma abreviada de escrever table = table +. Isso significa que estamos acrescentando os valores à variável table em vez de substituí-la completamente a cada iteração do loop. Isso é necessário para manter todos os resultados da tabuada.
}

alert(`${table}`);