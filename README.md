# Form Engine

Used in conjunction with redux-form, to create an "engine" capable of rendering any form template in React

## Getting Started



### Prerequisites

- Will only work in a React/Redux app. 
- [Redux-Form](https://github.com/erikras/redux-form/)


### Installing



```
npm i redux-form --save
```

```
npm i form-engine --save
```



## Usage

### Templates
The point of the library is so that you can have an effiecent engine that is capable of rendering any 'template'. This is beneficial for any application that is composed of many many forms. It becomes tiresome and hecktic when trying to code each individual form. What this library offers instead, is the ability to create generic temaplates (JSON) that can be converted into dynamic forms. All the user needs to do is supply the forms. A suggestion for template managment on the backend will be created later but will most likely incorporate mongodb.

[Example Template](https://github.com/datastructr/form-engine/blob/master/examples/template.js)


## Authors

* **Michael Ramos**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [erikras](https://github.com/erikras) for making [Redux-Form](https://github.com/erikras/redux-form/)
