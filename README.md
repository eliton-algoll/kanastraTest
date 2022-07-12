# kanastraTest
Seguindo o flow da conversa, foi simulado o envio de um arquivo CSV, porém na requisição antecipando o tratamento do CSV será enviado uma requisição POST com um array de objetos no padrão que o CSV teria, conforme exemplo:

```[
	{
	"name": "John Doe",
	"governmentId": 11111111111,
	"email": "johndoe@kanastra.com.br",
	"debtAmount": 1000000.00,
	"debtDueDate": "2022-10-12",
	"debtId": 8291
},
{
	"name": "John Doe 2",
	"governmentId": 222222222,
	"email": "johndoe2@kanastra.com.br",
	"debtAmount": 2000000.00,
	"debtDueDate": "2022-10-14",
	"debtId": 291
}
];
```

Para rodar a aplicação será necessário a versão 16 do node, bem como o Yarn instalado na maquina.

Para startar o projeto: 
```yarn start:dev```

Para rodar os testes:
```yarn test```

Para efetuar o build
```yarn build ```

Rotas:
```
get http://localhost:333/upload
post http://localhost:333/upload
```