# Marvels Movies Api


## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

This is a demo app to showcase using the `feathers-shallow-populate` hook, using marvels movies as the example data.

```js
// Populate actors
shallowPopulate({
  include: {
    service: 'actors',
    nameAs: 'actors',
    keyHere: 'actorIds',
    keyThere: 'actorId'
  }
}),
// Map personID
mapResultData('actors.personId', 'actors'),
// Populate person from actor
shallowPopulate({
  include: {
    service: 'persons',
    nameAs: 'persons',
    keyHere: 'actors',
    keyThere: '_id'
  }
})
```


## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/marvels-movies-api; npm install
    ```

3. Start your app

    ```
    npm start
    ```


## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
