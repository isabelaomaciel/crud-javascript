const book = [
  {
    nome: "Cronicas de Narnia",
    autor: "C. S. Lewis",
    ano: "1800",
    editora: "Bra",
  },
  {
    nome: "Cronicas de Narnia 2",
    autor: "C. S. Lewis",
    ano: "1800",
    editora: "Bra",
  },
];

const resultado = book.filter((item) => {
   if (item.nome !== "Cronicas de Narnia") {
      return item;
   }
})

console.log(resultado)