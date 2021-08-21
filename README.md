<p align="center">
  <h1>Getir Assignment Project</h1>
</p>

Getir assignment Api implementation

Built with Nestjs, TypeScript and ☕️!!!

the approach used to deliver this solution is based on enterprise level features focused on high modularity, clean project structures, typescript support and separation of concerns

business logic is handled in **app.service.ts**
api endpoints are defined in **app.controller.ts**
tests are defined in **app.controller.spec.ts**

- Data model features Mongoose ODM
- **Helmet** is added as an additional security layer against common HTTP attacks
- **OpenApi with swagger**
- **Rate Limiter** a rate limiter is also implemented against DDoS attacks
- **DI** Dependency Injection IOC provides lightweight instance management
- **Jest** used for Testing, the test mocks the Api endpoint
- **Validation** Entity and transfer objects utilize **class-validator** and **class-transformer**
- **Error Handling** built in using global a Filter pipe for all exception handling
- **Deployment** Heroku, the final app is accessible at https://powerful-savannah-83491.herokuapp.com/api

The Api exposes a POST endpoint to https://powerful-savannah-83491.herokuapp.com/api/records, the root path renders a Swagger UI document

Pass a JSON object payload in the request BODY with the following interface specification

```
RecordDto {
  startDate*	string
  title: item start date from
  example: YYYY-MM-DD
  defines a start date filter to apply in the format YYYY-MM-DD

  endDate*	string
  title: item end date
  example: YYYY-MM-DD
  defines an end date filter to apply in the format YYYY-MM-DD

  minCount*	number
  title: min count of the sum on the count field
  filters items that have a count field sum higher than this value

  maxCount*	number
  title: max count of the sum on the count field
  filters items that have a count field sum lower than this value
}
```

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
