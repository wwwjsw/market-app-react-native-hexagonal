This project was made as a learning process of DDD (tactical design), Hexagonal Architecture and React Native.


## Project Structure (Modules)
```
 .
 |-- src               
 |   |-- app            --> Module for the delivery mechanism (React Native)
 |   `-- core           --> Module for the use cases, domain and repositories
 `-- test
     |-- app_test       --> Acceptant tests
     `-- core_test      --> Unit tests
```


```
 .
 |-- src
 |   |-- app
 |   `-- core
 |       |-- category
 |       |   |-- application        --> (what it does) here are the applications services/uses cases/actions.
 |       |   |-- domain             --> (what is about) here are the entities and value objectes.
 |       |   `-- infrastructure     --> Repository implementations and classes related to frameworks or libraries.
 |       |-- product
 |       |-- shared
 |       `-- user
 `-- test
     |-- app_test
     `-- core_test
```

## Development

### Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test:coverage`

Run the test and the coverage for the domain and the presenters.

## Stack
* This project was bootstrapped with [Expo](https://expo.io/).
* The design is a freebie that was designed by [Kishore](https://www.sketchappsources.com/free-source/3582-marketplace-app-sketch-freebie-resource.html).
