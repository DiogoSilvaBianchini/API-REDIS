# API REDIS

Está API foi desenvolvida para melhor entendimento do armazenamento temporario REDIS. O intuito destá aplicações é testar diferentes estrátegias de Cacheamento.


## Como utilizar

Está API utiliza uma imagem docker oficial do redis encontrado no docker-hub [Encontrada aqui](https://hub.docker.com/_/redis).

**1. Iniciando o projeto**
Navegue até a raiz do projeto e inicie o servidor Redis utilizando docker-compose:
```
docker-compose up -d
```
**2. Start o projeto utilizando node**
```
npm run dev
```
ou
```
npm start
```
_Obs: Npm run dev irá iniciar o servidor com nodemon ideal para testes devido ao hotreload_

## Rotas

### Rotas GET:

A rota principal serve para checar se a API está rodando normalmente:

URL:
```
http://localhost:8082/
```

**Respostas:**

_HTTP 200 OK:_
```
{
    "msg": "Servidor rodando",
    "status": 200
}
```

**Rota de requisição**:

Utiliza uma Promise configurada para demorar 5 segundos para responder, está promissa simula um serviço que demora muito para ser calculado. 
Logo após a promisse ser resolvida a rota salva a resposta da promisse no redis, tornando as proximas requisições mais rápidas.

URL:
```
http://localhost:8082/redis
```

**Respostas:**

_HTTP 200 OK:_
```
{
    "msg": "Salvo",
    "results": [
        "Produto1",
        "Produto2"
    ]
}
```
### Rotas POST:

Está rota simula a criação de um novo registro no banco, a rota é responsalvel por realizar o novo registro e atualizar o cache no Redis.
Tornando assim o cache sempre sincrônizado com o banco.

URL:
```
http://localhost:8082/redis
```

_HTTP 200 OK:_
```
{
    "msg": "Salvo",
    "results": [
        "Produto1",
        "Produto2"
    ]
}
