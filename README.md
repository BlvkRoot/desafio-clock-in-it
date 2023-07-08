# Desafio clock in it

Este projeto é um desafio passado pra mim naqual tive a oportunidade de implementar arquitetura limpa em NestJs.

## API ENDPOINTS

### Clients

```
GET /clients

POST /clients
BODY {
  name: String,
  phone: String,
  address: String
}


PUT /clients/:id
BODY {
  name: String,
  phone: String,
  address: String
}

DELETE /clients/:id


```

### Products

```

GET /products

POST /products
BODY {
  name: String,
  description: String,
  price: number
}


PUT /products/:id
BODY {
  name: String,
  description: String,
  price: number
}

DELETE /products/:id
```

### Orders

```

GET /orders

POST /orders
BODY {
  clientId: number,
  productId: number
}


```

#### TECNOLOGIAS USADAS

:arrow_forward: NestJS + TYPESCRIPT + TYPEORM + SQLITE + JEST
<br>

<h1 align="center">Desenvolvido por Henriques Salucamba :purple_heart:</h1>
