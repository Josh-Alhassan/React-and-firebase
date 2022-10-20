# Build Web Apps with React & Firebase
## Introduction and Setup
### React at a Glance
React is a JavaScript library that can be used in several ways: plug it into an existing website to control specific section, to power and control an entire web application.

+ React websites are built using ***components***
+ Single page apps (SPA) are built using React

### What you should Already know
- JavaScript: import and export, Arrow functions, Array methods like .map() and .filter(), Aysnc & await, The fetch API & promises..
- HTML and CSS

### Environment Setup
- React uses node.js under the hood to compile our project.

## React Basics


## 4. Intro to State and useState
### Why we need state!
+ **State** is basically another word for component data that might change over time.
+ When a react app first starts before a component template is even mounted to the DOM, React runs the component function.

### Using the useState hook
+ *"useState"* is what is known as a "*react hook*". 
+ We can use many *react hook* for different purposes.
+ All *react hooks* are just functions that do something special. And all react hooks start with the word "***use***". That is how we know a function is a react hook.
+ The *useState* is used for creating component state that is component data which can change over time, or in reaction to something.
+ When we use "hook" to create state, whenever that state value changes, it triggers our component to be re-evaluated with the new state value.

```
// Importing useState hook
import {useState} from 'react'
```

+ As an argument in a useState hook <code>useState('')</code>, we pass it a value, whatever we want our state value to be. It can be any datatype.

+ <code>useState('')</code> function returns Two Values for us inside an array and we can use what is known as *"Destructuring"* to grab the returned values.
1. The actual state value.
2. A function to change that state value.

### How state and Rendering work
+ The index.js file is the entry point to the react application, and that runs first. It's this file's Job to take up component and render it to the DOM.
+ Once JSX compiles, we have a JavaScript tree like representation.
+ React uses *Virtual DOM* when updating our template.

### 20. Outputting List
+ You can use a *use State* as many times as you want a react app.
+ A key prop is something React can use to keep track of template items in some kind of Array

### 21. Using the Previous State
**NOTE:** Whenever your state update, depends on the previous state that we're updating.

Always use a callback function to access the previous state.

### 22. Conditional Template
We can use state to conditionally putput parts of a template based on that state

### 23. useState Limitations
+ You can only call hooks from the top level of a component. So for instance, we couldn't use hook inside of a handle click function.
+ A react hook has to be used within the scope of a react component
```
useState() // not allowed

function App() {
    // code goes here
    
    return (
        <div>
            // JSX code goes here
        </div>
    )
}
```

## SECTION 5 Components and Props

### 24. Using Multiple Components
When creating a full website, you will need more than one component, where weach component would be responsible for each section of the site.

The way we work with components on a page is by nesting them inside the app components. And when we nest components, we form what looks like a *component tree diagram form*.

*props* is a way for a parent component to pass data down to one of its child components.

### 25. Creating a Title Component
<code>export default function Title() </code> 

is the same as

```
function Title() {}

export default Title;
```

To nest a component inside the APP component we are going to first *import* it.
<code> import Title from './components/Title' </code>

You can't hace multiple JSX or root parent element in a component.

### 26. Intro to Props
Props are a way in react first to pass data from a parent component down to a child component, so that it can be used in that child's component.

That props could be any kind of data. It could be strings, number, boolean, array, objects etc.

Props makes our component content re-usable and dynamic because then you can use it in different parts of the application and put different content into it. In this our case 'Title' component.

The way we put a *prop* into a component is just by making an attribute on our custom component.

<code> <Title title="Events in your Area" / > </code>

When we pass a prop into a component, that component automatically recieves a prop object as a parameter in the function.

```
function Title(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.subtitle} </h2>
        </div>
    )
}
```

we can also destructure prop object.
<code> function Title({title, subtitle}) { // code goes here} </code>
