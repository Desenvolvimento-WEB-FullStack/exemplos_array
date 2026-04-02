"use strict";

/*
document.getElementById("form_login").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("nome");

  let nome = document.getElementById("nome").value;

  console.log(nome);

  if (!nome) alert("Digite nome");

  // chamada pra api
});

*/

function calcularImposto(salario) {
  const IMPOSTO_BRASIL = 10.5;
  let imposto = 0;

  if (salario <= 1000) {
    imposto = salario * 10;
  } else if (salario > 3000) {
    imposto = salario * 30;
  }

  return imposto;
}

const aluno = {};

aluno.nome = "douglas";
aluno.idade = 10;

const idades = [10, 20, 30];
idades[1] = 1000;

idades.push(12);
