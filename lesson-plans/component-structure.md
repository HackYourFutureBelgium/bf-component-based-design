# Component Structure

This lesson will cover a helpful process for structuring the components in your apps:

1. Create a wireframe of the page
2. Write all functional/pure components, these are only visual and do not `useState`. They just render data.
3. Write stateful "container" component to manage the visual components, and define the callbacks necessary for event listeners and `useState`

Following this process will help you decouple the visuals from the page's logic, making it easier to maintain the UI and the "brains" of your app separately.

## Before Class

Nothing new technically! This lesson is all about planning with the React features you've already learned. Make sure you show up ready to work with:

- Functional Components w/ JSX
- Event listeners & handlers
- Component Props
- `useState`

And review `setInterval` & `clearInterval` from Asynchronous Programming.

## Before Break

1. Create a wireframe [pomodor-timer.io](https://pomodoro-timer.io/):
   - **Must Have**: A _Focus_ timer.
   - **Should Have**: A _Short Break_ and a _Long Break_ timer.
   - **Could Have**: An animated circle on each timer to visually track the time.
2. Write all the visual components you need for your wireframe.

- These should all be stateless components that only render props (no `useState`!).
- Make them as small and reusable as possible

## After Break

3. Create a container component called `Timer` that uses the visual components you created before break, it has:
   1. **2 Props**: minutes & seconds
   2. **State**: this component uses a `setTimeout` and `useState` to update the clock
   3. **UI**: A timer and start/stop/reset buttons.
4. If you complete step **3** (_must-have_), create 3 buttons in your home page that render different `Timers` (_should-have_)

## After Class
