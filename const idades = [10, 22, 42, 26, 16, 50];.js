const idades = [10, 22, 42, 26, 16, 50];

const podeDirigir = idades.filter((idade) => {
   return idade >= 18
})

console.log(podeDirigir)