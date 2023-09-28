# Product API Spec

## Create Product API

Endpoint : POST /api/products

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "Iphone X",
  "description": "New Brand Iphone X",
  "price": 800,
  "quantity": 100,
  "image_url": "https://iphone-x.png"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "name": "Iphone X",
    "description": "New Brand Iphone X",
    "price": 800,
    "quantity": 100,
    "image_url": "https://iphone-x.png"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name must be filled, price must be filled, quantity must be filled"
}
```

## Update Product API

Endpoint : PUT /api/products/:productId

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "Iphone X Gold",
  "description": "New Brand Iphone X Gold",
  "price": 850,
  "quantity": 50,
  "image_url": "https://iphone-x-gold.png"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "name": "Iphone X Gold",
    "description": "New Brand Iphone X Gold",
    "price": 850,
    "quantity": 50,
    "image_url": "https://iphone-x-gold.png"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name must be filled, price must be filled, quantity must be filled"
}
```

## List Products API

Endpoint : GET /api/products

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "name": "Iphone X Gold",
      "description": "New Brand Iphone X Gold",
      "price": 850,
      "quantity": 50,
      "image_url": "https://iphone-x-gold.png"
    },
    {
      "id": 2,
      "name": "Samsung S9 Silver",
      "description": "New Brand Samsung S9 Silver",
      "price": 700,
      "quantity": 80,
      "image_url": "https://samsung-s9-silver.png"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "product is not found"
}
```

## Remove Product API

Endpoint : DELETE /api/products/:productId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "product is not found"
}
```
