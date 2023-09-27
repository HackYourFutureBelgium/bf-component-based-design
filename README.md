# Component-Based Design

Learn to design, plan and build frontend applications using a Component-Based approach. You will explore the ReactJS library which is designed to make Component-Based design easy and efficient.

---

## Learning Objectives

### [1. Rendering Static Pages](./1-rendering-static-pages)

- recreate an HTML/CSS web page using pure functions components and encapsulated styles

JSX : you can ...

- [ ] Write elements with JSX syntax

### [2. Rendering Data](./2-rendering-data)

- functional React components
- render a static page with provided data
- component props
- splitting components with design in mind

functional React components: you can ...

- [ ] Create a React function component (both function definition and arrow function styles)

- [ ] Import/export components between files

Render data: you can

- [ ] Use interpolation ({}) to insert JavaScript expressions into JSX
- [ ] Render a list using the `.map` method

Components and props : you can ...

- [ ] create small, reusable components
- [ ] how to pass props into React components

Create reusable components: you can ...

- [ ] Nest components within other components
  - one folder with a main component
  - sub-components for your convenience (not part of public contract)

### [3. Stateful Components](./3-stateful-components)

- VDOM
- what is a hook
- `useState`
- `useEffect` (any side-effect)
- component lifecycle

VDOM : you ....

- [ ] can differenciate the real dom from the virtual dom
- [ ] know what reconciliation process is ..

Hook

- [ ] simple, just enough for the flavor
- [ ] the react docs "rules of hooks"

`use-state`

`use-effect`

component lifecycle

### [4. Events](./4-events)

- create components that manage internal state and emit custom events
- handling events
- build reusable components that take functions as arguments
- child components communicating with parent components
- passing functions as props

### [5. Component Structure](./5-component-structure)

- splitting components with logic in mind
  - why create dumb components when hooks can be anywhere?
- re-render cycles (all children)
  - why putting state at lower levels is efficient
  - why not to use everything in global state

### [6. Consuming APIs](./6-consuming-apis)

- fetch and use API data in components
- async `useEffect` callbacks

### [7. Frontend Routing](./7-frontend-routing)

- react router

### [8. Global State](./8-global-state)

- being careful about what you put in `useContext`
  - only move data to context when it's necessary
- store and manage global app state shared between components
- `useContext`
  - shared state, not the same as `useState`
- other state management systems/strategies exist

[TOP](#component-based-design)

---

## Just Enough React

React is a big library with a lot of history and different ways of doing things. To help you be productive faster, you'll only be learning a small part of everything React can do.

### JSX

> JSX is not actually part of React, but they're almost always used together

### Functional Components

- props
- importing local style sheets

### Synthetic Events

- handling
- dispatching

### Hooks

- `useState`
- `useContext`
- `useEffect`

### React Router

> not part of the core React library

[TOP](#component-based-design)

---

## Project Folder Structure

The wild world of React is full of different ways to structure applications and organize your code. You'll be learning one way to do things, this architecture is simple enough to learn in a couple weeks and capable enough to build a final project.

```txt
/react project
  /public
  /src
    /api-calls
      - functions that fetch and process API data
    /components
      - React components
      - more important to talk about the decision process
        than suggesting a specific folder structure
      /shared
        don't force it, let it happen
      /Component
        Component.jsx
        SubComponent.jsx
        styles.css
      App.jsx
        <header>
        <routes>
        <footer>
    /context
      - initialize React context with ../data
    /data
      - initial app state
    /utils
      - testable logic functions
  /LICENSE
  /package.json
  /README.md
```

### Conventions

- React component files are Pascal Case
- React component functions are Pascal Case
- React component files have the .jsx extension
- all other files & folders are Kebab Case
- all other functions are Camel Case

[TOP](#component-based-design)

---

## Getting Started

> You will need
> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
> installed on your computer to study this material

1. Fork this repository:
   - https://github.com/HackYourFutureBelgium/bf-component-based-design
2. Clone it using `HTTPS`
3. navigate to the cloned repository
   - `cd component-based-design`
4. Install dependencies:
   - `npm install`

[TOP](#component-based-design)

## Class recording

<details>
<summary>expand/collapse</summary>
<br>

### Week1

- [Day 0](https://youtu.be/HbnlbI6NXBM)
- [Day 1](https://youtu.be/-Ve6Y-QKAO8)
- [Day 2](https://youtu.be/yL-iUmyfyOc)
- [Day 3](https://youtu.be/IJGEhiCfXeI)
- [Day 4](https://youtu.be/YAbJ_jbUwhk)
- [Day 5](https://youtu.be/TlMKexxgIZs)

### Week2

- [Day 6](https://youtu.be/r99x1xleKCg)
- [Day 7](https://youtu.be/nMQ4IAh-dMw)
- [Day 8](https://youtu.be/fpPdILbNLo8)
- [Day 10](https://youtu.be/TWJAvKIQBJU)

### Week3

- [Day 11](https://youtu.be/peCLNL5nLAo)
- [Day 12](https://youtu.be/YEeNfHMvRP4)
- [Day 13](https://youtu.be/tCZ3D5YdWgQ)

</details>
