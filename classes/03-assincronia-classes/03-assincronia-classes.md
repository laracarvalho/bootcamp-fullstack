# Classes e Assincronia

## Classes

A fazer.

## Assincronia

O que é assincronia?

Imagine que tenho uma aplicação que precisa validar o e-mail e a senha de um usuário. Primeiro eu checo se o e-mail existe no meu repositório e depois eu checo se a senha dele bate com a minha hash guardada.

Eu poderia escrever esse código da seguinte maneira:

```js
const getUser = function(email, password, callback) {
	db.verifyEmail(email, error) => {
		if (error) {
			callback(error);
		} else {
			db.verifyPass(password, error) => {
 				if (error) {
					callback(error);
				} else {
					logUser();
				}
			});
		}
 	}
}
```

Esse não é um código nem um pouco amigável de se trabalhar. Utilizando essa sintaxe, temos o que chamamos de _callback hell_.

## Promises
É aí que entram as promises. Usando a palavra `async` antes de uma função significa que essa mesma função nos retorna uma _promise_ que pode resolvida automaticamente.

```js
async function myPromise() {
  return 1;
}

myPromise().then(console.log);
```

O que a minha função acima faz é retornar o valor dentro de um `console.log()`.

A forma explícita de fazer a mesma coisa é:

```js
async function myPromise() {
  return Promise.resolve(1);
}

myPromise().then(console.log);
```

Outra maneira de pensarmos em promises é, como o nome já diz, são promesas. Às vezes elas são cumpridas, às vezes são quebradas.

```js

const isAvailable = true;

const getPresents = (isAvailable) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAvailable) {
        resolve("I got the presents!");
      } else {
        reject(new Error("I'm sorry!"));
      }
    }, 2000);
  });
};

getPresents(isAvailable).then(result => {
	console.log(result);
}).catch(err => console.log(err));
```

O código acima indica uma promessa: Vou conseguir presentes! Mas apenas se estiverem disponíveis: caso contrário, minha promessa é rejeitada e temos um resultado triste.

> É considerado boa prática retornar um Error() quando nossa promise é rejeitada.


**Utilizando then/catch para retornar promises:**

```js
async function getUser() {
	const githubResponse = fetch(`https://api.github.com/users/laracarvalho`).then(githubResponse => {
  		githubResponse.json().then(user => {
			console.log(user);
		});
	});
}

getUser();
```

Ainda assim temos uma cadência grande de código repetitivo e difícil de navegar. Isso sem nem adicionarmos os catch(error)!

```js
async function getUserThen() {
	const githubResponse = fetch(`https://api.github.com/users/laracarvalho`).then(githubResponse => {
 		githubResponse.json().then(user => {
			console.log(user);
		}).catch((error) => {
			console.log(error);
  		});
	}).catch((error) => {
		console.log(error);
  });
}

getUserThen();
```


### Async/Await 
O próximo passo é ainda mais simples e conciso do que antes! Com `async/await` podemos retornar nossas promises sem o uso de then/catch muito menos caindo no callback hell:

```js
async function displayUser(email, password) {
	const user = await fetch(myUrl, email);
	
	if (!user) {
		return 'Usuário não existe';
	}
	
	const password = await verifyPass(password, user.password);
	
	if (!password) {
		return 'Senha errada';
	}
	
	return user;
}
```

Exemplo Github:

```js
async function getUserAwait() {
	const githubReponse = await fetch(`https://api.github.com/users/laracarvalho`);
  
  const githubUser = await githubReponse.json();
	
  console.log(githubUser);
}

getUserAwait();
```

Conseguimos reduzir nosso código consideravelmente, também conseguimos entender melhor o que acontece em cada etapa do nosso código.

> Lembrando que a keyword await só pode ser utilizada dentro de funções assíncronas, ou seja, com a keyword async.