# Containers

This directory contains React container components. Container components
are a concept borrowed from typical React-Redux projects. Containers are
simply a bridge between application stores and UI components, making a
connection to the relevant stores and passing down as props the properties
and methods provided by the connected store(s).

With MobX it's easy to know if you should create a component or a container:
if you need to use mobx-react's `inject` decorator to connect to a store,
use a container component to be decorated with the `@inject`.

The optimal structure for container components is to place files relevant
to a container inside its own subdirectory, e.g.:

```
containers/
└── UserSearch/
    ├── index.js
    ├── UserSearch.jsx
    ├── UserSearch.spec.jsx
    └── UserSearch.md (for react-styleguidist)
```

### But do I even _need_ container components?

Each to their own. But there's good reasons why I'd advise using dedicated
container components and why it's _not_ a good idea to use mobx-react `@inject`
on all components that need stores:

- Your unit tests will get needlesly complex (since you'll need to inject
  stores for even the simplest of tests)
- It'll increase the liklihood of encountering hard-to-locate bugs in your app.
  The same can be said of any modules that mix too many different concerns
- It keeps your presentation components decoupled from your app's MobX stores
  and means you could render a presentation component without stores— great for
  component style guides and unit tests

Container components help mitigate the above by acting as proxies between
MobX stores and presentation components.


## Do:

- Connect your container components to the MobX stores required
  by using mobx-react's `inject` decorator, followed immediately
  by `observer` decorator (the order is crucial!)
- Maintain a strict policy of giving container components little
  to no responsibilities relating to the UI: they ideally will
  not require styling because their child components should be
  the ones with styling applied
- Keep all files immediately relevant to a container inside the
  given container directory
- Add a basic `index.js` to import the container and export it
  to make it dead simple to import the container from elsewhere
- **Be consistent**— however you choose to lay things out


## Don't:

- Overcomplicate containers, they're not supposed to contain a lot
  of business logic. Usually if you're creating methods on the
  container for complex logic, you might want to consider hoisting
  that logic up into the store it's connected to, or down into one
  of the components it's rendering
- Use `inject` anywhere in your app except in containers. For the
  above mentioned reasons that unit testing will become a lot
  harder to manage and make your app less easy to track down bugs
- Mix concerns (files, modules) that should really belong to
  child components or provided stores
- Forget to write tests... ;)
