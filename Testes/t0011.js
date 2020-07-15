console.log('Testando map, filter e reduce em javascript')

const data = [
    {
        nome: 'Butters',
        idade: 3,
        type: 'dog'
    },
    {
        nome: 'Lizzy',
        idade: 6,
        type: 'dog'
    },
    {
        nome: 'Red',
        idade: 1,
        type: 'cat'
    },
    {
        nome: 'Joey',
        idade: 3,
        type: 'dog'
    },
    ];
    

let dogs = data.filter(
    (animal, i) => {
        return animal.type === 'dog'
    }
)

dogs.map(
    (dog, i) => {
        return dog.idade = dog.idade*7;
    }
)

const soma = dogs.reduce(
    (soma_parcial, dog, i) => {
        return soma_parcial + dog.idade;
    }, 0
)

console.log(data);
console.log(dogs);
console.log(soma);
