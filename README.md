# Ecommerce-restfull-api

Basic RESTful api for ecommerce where you can add/delete your item and add item to cart after authorization.
#### DESCRIPTION

 -    Built a REST Api in Node.js using MVC approch using Nest.js + MongoDB.
 -    JWT for Authetication and Authorization.

#### BASIC REQUIREMENTS

 - Node.js 6.11.2
 - MongoDb

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
App should now be running on **localhost:5000**

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Available API Routes

### [Items Routes](#1-item-routes)
| Routes        | Description           | 
| ------------- |:-------------:|
| [`GET/items/`](#a-get-list-of-all-items)    |Get list of all items|
| [`POST/items/`](#b-post-a-new-item)     | Post a new item |     
| [`GET/items/{id}`](#c-get-details-of-a-particular-item)| Get details of a particular item. |    
| [`PATCH/items/{id}`](#d-update-a-particular-item) | Update a particular item |
| [`DELETE/items/{id}`](#e-delete-a-particular-item) |Delete a particular item |

### [User and Auth Routes](#2-user-routes)
| Routes        | Description           | 
| ------------- |:-------------:|
| [`POST/user/signUp`](#a-sign-up-a-new-user)    | Sign up a new user |
| [`POST/auth/login`](#b-login-a-existing-user)     | Login a user |        

### [Cart Routes](#3-cart-routes)
| Routes        | Description           | 
| ------------- |:-------------:|
| [`GET/cart/{userId}`](#a-get-cart-of-a-user)    | Get cart detail of a user |
| [`POST/cart/addItem`](#b-post-a-new-item-to-cart)     | Post a new item to cart |
| [`POST/cart/removeItem/{itemId}`](#c-post-remove-a-particular-item)| Post remove a particular item from cart | 

# nestjs-mongo-docker
(Nest + mongo) with Docker compose

## Run
```
npm run init
```

Visit your browser in: `http://localhost:5000/`
