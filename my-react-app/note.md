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