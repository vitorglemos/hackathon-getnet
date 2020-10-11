# Hackathon-Getnet
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/banner.png?raw=true" width="800">

## Desafio

Segundo o Data Sebrae, a oferta e captação nessa categoria de empresas, desde 2014 vem caindo significativamente e um levantamento realizado recentemente reforça esse cenário. Então, como resolver essa equação onde a maioria das empresas, que são responsáveis por quase 15 milhões de empregos, não consegue potencializar o seus negócios? 

Como podemos, por meio de serviços financeiros, mudar a realidade e potencializar a receita  das pequenas e médias empresas, no Brasil?

### Softwares 
| Libraries | README |
| ------ | ------ |
| API Getnet | https://developers.getnet.com.br/api#|
| PHP | https://www.php.net/manual/pt_BR/intro-whatis.php|
| JavaScript, HTML5, CSS3 | [Web Development]|
| SQL | [Database]|


### API Pagamentos Getnet

A API de pagamentos da Getnet é utilizada para o pagamento dos gift cards gerados pelas empresas que necessitam de algum tipo de financiamento. Nós utilizamos os cartões e acessos de teste que estão disponíveis no manual da API Getnet Pay. 


#### Uso da API - Validação do cartão
```
curl -X POST \
https://api-homologacao.getnet.com.br/v1/cards/verification \
-H 'authorization: Bearer 4d98da5d-767b-4db6-b581-b664e829bd41' \
-H 'content-type: application/json; charset=utf-8 ' \
-d '
{
  "number_token": "3fdb3ac9a6def80bf64cd241b9035e77ed8757032d356718864d03465a1130e20d8a897005e144dd6c1a5b4e63fcc99d3755f9e18a7cd852ad82778c65008988",
  "brand":"mastercard",
  "cardholder_name": "JOAO DA SILVA",
  "expiration_month" : "10",
  "expiration_year" : "18",
  "security_code" : "123"
}'
```

#### Uso da API - Pagamento com cartão
```
curl -X POST \
https://api-homologacao.getnet.com.br/v1/payments/credit \
-H 'authorization: Bearer 72402c54-6bd3-4895-a6b4-adfded0c11dc' \
-d '{
  "seller_id": "6eb2412c-165a-41cd-b1d9-76c575d70a28",
  "amount": 100,
  "currency": "BRL",
  "order": {
    "order_id": "6d2e4380-d8a3-4ccb-9138-c289182818a3",
    "sales_tax": 0,
    "product_type": "service"
  },
  "customer": {
    "customer_id": "customer_21081826",
    "first_name": "João",
    "name": "João da Silva",
    "email": "customer@email.com.br",
    "document_type": "CPF",
    "phone_number": "5551999887766",
    "billing_address": {
      "street": "Av. Brasil",
      "number": "1000",
      "complement": "Sala 1",
      "district": "São Geraldo",
      "city": "Porto Alegre",
      "state": "RS",
      "country": "Brasil",
      "postal_code": "90230060"
    }
  },
  "credit": {
    "delayed": false,
    "save_card_data": false,
    "transaction_type": "FULL",
    "number_installments": 1,
    "soft_descriptor": "LOJA*TESTE*COMPRA-123",
    "dynamic_mcc": 1799,
    "card": {
      "number_token": "dfe05208b105578c070f806c80abd3af09e246827d29b866cf4ce16c205849977c9496cbf0d0234f42339937f327747075f68763537b90b31389e01231d4d13c",
      "bin": "123412",
      "security_code": "123",
      "expiration_month": "12",
      "expiration_year": "20",
      "cardholder_name": "JOAO DA SILVA"
    }
  }
}'
```

