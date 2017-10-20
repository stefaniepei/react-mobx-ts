# react-mbox-ts
react^16.0.0+mobx^3.3.1+react-router^4.2.2+typescript^2.5.3+webpack^3.6.0

# Webpack ReactJS Starter Kit

## Key Features

- ReactJS v16
- MobX
- React Router v4
- Webpack v3
- TS
- Mocha unit tests suite for: components, utils and stores
- TSLint (Airbnb coding style, plus some tweaks to make it less pedantic)
- React Styleguidist for a "living" component styleguide


## Commands

These are the key commands you'll need:

`npm start` — Run a local development server with Hot Module Reloading

`npm run build` — Compile your app into static, production-ready, optimised files

`npm run sg` — Run local component styleguide server for isloated component development

`npm run sg:build` — Compiles the component styleguide into static files (`styleguide/dist`)

`npm run lint` — Run all linting scripts (ESLint, Stylelint coming soon!)

`npm test` — Run tests with coverage output shown

`npm run test:watch` — Run tests continuously as files inside `src` directory change


## Best Practices

## Component Styleguide

```
Header/
├── Header.jsx
├── Header.md  <- this enables the styleguide magic!
└── etc...
```

And if you want to publish your styleguide to a server, just run: `npm run sg:build`
and you'll have all the static assets built into `styleguide/dist`.


## Unit Tests

As mentioned, this React MobX starter kit is TDD-focused (Test-Driven Development).
You don't have to use TDD with this starting project (and writing unit tests at all
is entirely your decision), however it's been produced with that in mind.

The unit tests suite setup includes these libraries:

- Mocha
- Chai
- Sinon
- Enzyme

As well as a custom Babel environment definition (defined inside `.babelrc`).

Mocha is configured mainly in the `test/mocha.opts` file, using the QUnit test
interface to enable you to write simple tests without overly-nested code blocks
(similar to Tape or Ava's flatter unit tests style).

Currently this project contains a good variety of test samples for you to use as
a basis for your own tests for components, utility functions and MobX stores.

Running `npm test` runs all tests once, outputting coverage data to the terminal
and to the `coverage` directory as generated HTML test coverage reports.

Running `npm run test:watch` continuously runs all your tests, automatically
re-running when files change. The output is set to minimal to be less distracting,
though it can be changed from the script inside `package.json` by modifying
the `--reporter` flag.


## Project To-dos

- [ ] Add bundle splitting strategies (vendor & consider dynamic imports)
- [ ] Add component generator CLI

## Suggestions?

## About
