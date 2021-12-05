# Funções, Strings e Objetos

Aula ministrada no dia 02/12/21 para o Bootcamp Fullstack da Etho Soluções.

## Funções
Uma das principais ferramentas que utilizamos como devs é a Função. São uma parte fundamental de qualquer aplicação Javascript.

> Funções são blocos de código que funcionam nesse ambiente contido.

Exemplo de declaração de função:

```js 
function fetchData() {  
	// código aqui
}
```

E então podemos chamá-la para execução assim:

```js 
fetchData();
```

Dentro do escopo da função, podemos passar _parâmetros_, que nada mais são do que dados passados para serem manipulados.

```js
const dataList = [1, 2, 3];

function fetchData(array, id) {  
	if (array.includes(id)) return id;
}

fetchData(dataList, 1);
```

## Arrow Functions

> Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
Trecho retirado do [Mozilla Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```js
const makeSomething = () => {
  console.log();
}

const returnData = () => true;

const returnDataCurly = () => {
	const productsCount = 5;
	const productsSubtotal = 5 * 50;

  return productsSubtotal;
}

const returnDataParameter = parameter => true;

const returnDataParameters = (parameter1, parameter2) => {
	console.log
};
```
Como vimos acima, podemos ignorar o uso de parênteses caso tenhamos apenas um parâmetro sendo passado, mas em caso de mais de um precisamos voltar aos parênteses.


## Strings
Strings nada mais são do que sequências de caracteres. Podemos declará-las com ` '' ` ou ` "" `.

```js
const myString = 'Hello world';
```

Podemos determinar o tamanho de uma string a partir de sua propriedade `length`.

```js
myString.length; // 11
```

No caso específico de uma string vazia, seu valor é retornado 0.

Também podemos ter acesso a cada caractere dentro de uma string:

```js
myString[0] // H
myString[myString.length - 1] // d
```

Podemos concatenar, assim como interpolar, duas ou mais strings como se fosse uma operação matemática com o uso do `+`.

```js
const secondString = "My" + " second " + " string";
secondString // 'My second string'

const newString = secondString + "!";
newString // 'My second string!'
```

Outra maneira de criar e manipular strings é utilizando os template literals, definidos por backticks ` `` `. Passamos variáveis e até mesmo expressões através da sintaxe `${variavel}`.

```js
const name = 'Lara';

const greeting = `Hello, ${name}.`;
greeting // 'Hello, Lara'

const expression = `My calculations are: ${1 + 2 + 3}`;
```

Também podemos dividir/cortar strings a partir de seus índices:

```js
myString.slice(0, 5) // 'Hello'
myString.substring(0, 5) // 'Hello'
```

> Diferenças entre `.slice()` e `.substring()`:

O substring() não considera corretamente índices negativos, independente da ordem. Caso na posição final, nossa string é cortada para "". Quando na posição inicial, ele ignora o comando, voltando o índice para 0 e iniciando a string normalmente.

O slice() funciona melhor com essas opções.

Considere os exemplos abaixo:

```js
console.log('Substring: ', myString.substring(0, -1));
console.log('Slice: ', myString.slice(0, -1));

console.log('Substring: ', myString.substring(0, -2));
console.log('Slice: ', myString.slice(0, -2));

console.log('Substring: ', myString.substring(-1, 13));
console.log('Slice: ', myString.slice(0, -1));
```

Outra fonte de informações sobre `.slice()` e `.substring()`: [Stack Overflow](https://pt.stackoverflow.com/questions/344496/qual-a-diferen%C3%A7a-entre-o-m%C3%A9todo-string-slice-e-o-m%C3%A9todo-string-substring).


Outra forma de cortar dividindo as strings em um _array_ de strings é utilizando o método `split`.

```js
myString.split(' '); // ['Hello', 'world']
```

Outras manipulações úteis:

> Mudar uma string para caixa baixa ou caixa alta:

```js
const simpleString = 'A simple string';

simpleString.toLowerCase(); // 'a simple string'
simpleString.toUpperCase(); // 'A SIMPLE STRING'
```

> Atualizar uma string com novo dado:

```js
const simpleString = 'A simple string';

simpleString.replace('simple', 'mega');
```

> Removendo whitespace (espaço em branco):

```js
const simpleString = ' A simple string ';

simpleString.trim() // 'A simple string'
simpleString.trimStart() // 'A simple string '
simpleString.trimEnd() // ' A simple string'
```

## Objetos

Como dito antes, em Javascript, qualquer valor que não é um tipo primitivo, é um Objeto.

Existem três maneiras de declarar um objeto, mas utilizamos com maior frequência a primeira (Object literal syntax).

```js
const obj = {
	// properties here
};

const obj = new Object();

const obj = Object.create();
```

Podemos construir nosso objeto das seguintes maneiras:

```js
const book = new Object();
book.title = 'Dom Quixote';
book.author = 'Miguel De Cervantes';
book.genre = 'Aventura';


function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

const book = new Book(
	'Dom Quixote',
	'Miguel De Cervantes',
	'Aventura'
);
```

### Propriedades de Objetos
Podemos acessar as propriedades de objetos dessas maneiras:

```js
book.title // 'Dom Quixote'
book['title'] // 'Dom Quixote'
```

Assim como em objetos com muitas propriedades dentro de outras (_nesting_):

```js
const car = {  
	brand: {  
		name: 'Ford'  
	},
	color: 'blue'  
}

car.brand.name // 'Ford'
car['brand']['name'] // 'Ford'
```

E, por último, podemos aproveitar a desestruturação para facilitar ainda mais a separação dessas propriedades:

```js
const { color } = car; // 'blue'
const { brand: { name } } = car;
```

Se não quisermos utilizar alguma propriedade de um objeto, podemos utilizar a keyword delete para removê-la:

```js
delete car.color;

car // Object { brand: { name: 'Ford ' }}
```

### Métodos de Objetos

Dentro de objetos, podemos definir funções a uma propriedade, e chamamos esse tipo de função de métodos.

```js
function Movie(title, genre, duration) {
  this.title = title;
  this.genre = genre;
  this.duration = duration;
  
  this.play = function() {
  	return 'Playing the movie';
  }
  
  this.getMovie = function() {
  	return `${this.title} é um filme de ${this.genre} e tem duração de ${this.duration} minutos.`;
  }
}

const movie = new Movie(
	'Guerra dos Mundos',
	'Ficcção Científica',
	116
);

movie.play(); // Playing the movie
movie.getMovie(); // 'Guerra dos Mundos é um filme de Ficção Científica e tem duração de 116 minutos.
```

**A keyword this:**

> Quando uma função é chamada como um método de um objeto, seu this toma o valor do objeto pertencente ao método chamado.
[Mozilla Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)

```js
const object = {
  prop: 37,
  fun = function() {
    return this.prop;
  }
};

object.fun(); // 37
```

**Alguns métodos que podemos utilizar:**

> Object.create()
Esse método é usado para criar um novo objeto e conectá-lo ao protótipo de um objeto existente.

```js

const car = {  
	brand: {  
		name: 'Ford'  
	},
	color: 'blue'  
}

const fordCar = Object.create(car);
```

> Object.keys()
Retorna um array que contém as chaves do objeto.

```js
book.keys() // ['title', 'author', genre']
```

Podemos manipular os dados de um objeto iterando por suas keys:

```js
const response = Object.keys(book).forEach(key => {
    let value = book[key];

     return `${key}: ${value}`;
});

response
/*
title: 'Guerra dos Mundos'
author: 'H. G. Wells'
genre: 'Ficção Científica'
*/
```

> Object.values()
Já esse método cria uma array que contém os valores de um objeto.

```js
book.values() // ['Guerra dos Mundos', 'H. G. Wells', 'Ficção Científica']
```

> Object.entries()
Agora temos um método que cria um array aninhado dos pares chave/valor de um objeto.

```js
book.entries()
/*
[
 ['title', 'Guerra dos Mundos'],
 ['author', 'H. G. Wells'],
 ['genre', 'Ficção Científica']
]
*/*

```

> Object.assign()
Esse método é usado para copiar valores de um objeto para outro, realizando a ação de fundir os valores (caso sejam diferentes).

```js
const name = {
    firstName: 'Jane',
    lastName: 'Austen'
};

const details = {
    job: 'Writer',
    country: 'England'
};

const writerProfile = Object.assign(name, details);

writerProfile
/*
{
	firstName: 'Jane',
	lastName: 'Austen',
	job: 'Writer',
	country: 'England'
}
*/ 
```

> Object.freeze()

Esse método impede a modificação de propriedades - alteração, adição ou remoção - e valores de um objeto. A partir desse ponto, _não_ é possível voltar atrás.

```js
const user = {
    username: 'laracarvalho',
    password: 'hunter2'
};

const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

newUser // { username: 'laracarvalho', password: 'hunter2' }
```