class Livros {
  books = [];

  create(book) {
    if (book.id === undefined) {
      console.log("É necessario um id para criar um livro");
       return;
     } 
     const duplicated = this.getUnique(book.id);
     if (duplicated) {
        console.log('Já temos este livro aqui');
        return;
     }
    this.books.push(book);
     console.log('Livro criado com sucesso');
  }

  read() {
    console.log(this.books);
  }

  getUnique(id) {
    const retornarLivro = this.books.find((item) => {
      return item.id === id;
    });
    return retornarLivro ? true : false;
  }

  update() {}

  delete(bookId) {
    const livrosAtualizados = this.books.filter((item) => {
      return item.id !== bookId;
    });
    this.books = livrosAtualizados;
  }
}

const cronicas = new Livros();

cronicas.create({
  id: 1,
  nome: "Cronicas de Narnia",
  autor: "C. S. Lewis",
  ano: "1800",
  editora: "Bra",
});

cronicas.create({
  id: 1,
  nome: "Cronicas de Narnia 2",
  autor: "C. S. Lewis",
  ano: "1800",
  editora: "Bra",
});

cronicas.create({
  id: 3,
  nome: "Cronicas de Narnia 3",
  autor: "C. S. Lewis",
  ano: "1900",
  editora: "Bra",
}); 

cronicas.create({
   id: 4,
  nome: "Cronicas de Narnia 4",
  autor: "C. S. Lewis",
  ano: "1850",
  editora: "Bra",
});

/* cronicas.delete(2);
cronicas.read(); */
