/* Pets - Array de objetos de pets
   id Number
   nome String
   idade Number
   vacinado Boolean
   vacinas [bezetasil, dengue]
   genero String
*/

var pets = [
  {
    id: 1,
    nome: "Toto da Silva",
    idade: 13,
    vacinado: true,
    vacinas: ["bezetasil"],
    genero: "M",
  },
  {
    id: 2,
    nome: "Luna Pereira",
    idade: 5,
    vacinado: true,
    vacinas: ["bezetasil", "dengue"],
    genero: "F",
  },
  {
    id: 3,
    nome: "Rex Santos",
    idade: 8,
    vacinado: false,
    vacinas: [],
    genero: "M",
  },
  {
    id: 4,
    nome: "Mia Oliveira",
    idade: 2,
    vacinado: true,
    vacinas: ["bezetasil"],
    genero: "F",
  },
  {
    id: 5,
    nome: "Bob Costa",
    idade: 10,
    vacinado: true,
    vacinas: ["bezetasil", "dengue"],
    genero: "M",
  },
  {
    id: 6,
    nome: "Nina Almeida",
    idade: 4,
    vacinado: false,
    vacinas: [],
    genero: "F",
  },
  {
    id: 7,
    nome: "Max Rodrigues",
    idade: 7,
    vacinado: true,
    vacinas: ["bezetasil"],
    genero: "M",
  },
  {
    id: 8,
    nome: "Bella Ferreira",
    idade: 3,
    vacinado: true,
    vacinas: ["dengue"],
    genero: "F",
  },
  {
    id: 9,
    nome: "Thor Martins",
    idade: 6,
    vacinado: false,
    vacinas: [],
    genero: "M",
  },
  {
    id: 10,
    nome: "Lola Souza",
    idade: 1,
    vacinado: true,
    vacinas: ["bezetasil", "dengue"],
    genero: "F",
  },
];

/*
Exemplos de variacoe do FIND

pets.find(function buscarItem(pet) {
  return pet.id === 5;
});

pets.find((pet) => {
  return pet.id === 5;
});

*/

/*
Exemplos iniciais 
var nomes = ["douglas", "henrique", "lucas"];
var salarios = [1900.34, 1800.34, 900, 890];
const pessoa = ["douglas", 27, true];
var alunos = [{ id: 1, nome: "Douglas", idade: 27, genero: "M" }];


var pastas = [
  {
    nome: "pasta 1",
    sub: [
      {
        nome: "pasta dentro da pasta 1",
        sub: [
          {
            nome: "pasta dentro da pasta 1",
            sub: [{ nome: "pasta dentro da pasta 1", sub: [] }],
          },
        ],
      },
    ],
  },
];
*/

document.getElementById("form_pesquisa").addEventListener("submit", (event) => {
  event.preventDefault();

  const codigoDigitado = Number(document.getElementById("codigo").value);
  const petEncontrado = pets.find((pet) => pet.id === codigoDigitado);
  console.log(petEncontrado);

  if (petEncontrado) {
    document.getElementById("nome").innerText = `Nome: ${petEncontrado.nome}`;
  } else {
    alert("Pet nao foi encontrado com codigo digitado");
    document.getElementById("nome").innerText = `Pet nao encontrado`;
  }
});
