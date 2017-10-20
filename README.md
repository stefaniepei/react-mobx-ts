# Webpack ReactJS Starter Kit

> A TDD-focused ReactJS, MobX, React Router starter kit with component styleguide

This is (what I consider) an optimial starting point for ReactJS & MobX projects, using the latest versions of Webpack, Babel, ReactJS, MobX and React Router.


## Key Features

- ReactJS v16
- MobX
- React Router v4
- Webpack v3
- Babel v6
- Mocha unit tests suite for: components, utils and stores
- ESLint (Airbnb coding style, plus some tweaks to make it less pedantic)
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

Since there are many practices to be learned about and many of them pretty specific
to various areas of app development, relevant READMEs are present throughout this
starter kit.

Here's the guides for each section of the starter kit:

- [Components](src/components/README.md)
- [Containers](src/containers/README.md)
- [Stores](src/stores/README.md)

These will be added to over time, and can be freely deleted once you're comfortable
with the practices if you don't like them hanging around in your project. If you
notice any corrections or improvements that can be made to these, feel free to open
a pull request!


## Component Styleguide

In a web app project?? _Yes!_

Having a local development server for your app is one thing, but having a dedicated
one for your components offers a way of working on components entirely separately
from your app to help you in creating truly isolated, reusable components.

I won't go into too much detail here, because this is being achieved using the
amazing [React Styleguidist](https://react-styleguidist.js.org/) that you should
definitely check out the docs for to learn more about. It's very easy to add to an
existing React project, too.

This starter kit already has it set up, just run `npm run sg` to run the local
development component styleguide server at `localhost:6060`, then start adding or
changing your component markdown files. It's easiest to locate them right next to
the component itself:

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

Suggestions are **absolutely welcome!**

Whilst I consider myself pretty well-aquainted currently with ReactJS at scale,
I'm forever on the lookout for ways to improve on the practices I follow when I
architect a React-based web app. And ultimately this isn't just for me, this is
for anyone out there starting on a React project in need of the basic skeleton and
structure already in place for them.

If you think there's any improvements to be made here or any missing modules you feel
are downright _essencial_ for building effective ReactJS apps, please don't hesitate
to raise an issue or a pull request.


## About

ReactJS is easy to start with (assuming you have a starting boilerplate or if you're
using `create-react-app` CLI tool), but difficult to master, and will require a _lot_
of iterative decision-making as you build your app.

After working with some small and some very large-scale ReactJS web apps over the past
couple of years, this is the starter kit that _I really wanted_ when I first needed to
build something big using ReactJS.

This little boilerplate project was created to provide an _opinionated_, _structured_
starting point for ReactJS apps of all sizes, with the hope that it will somewhat ease
the burdens placed upon you — the engineer — of building scaleable, unit-tested and
performant web apps.

**Developed by [Aaron Leo Cooper](http://webdevdiaries.com) @
[2359Media](https://2359media.com)**

