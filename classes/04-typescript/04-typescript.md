# Typescript: um compilador Javascript

Referências para estudo:
- https://www.typescriptlang.org/docs/
- https://learning-notes.mistermicheels.com/javascript/typescript/compiler-api
- https://basarat.gitbook.io/typescript/

Javascript é uma linguagem peculiar, que começou como uma linguagem de scripting e cresceu para se tornar uma ferramenta completa para trabalhar em diversos tipos de projetos (navegador, servidor, mobile, desktop, etc).

Javascript, assim como muitas linguagens, tem seus momentos estranhos. Por exemplo, temos casos em que esse código é perfeitamente aceitável por JS:

```js
if ("" == 0) { 
// Está correto!
}
```

> Existe uma razão para o código acima. Ele está considerando que como nossa string tem index 0, então JS _coerce_ nosso valor a se transformar em número, para que nossa comparação seja válida. Mas isso pode trazer bugs para nossa aplicação.

Esse comportamento é explorado pela [Tabela de Comparação](https://dorey.github.io/JavaScript-Equality-Table/).

Como evitar esse problema? Utilizando o operador `===` em vez de `==`.

## Objetivos do Typescript

-   Desenvolver um sistema de tipagem forte para Javascript.
-   Promover certas features futuras do JS para as engines atuais (parecido com Babel).
-   Desenvolver um compilador para a linguagem, evitando certos erros causados por comportamentos implícitos e indesejados da linguagem.

Como Typescript nos incentiva a escrever um código de forma responsável e explícita?

```js
let helloWorld = 123;
```

Será que helloWorld deveria ser um Number?

```ts
let helloWorld: string = "Hello world";
```

Não é obrigatório declarar todos os tipos em nossas variáveis, mas é boa prática definir o que você está pedindo dentro de uma lista de argumentos, ao definir uma interface ou classe.

```ts
interface User {
	name: string; 
	id: number;
}

const user: User = {
	name: "Lara",
	id: 1
};
```

No código acima, é claro o meu objeto user está pedindo para suas propriedades. Ao criar uma interface e definir os dados obrigatórios e seus tipos, a criação do objeto se tornará ainda mais clara.

## Como iniciar um projeto Typescript
Passo a passo rápido.

Passo a passo rápido.

- Inicie um projeto Node.js com package.json. (`npm init -y`);
- Instale TypeScript globalmente (`npm install typescript -g`);
- Instale TypeScript como dependência de desenvolvimento (`npm install typescript --save-dev`);
- Adicione o arquivo de tipagem para node node.d.ts (`npm install @types/node --save-dev`)
- Crie um arquivo tsconfig.json para configurações do TypeScript (`tsc --init`):
	- rootDir: `/src`
	- outDir: `/build`
	- module: `commonjs`
	- target: `es6`
	- typeRoots: `["./src/@types", "./node_modules/@types"]`
	- allowJs: `true` (se não souber se todas as libs tem suporte para TS)
	- moduleResolution: `node`
- Instale `ts-node` globalmente (`npm install ts-node -g`);
- Instale `ts-node` para podermos compilar rapidamente TS para Node (`npm install ts-node --save-dev`);
- Instale `nodemon` para podermos utilizar `ts-node` todas as vezes que qualquer arquivo mudar (`npm install nodemon --save-dev`);
- Adicionando um script para garantir o funcionamento rápido:
	- dev: `"nodemon exec --transpile-only --files ./src/{server}.ts --ignore ./tests`
		- Não esqueça de trocar {server} por seu arquivo principal;

## Sintaxes e Dados

### Variáveis e tipagem
```ts
let num: number = 10;
let num = 10; // typeof number

let isFalsy: boolean = false;
let name: string = 'Typescript';
```

> Não é necessário mostrar o tipo explícito quando se está implícito. TS/JS sabe que 10 é um number, então não precisamos reinterar.

Em casos de funções, é necessário declarar explicitamente que tipo de dados estamos pedindo. 

```ts
function greeter1(receiver: string) {
  return "Hello, " + receiver + ".";
}

greeter1('world'); // 'Hello world.'
```

Na função acima, precisamos de uma string para nosso parâmetro `receiver`. Se tentarmos rodar com qualquer outro tipo de dados, teremos erros.

**Arrays**

Em caso de Arrays, podemos receber vários tipos de dados dentro deles, desde que seguidos por `type[]`.

```ts
const boolArray: boolean[] = [true, false, true];
const strArray: string[] = ['Start', 'Middle', 'End'];
const numArray: number[] = [1, 2, 3];
```

Agora, existem momentos em que _não_ saberemos que tipo de dados vamos receber. Nossa função pode ser genérica. Para isso, temos o tipo especial `any`.

```ts
function greeter1(receiver: any) {
  return "Hello, " + receiver + ".";
}

greeter1(32); // 'Hello 32.'
```

Graças ao type coersion do JS, ele transformou meu number em integer. Isso é padrão em JS.

> O `any` deve ser usado em última instância e com muito cuidado.
 
Existem maneiras melhores de tratar casos em que podemos receber mais de um tipo.

**Tipos customizáveis:**

> Union Types: separados por `|`, podemos criar um novo tipo que recebe várias tipagens diferentes. Esses tipos podem ser criados por nós ou os tipos que a própria linguagem nos dá.

```ts
type AllowedTypes = string|string[];
```

Vamos ver um exemplo em ação:
```ts
function analyzer(receiver: AllowedTypes) {
  return "Hello, " + receiver + " friend.";
}

let speaker = 'human';

console.log(analyzer(speaker)); // 
```

No exemplo acima, nós criamos uma função que recebe uma combinação de tipos mesclados num tipo totalmente novo. Outra forma de escrever tal função é a seguinte:

```ts
function analyzer(receiver: string|string[]) {
  return "Hello, " + receiver + " friend.";
}
```

Eu poderia receber então uma string ou uma _array_ de strings.

Além disso, no exemplo acima, eu recebi outro tipo específico, que é o _Type Alias_.

> Ao transformar meu union types `string|string[]` em um novo tipo `type AllowedTypes`, eu criei um Type Alias.


> Funções que não retornam nenhum dado precisam finalizar com `:void`

```ts
function mail(message: any): void {
  console.log(message);
}
```

**Enums**
Vamos finalizar com um tipo especial de dados: enums. Typescript nos permite criar esse tipo de dados para organizar uma coleção de dados relacionados.

```ts
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}
```


## Interfaces

Interfaces trazem uma forma poderosa de declarar tipos complexos de dados, além dos que já vimos.

No exemplo abaixo, temos um Enum de NatureTypes definindo alguns tipos de entidades. Depois, uma interface definindo o que _é_ uma Entidade para nosso pequeno programa.

Depois, é possível combinar tais estruturas para que nossos objetos se tornem ainda mais interessantes:

```ts
enum NatureTypes {
	Human = 'human',
	Robot = 'robot',
	Animal = 'animal'
}

interface Entity {
	natureType: NatureTypes;
	name: string;
	code?: number;
	birthdate?: number;
}

const person: Entity = {
	natureType: NatureTypes.Human,
	name: 'Lara',
	birthdate: 14081997
}

const android: Entity = {
	natureType: NatureTypes.Robot,
	name: 'JSBot',
	code: 1111
}

function analyzer2(receiver: Entity): string {
	return `Hello, ${receiver.name}. You are ${receiver.natureType}.`;
}

console.log(analyzer2(person));
```

> Nossa função `analyzer2` aceita tanto nosso objeto android quanto person, pois ambos são do tipo Entidade.

Uma boa prática é criar nossas interfaces com um I na frente.

```ts
interface IEntity {
 natureType: NatureTypes;
 name: string;
 code?: number;
 birthdate?: number;
}

const person: IEntity = {
	natureType: NatureTypes.Human,
	name: 'Lara',
	birthdate: 14081997
}

```

Interfaces também podem ser extendidas posteriormente. Isso é útil se quisermos criar um pacote a ser compartilhado com outros programadores e nossa interface for um ponto de desenvolvimento.

```ts
// Lib a.d.ts
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;

// Lib b.d.ts
interface Point {
    z: number;
}

var myPoint.z; // Perfeitamente válido!
```

Classes também podem implementar interfaces. Elas terão a mesma estrutura geral de uma entidade:

```ts
class Animal implements IEntity {
	natureType: NatureTypes;
	name: string;
	code?: number;
	birthdate?: number;
}
```

No contexto do nosso exemplo, podemos ver que faz muito mais sentido criar uma IEntity mais enxuta _(Animais não tem códigos de fábrica!)_, e criar objetos mais "concretos" (objeto Cavalo a partir de uma classe) do que fazer dessa forma.

> O ponto importante a se lembrar aqui é que por estarmos implementando nossa IEntity, precisamos trazer todos os dados obrigatórios dela. Em caso de code e birthdate, poderíamos ignorar.

**Parâmetros padrão e opcionais:**

Em nossas funções, podemos definir argumentos que são aceitos por padrão - caso não sejam passados outros valores, aquele valor padrão será utilizado.

Também podemos passar argumentos opcionais: se eles não estiverem presente, não atrapalharão nosso fluxo.

```ts
function analyzer3(receiver: Entity = person, test?: string): string {
  console.log(test);
  return `Hello, ${receiver.name}. You are ${receiver.natureType}.`;
}

console.log(analyzer3());
```

## Genérics

Podemos passar um tipo de uma interface através de um Generics, que automaticamente passa o tipo de volta para nossa variável. Isso transforma nossa função ou objeto em genérico, aceitando qualquer valor que tenha sido declarado.

Vamos ilustrar esse conceito criando nossa _Queue data structure_ (Estrutura de fila):

```ts
class Queue {
  private data = [];
  push(item) { this.data.push(item); }
  pop() { return this.data.shift(); }
}
```

Uma implementação bem simples se assegurando de que o item que entra primeiro deve sair primeiro.

Agora, eu posso colocar qualquer tipo de dado aí dentro. O que acontece se minha fila fosse de strings, mas também aceitasse numbers?

```ts
const queue = new Queue();
queue.push(0);
queue.push("1");

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
```

Temos um erro bem feio. Como consertar isso? Criando um tipo de Queue para cada tipo de dados?

```ts
class Queue<T> {
  private data = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

const queue = new Queue<number>();
queue.push(0);
queue.push("1");
```

Agora nosso terminal irá nos informar que strings não são aceitas em nossa fila. Ótimo! Nada de fazer deploy em produção e descobrir isso horas depois.

Como funciona?

O `<T>` ao lado da classe indica que é um tipo genérico. Irá aceitar qualquer tipo em sua declaração, e depois se certificará que todos os outros pontos do código em que ele apareça novamente, deverá ser o _mesmo_ tipo.

Então se declaramos como `Queue<number>`, o dado que entra em `push(item: T)` precisa ser o mesmo. Há uma substituição implícita para `push(item: number)` e o TS irá reclamar se encontrar outra coisa no lugar.