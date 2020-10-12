# Hackathon-Getnet
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/banner.png?raw=true" width="800">

### Desafio

<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/getnet.png?raw=true">

Segundo o Data Sebrae, a oferta e captação nessa categoria de empresas, desde 2014 vem caindo significativamente e um levantamento realizado recentemente reforça esse cenário. Então, como resolver essa equação onde a maioria das empresas, que são responsáveis por quase 15 milhões de empregos, não consegue potencializar o seus negócios? 

Como podemos, por meio de serviços financeiros, mudar a realidade e potencializar a receita  das pequenas e médias empresas, no Brasil?

### Solução
<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/solucao.png?raw=true" width="800">

A solução FIX permite que as empresas que precisam de crédito como empréstimo emitem gift cards para clientes usarem futuramente. Essa modalidade funciona da seguinte forma:
- Primeiro, a empresa cadastra uma meta (como uma vaquinha) e esse valor é gerado em vários gift cards. Por exemplo, se uma empresa precisa de R$ 20.000,00, ela pode gerar 100 gift cards de 200 reais para que os clientes usem ele futuramente na própria loja cadastrada. 
- Os clientes podem comprar os gift cards que são resgatados em uma data futura.
- No dia do resgate, o cliente pode usar os gift cards para comprar produtos da loja, receber um retorno em dinheiro ou doar para um amigo.

### Telas: Plataforma GIX

#### Home Page - Cliente
<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/home.png?raw=true">

#### Crowndfunding - Lista de empresas
<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/company.png?raw=true">

#### Pedir Empréstimo - Empresa - Cadastro de giftcard
<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/vales.png?raw=true"  width="800">

#### Comprando giftcards - Lado do cliente
<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/carrinho.png?raw=true"  width="800">

### Voucher SHA1 Generator
```
<?php
function rand_sha1($length) {
  $max = ceil($length / 40);
  $random = '';
  for ($i = 0; $i < $max; $i ++) {
    $random .= sha1(microtime(true).mt_rand(10000,90000));
  }
  return substr($random, 0, $length);
}

$quant_voucher = 10;
for ($j = 0; $j < $quant_voucher; $j++){
	for ($x = 0; $x < 1000; $x++){
		$temp = rand_sha1(50);
	}
	echo $temp."\n";
}
```

#### SHA1 hash code 
```
[0]->4dc3d2f27e33eceeb00896727d91d676685b7472785afd0a5b 
[1]->74a2f0003252e8cff10ff934e7ec25969b9056c89076ccfbde 
[2]->040132a84564b37007185e775c582326eb899f595e36eb7218 
[3]->7da7aed2d9b442c55c43a73f993165892597337044bb287c8f 
[4]->8ed02d3ad9901455719193ba2a9ad9a4879fe2686862a37376 
[5]->c77239227e089ecd0b812210b61501d2582769b7b39090853a 
[6]->12e0c9601276a6f8efb5400b08ca4fa1c62e83055ee2a5217e 
[7]->94e49b58c059e806e20b359872c4105692774a0facead5de34 
[8]->57365edf9dc6776bfb40ececb535edddfce008ff2fbc6a33d4 
[9]->d9539d8bc2f25b2fa08a26f5a86377ef4e1c32e8d59f63d749 
```

### API Pagamentos Getnet

A API de pagamentos da Getnet é utilizada para o pagamento dos gift cards gerados pelas empresas que necessitam de algum tipo de financiamento. Nós utilizamos os cartões e acessos de teste que estão disponíveis no manual da API Getnet Pay. 

<img src="https://github.com/vitorglemos/hackathon-getnet/blob/main/img/api.png?raw=true" width="800">


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



### Softwares 
| Libraries | README |
| ------ | ------ |
| API Getnet | https://developers.getnet.com.br/api#|
| PHP | https://www.php.net/manual/pt_BR/intro-whatis.php|
| JavaScript, HTML5, CSS3 | [Web Development]|
| SQL | [Database]|


