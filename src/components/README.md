# Components

This directory contains React components, of either stateful or
stateless varieties (i.e. `class` or `function` components).

The optimal structure for components is to place files relevant
to a component inside its own subdirectory, e.g.:

```
components/
└── Header/
    ├── index.js
    ├── Header.jsx
    ├── Header.spec.jsx
    ├── Header.styles.scss
    ├── Header.md (for react-styleguidist)
    └── other Header-related files...
```


## Do:

- Keep all files immediately relevant to a component inside the
  given component directory
- Add a basic `index.js` to import the component and export it
  to make it dead simple to import the component from elsewhere
- Feel free to create subdirectories for relevant utils or
  helpers if it helps to keep things tidy
- Keep components small, focused and easy to test, breaking
  up complex components into smaller components
- Try to create new, reusable components instead of
  "sub-components" (i.e. prefer not to create sub-directories
  that contain more components)
- Connect all components (no matter how small) with mobx-react
  `observer` if they use props that come from the store for the
  best performance
  (e.g. the parent component passing store props into the child
  component)
- **Be consistent**— however you choose to lay things out


## Don't:

- Mix concerns (files, modules) that should really belong to
  other components
- Forget to write tests... ;)
