# Conversor de moedas

Voc� dever� implementar uma API Rest que seja capaz de realizar a convers�o entre duas moedas
utilizando taxas de convers�es atualizadas de um servi�o externo.

Para realiza��o da convers�o � necess�rio o ID do usu�rio que deseja realizar a convers�o.

A API dever� registrar cada transa��o de convers�o com todas as informa��es relacionadas e tamb�m
disponibilizar um endpoint para consulta das transa��es realizadas por um usu�rio.

O projeto poder� ser feito na linguagem de programa��o de sua prefer�ncia.

1. Deve ser poss�vel realizar a convers�o entre 4 moedas no m�nimo (BRL, USD, EUR, JPY);
1. As taxas de convers�o devem ser obtidas de [https://api.exchangeratesapi.io/latest?base=USD];
1. As transa��es de convers�o devem ser persistidas no banco de dados (embedded) contendo:
    * ID do usu�rio;
    * Moeda origem;
    * Valor origem;
    * Moeda destino;
    * Taxa de convers�o utilizada;
    * Data/Hora UTC;
1. Uma transa��o com sucesso deve retornar:
    * ID da transa��o
    * ID do usu�rio;
    * Moeda origem;
    * Valor origem;
    * Moeda destino;
    * Valor destino;
    * Taxa de convers�o utilizada;
    * Data/Hora UTC;
1. Uma transa��o com falha conhecida deve retornar um erro HTTP 400 com a descri��o da falha;
1. Dever� existir um endpoint para listagem de todas as transa��es realizadas por usu�rio;
1. Deve haver uma cobertura satisfat�ria de testes;
1. Deve-se adicionar a esse arquivo explica��es sobre como rodar a aplica��o, e uma apresenta��o sobre o
projeto: prop�sito, features, motiva��o das principais escolhas de tecnologias, e separa��o das camadas;
1. Todo o c�digo deve ser em ingl�s;
1. Disponibilizar o c�digo apenas nesse reposit�rio, sem nenhuma c�pia p�blica, para evitar pl�gio;

## Itens desej�veis
* Logs
* Tratamento de exce��es
* Documenta��o
* Coes�o de commits
* Mensagens de commits claras
* Configura��o de lint
* Testes unit�rios
* Testes de integra��o
* Documenta��o dos endpoints
* Estar rodando e dispon�vel (Ex: Heroku, ou similar)
* CI/CD


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

*Acesse a pasta do projeto e rode os comandos:

```bash
$ npm install
```
```bash
$ npm start
```
*Utilize algum programa para requisições como [postman](https://www.postman.com/) ou [insomnia](https://insomnia.rest/download/)

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
