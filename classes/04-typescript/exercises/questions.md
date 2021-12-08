# Exercícios

## Typescript

1. Dado as variáveis abaixo, informe a tipagem de cada um para que o código fique correto.

```js
const sequence = Array.from(Array(10).keys());
const animals = ['passaro', 'gato', 'cachorro', 'coelho'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
```

2. Crie uma Interface Book para que a função abaixo funcione corretamente. Adicione o parâmetro opcional "author".

```js
function addToLibrary(item: Book) {
    const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
    console.log(response);
}

console.log(addToLibrary(book));
```

3. Crie uma Função que adicione dinheiro a uma conta de banco. A função deverá receber dois argumentos: o argumento obrigatório money e o argumento opcional message. Caso message esteja presente, mostre uma mensagem avisando que o dinheiro foi adicionado à conta.

4. Modifique a função baixo para que ela possa receber vários tipos de dados utilizando seu conhecimento de Generics.

```js
function passValue(value: Number): Number {
    return value;
}

console.log(passValue());
```

## Assincronia

1. Utilizando fetch(), faça uma requisição a URL abaixo usando async/await para buscar o valor que quiser.

Sugestões/dicas:

- Só podemos usar await dentro de uma função async;
- Tente pesquisar por uma comida tipo `pizza` ou `burger`;
- Não se esqueça de retornar em formato json.

```js
const url = 'https://foodish-api.herokuapp.com/images';
```

2. Crie uma promise que deverá _falhar_, mostrando uma mensagem de erro do reject() a partir do código base abaixo:

```js
const getUser = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param) {
        resolve("Promise funcionou");
      } else {
        reject();
      }
    }, 2000);
  });
};
```
