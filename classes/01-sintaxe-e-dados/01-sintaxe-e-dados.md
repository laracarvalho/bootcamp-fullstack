# Variáveis
Hoje temos algumas maneiras diferentes de declarar variáveis.

```js
var _var = 1;
let _let = 1;
const _const = 1;
```

> `var` era usada para qualquer contexto até 2015 quando recebemos a adição de `const` e `let`.

> `const` define uma constante, então sua referência nunca pode ter seu valor alterado. _Não_ significa que seu valor não pode mudar, mas sim que não pode ser redeclarado.

> `let` declara uma variável local de escopo do bloco. Podemos inicializá-la com um valor ou fazer isso posteriormente.

## Tipagem

O mais recente padrão ECMAScript define sete tipos de dados:

Seis tipos de dados são os chamados [primitivos](https://developer.mozilla.org/pt-BR/docs/Glossary/Primitive):
-   [Boolean](https://developer.mozilla.org/pt-BR/docs/Glossary/Boolean). `true` e `false`.
-   [null](https://developer.mozilla.org/pt-BR/docs/Glossary/Null). Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, `null` não é o mesmo que `Null`, `NULL`, ou ainda outra variação.
-   [undefined](https://developer.mozilla.org/pt-BR/docs/Glossary/undefined). Uma propriedade superior cujo valor é indefinido.
-   [Number](https://developer.mozilla.org/pt-BR/docs/Glossary/Number). `42` ou `3.14159`.
-   [String](https://developer.mozilla.org/pt-BR/docs/Glossary/String). "Howdy"
-   [Symbol](https://developer.mozilla.org/pt-BR/docs/Glossary/Symbol) (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.

> _Trecho tirado de [Mozilla Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)_

Por último, temos o tipo [Object](https://developer.mozilla.org/pt-BR/docs/Glossary/Object). Em Javascript, qualquer valor que não é um tipo primitivo (na lista anterior), é um Objeto.

## Tipos de Dados

```js
const number = 1;
const string = 'String';
const object = {};
const boolean = true || false;
const array = [];
const _undefined = undefined;
const _null = null;
const empty = '';
const date = new Date();
const _class = Date;
const _function = function() { console.log(true) };
const a = _function;
```

### Iterações

**For Loop**

```js
const cars = ["BMW", "Volvo", "Mini"];

for (let i = 0; i <= 2; i++) {
  text += cars[i] + "<br>";
}
```

**For In Loop**

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};

var text = "";
for (let chave in person) {
  text += person[chave];
}
```

**For Of Loop**

```js
var text = "";

for (let valor of cars) {
  text += valor;
}
```

**While Loop**

```js
var text = "";
let i = 0;

while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

### Operadores

**Operadores Relacionais**

```js
const isGreaterThan = 1 > 0;
const isSmallerThan = 0 < 0;
const isGreatherOrEqualThan = 3 >= 3;
const isSmallerOrEqualThan = 2 <= 3;
const isTypeofString = typeof 1 === 'number';
const isInstanceOf = new Date() instanceof Date;
const isInIndex = 0 in cars;
const isInObject = 'age' in person;
```

**Operadores de Igualdade**

```js
const isEqualityTrue = '1' == 1;
const isStrictEqualityFalse = '1' === 1;
const isStrictInequalityTrue = '1' !== 3;
const isStrictInequalityFalse = '1' != 1;
```

**Operadores Binários/Lógicos**

```js
const isEverythingTrue = _null && 'String';
const isSomethingTrue = false || true;
const ternary = true ? 'First' : 'Second';
```

### Controle de Fluxo (Condicionais)

**If**

```js
const isTrue = true;
if (isTrue) {
  console.log
}
```

**If/Else**

```js
if (isTrue) {
  console.log
} else {
	console.error
}
```

**Else If**

```js
const isFalsy = false;

if (isFalsy) {
  console.log();
} else if (isFalsy) {
  console.warn();
} else {
  console.error();
}
```

**Switch**

```js
var dayDescription = '';
var dayNumber = new Date().getDay();

switch (dayNumber) {
  case 0:
    dayDescription = "Sunday";
    break;
  case 1:
    dayDescription = "Monday";
    break;
  case 2:
    dayDescription = "Tuesday";
    break;
  case 3:
    dayDescription = "Wednesday";
    break;
  case 4:
    dayDescription = "Thursday";
    break;
  case 5:
    dayDescription = "Friday";
    break;
  case 6:
    dayDescription = "Saturday";
    break;
  default:
    dayDescription = "Not found";
}
```


### Arrays
Arrays são um tipo de Objeto para JS. Podemos inicializá-los da seguinte forma:

```js
const array = [1, 2, 3];
const array = Array.of(1, 2, 3);
```

A primeira forma utiliza de literais (onde _literalmente_ adicionamos os valores ao código) e a segunda inicializamos a partir da função core que o JS nos dá.

Também podemos criar Arrays multi-direcionais.

```js
const matrix = [  
	[1, 2, 3],  
	[4, 5, 6],  
	[7, 8, 9]  
];

matrix[0][0]; //1  
matrix[1][1]; //5
```

É assim que acessamos um elemento dentro de um array por sua posição.

Se quisermos saber o tamanho de um array, podemos fazer da seguinte forma:

```js
const array = [1, 2, 3];
array.length; // 3
```

> Você também pode manipular o tamanho do array ao utilizar `array.length`, mais especificamente ao declarar um valor menor ao valor atual do array:

```js
const array = [1, 2, 3];
array.length = 2;
array // [1, 2]
```

**Adicionando itens:**

Podemos adicionar um item _ao fim_ de um array através do método push().

```js
array.push(4);
array // [1, 2, 3, 4]
```

Podemos adicionar um item _ao início_ de um array através do método unshift().

```js
array.unshift(0);
array // [0, 1, 2, 3, 4]
```


**Removendo itens:**

Podemos remover um item _do fim_ de um array através do método push().

```js
array.pop();
array // [0, 1, 2, 3]
```

Podemos remover um item _do início_ de um array através do método shift().

```js
array.shift();
array // [1, 2, 3]
```

**Encontrando itens dentro de um array:**

Existem algumas formas, já falamos de encontrá-lo pelo seu index (como `array[0]`), mas também podemos utilizar de métodos como o find().

```js 
array.find((element, index, array) => {  
// return true or false  
});
```

Esse método vai nos retornar o primeiro item que retornar como true, e vai retornar undefined se não encontrar nenhum item.

```js  
array.find(x => x < 2); // true, retorna 1
```

Temos o método findIndex(), que funciona parecido, exceto que ele retorna o index do primeiro item que retorna true.

```js 
array.findIndex((element, index, array) => {  
// return true or false  
});
```

Outro método muito útil é o includes().

```js 
array.includes(value);
```

Retorna true se o valor estiver inserido no array.

```js 
array.includes(value, i);
```
  
Returna true se o valor estiver inserido _após a posição i_.


**Concatenando arrays:**

Podemos juntar arrays de duas formas. A primeira é utilizando o método concat(), que cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos.

```js 
const arrayA = [1, 3];
const arrayB = [2, 4];
const joinArrays = arrayA.concat(arrayB);
joinArrays // [1, 3, 2, 4]
```

Outra forma de chegar a esse resultado é utilizando o spead operator (...):

```js 
const joinArrays = [...arrayA, ...arrayB];
joinArrays // [1, 3, 2, 4]
```

**Utilizando o Filter**

Como o próprio nome diz, ele tem o objetivo de filtrar as informações de um array.

A partir de uma condição que apresentamos, ele irá aplicar essa condição em todos os itens de nosso array e aqueles que se enquadrarem na condição serão retornados e adicionados ao novo array de saída.

O filter irá retornar sempre _true_ ou _false_.

```js
const array = [1, 2, 3, 4];
const newArray = array.filter(item => item !== 3);

newArray // [1, 2, 4]
```

**Utilizando o Map**

Funciona como um loop, onde temos a nossa disposição os parâmetros de elemento, índice e função de callback.

```js

const times = [];

const tasks = [
	{
		name: 'Work on Project A',
		time: 600
	},
	{
		name: 'Study',
		time: 300
	}
]

tasks.forEach(task => {`
	times.push(task.time);
});
 
```


**Utilizando o Reduce**

O método reduce() reduz todos os valores de um array em um único resultado, baseando-se na função que informamos para ele.

O primeiro parâmetro representa o resultado final da redução do array. Esse valor é incrementado ao longo do processo do _reduce()_, a cada volta dessa repetição.

O segundo parâmetro envolve o valor de cada índice do array.

```js

const cart = [100, 800, 300, 550];

const totalCart = cart.reduce((total, currentValue) => {

  return total + currentValue;

}, 0);

totalCart // 1750
```
