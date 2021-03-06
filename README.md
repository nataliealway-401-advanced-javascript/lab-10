# Lab 10

## Final API Server

### Author: Natalie Alway

### Links and Resources
* [submission PR](https://github.com/nataliealway-401-advanced-javascript/lab-10/pull/1)
* [travis](https://www.travis-ci.com/nataliealway-401-advanced-javascript/lab-10)
* [Backend](https://lab10-api-server.herokuapp.com/)


#### Documentation
* [jsdoc](https://github.com/nataliealway-401-advanced-javascript/lab-10/blob/master/docs/global.html)

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - `mongodv://localhost:27017/lab-10-final-api`

#### Running the app
* `npm start`
* Endpoint: `/api/v1/categories`
  * Returns a JSON object category data in it.
* Endpoint: `/api/v1/products`
  * Returns a JSON object with product data in it.
  
#### Tests
* `npm test`

#### UML
![UML](./assets/lab10UML.jpg)
