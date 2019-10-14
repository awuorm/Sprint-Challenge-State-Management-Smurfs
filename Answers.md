1. What problem does the context API help solve?

The context API helps solve the problem with passing down props from parent to child in React. The context API enables developers to pass down props to children from a parent using the context object.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - there are two properties in actions that are used in React. Action types are used in reducers to determine which action the reducer should perform. Action payloads are used to pass data to the store and to change state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state while component state is local.Application state should be used to maintain the state of the entire app, and all components should have access to it if they need it. Component state on the other end should be used to keep track of local changes in the component.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows us to provide asynchronous functionality to redux. redux-thunk enables us to handle asynchronous functions like fetching data from an API and other activities while using redux for state management.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favourite state management system is redux. It makes access to state data easy and trackable. Using action creators to create application logic also makes it easy to debug and scale.
