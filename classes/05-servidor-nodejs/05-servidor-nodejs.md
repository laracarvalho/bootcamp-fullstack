# NodeJS

## HTTP Requests

HTTP (Hyper Text Transfer Protocol) é um dos protocolos _mais famosos_ que utilizamos para transferência de dados através da Internet.

> Uma pequena, porém importante diferença entre o protocolo HTTP e HTTPS é que o segundo é a opção mais segura, que adiciona padrões de encriptação para a transferência de dados.

Uma requisição a um servidor é composta por algumas partes:

A primeira é a URL. É dessa forma que indicamos para nosso servidor de onde e para onde estão indo nossos dados.

A URL `https://github.com/laracarvalho/bootcamp-fullstack` indica que:
- `https://` estou usando o protocolo seguro HTTPS;
- `github.com` estou dentro do domínio do Github, mais especificamente, esse é meu server root.
- `/laracarvalho` estou dentro de uma rota ou pasta dentro desse server root. No caso da estrutura do Github, essa rota indica um usuário
- `bootcamp-fullstack` indica a rota ou pasta dentro da pasta anterior, então ela tem uma relação direta a minha rota anterior. Podemos entender que essa rota pertence a rota anterior.

Juntando todas essas informações eu tenho um código único que me levará a coleção de dados específica que eu quero.

A segunda parte é o método que estamos usando para criar nossa requisição. Temos os seguinte métodos disponíveis:

- GET
- POST
- PUT
- DELETE
- HEAD
- OPTIONS

**GET**

Esse é o método mais comum que veremos. É chamado para retornar uma requisição como resposta, ou seja, toda vez que queremos mostrar alguma informação como um site ou um dado, vamos utilizar o GET.

Acesse `google.com` e receberá uma resposta em HTML do site do Google, que buscamos com GET.

**POST**

Segundo método mais comum. Com esse método podemos pedir para _enviar_ dados para o servidor. Ao responder formulários, fazer um upload de imagem, responder uma mensagem estamos fazendo uma requisição POST.

**PUT**

Esse método cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados. Utilizamos muito essa opção quando queremos ATUALIZAR um recurso, como uma troca de senha no perfil de usuário.

**DELETE**

Como o nome sugere, vamos APAGAR um dado ao utilizar essa requisição. É um método muito utilizado em APIs Rest.

**HEAD**

Esse método solicita os cabeçalhos (headers) retornados de um recurso específico que foi requisitado por um método HTTP GET.

**OPTIONS**

O método OPTIONS nos retorna as opções de requisição permitidas para um determinado recurso.

E, por último, nossas requisições também são feitas de HEADERS.

Temos uma lista enorme de HEADERS, mas os principais são:

**Cookies**
Nos permite acessar e criar cookies no navegador.

**Content-Type**
Nos permite entender que tipo de conteúdo estamos tentando receber.

**Date**
Nos retorna a data de uma requisição.

**Authorization**
Nos retorna as credenciais de um agente.

## Responses
Se podemos fazer requisições, também podemos receber respostas.

Ao receber respostas, vamos receber um código indicando o status dessas respostas>:


### Lista de HTTP Status Codes

**1×× Informativos**  
100 Continue  
101 Switching Protocols  
102 Processing

**2×× Sucesso**  
200 OK  
201 Created  
202 Accepted  
203 Non-authoritative Information  
204 No Content  
205 Reset Content  
206 Partial Content  
207 Multi-Status  
208 Already Reported  
226 IM Used

**3×× Redirecionamento**  
300 Multiple Choices  
301 Moved Permanently  
302 Found  
303 See Other  
304 Not Modified  
305 Use Proxy  
307 Temporary Redirect  
308 Permanent Redirect

**4×× Erro da Parte do Cliente**  
400 Bad Request  
401 Unauthorized  
402 Payment Required  
403 Forbidden  
404 Not Found  
405 Method Not Allowed  
406 Not Acceptable  
407 Proxy Authentication Required  
408 Request Timeout  
409 Conflict  
410 Gone  
411 Length Required  
412 Precondition Failed  
413 Payload Too Large  
414 Request-URI Too Long  
415 Unsupported Media Type  
416 Requested Range Not Satisfiable  
417 Expectation Failed  
418 I'm a teapot  
421 Misdirected Request  
422 Unprocessable Entity  
423 Locked  
424 Failed Dependency  
426 Upgrade Required  
428 Precondition Required  
429 Too Many Requests  
431 Request Header Fields Too Large  
444 Connection Closed Without Response  
451 Unavailable For Legal Reasons  
499 Client Closed Request

**5×× Erro da parte do Servidor**  
500 Internal Server Error  
501 Not Implemented  
502 Bad Gateway  
503 Service Unavailable  
504 Gateway Timeout  
505 HTTP Version Not Supported  
506 Variant Also Negotiates  
507 Insufficient Storage  
508 Loop Detected  
510 Not Extended  
511 Network Authentication Required  
599 Network Connect Timeout Error


Nosso objetivo é sempre tentar retornar código 200 OK.

## Nosso primeiro servidor NodeJS

```js
const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {  
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');  
	res.end('Hello World\n');
});

server.listen(port, () => {  
	console.log(`Server running at http://${hostname}:${port}/`)  
});
```