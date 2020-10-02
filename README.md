# Instruções

## Stack
* NodeJs 14.7.0
* Express
* Sequelize
* Sqlite3

### Como rodar?

```bash
$ git clone https://lucassilva90@bitbucket.org/recrutamento_jya_nodejs/recrutamento-conversor-nodejs-lucas.p.silva90_hotmail.com.git
```

* Acesse a pasta do projeto e rode os comandos:

```bash
$ npm install
```
```bash
$ npm start
```
* Utilize algum programa para requisições como [postman](https://www.postman.com/) ou [insomnia](https://insomnia.rest/download/)

### Endpoints

#### Criando um usuario:

* Realize uma requisição POST com um json no body contendo os campos name e email.
* url = localhost:3000/users

```json
{ 
    "name":"Lucas",
    "email":"lucas@teste.com"
}
```

#### Realizando uma transação

* Para realizar uma transação faça uma requisição do tipo POST com um json no body contendo os campos origin_currency, target_currency, e origin_value e informando o id do usuário na nos parâmetros da url. A transação será persistida no banco e a aplicação retornará um json com todas as informações solicitadas acima.

* url = localhost:300/transaction/idUsuario - substitua pelo id do usuário criado.

* Exemplo: 

```json
{
	"origin_currency":"BRL",
	"target_currency":"JPY",
	"origin_value": 5000
} 
```

#### Consultando as transações de um usuário

* Para realizar uma consulta faça uma requisição do tipo GET
* url = localhost:300/transaction/idUsuario

* Exemplo de retorno esperado:

```js
[
  {
    "id": 1,
    "id_user": 1,
    "origin_currency": "BRL",
    "target_currency": "JPY",
    "origin_value": 3200,
    "target_value": 60274.9882256,
    "exchange_rate": 18.8359338205,
    "createdAt": "2020-10-02T02:14:22.264Z",
    "updatedAt": "2020-10-02T02:14:22.264Z"
  },
  {
    "id": 2,
    "id_user": 1,
    "origin_currency": "BRL",
    "target_currency": "JPY",
    "origin_value": 3211,
    "target_value": 60482.1834976255,
    "exchange_rate": 18.8359338205,
    "createdAt": "2020-10-02T02:38:43.910Z",
    "updatedAt": "2020-10-02T02:38:43.910Z"
  },
  {
    "id": 3,
    "id_user": 1,
    "origin_currency": "BRL",
    "target_currency": "JPY",
    "origin_value": 5000,
    "target_value": 94179.6691025,
    "exchange_rate": 18.8359338205,
    "createdAt": "2020-10-02T02:38:48.220Z",
    "updatedAt": "2020-10-02T02:38:48.220Z"
  }
]
```
