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

<code> <Title title="Events in your Area" /> </code>

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

### 27. React Fragment
React template must have a single parent element, else we get an error

*React fragment* is basically just like an empty tag. <code> <> // code here </> </code>

We can't use props or attributes on a short hand version of fragment.
```
<>
// JSX code goes here
</>
```

We can use props in the longer version of *React fragment*
```
<React.Fragment key={}>
    // JSX code goes here
</React.Fragment>
```

### 28. Children Props (Making a modal component)
This is another way to pass props instead of the regular way.

```
export default function Modal( {children} ) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
            {children}
        </div>
    </div>
  )
}

// App.js Component
<Modal>
    <h2>10% OFF Coupon Code!!</h2>
    <p>Use the code NINJA10 at the checkout.</p>
</Modal>
```

### 29. Function as props
```
export default function Modal( {children, handleClose} ) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleClose}> close </button>
        </div>
    </div>
  )
}
```

### 30. Show Modal Challenge
You want to make a button in the app component when you first load the page in the browser, which when usre clicks, will make the *show modal* show or display.

### 31. Portals
Portal in React is a way for us to take a component and render it somewhere else in the DOM outside the scope of its parent component.

The <code>.createPortal()</code> is a method that takes two arguements:
+ The first argument is going to be all the JSX template (because that's the thing we want to pick up and move).
+ Second argument is where in the body we want to put the template.

```
export default function Modal() {
    return ReactDOM.createPortal((
        <>
            // JSX template
        </>
    ), document.body)
}
```

### 33. Class Component Overview
A class component in React are slightly older ways of creating component.

A class component is a javaScript class, and it extends a React component class, which contains component functionality.

In a class component, we use a render method inside the class and it's that render method that needs to return the template.

In class component, we access the *props* by saying <code>this.props</code>, where the *"this"* keyword represents the component itself.

We use a constructor function in class component and set the initial state using <code>this.state</code> which is an object of state properties.

```
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name} </h1>
                <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
            </div>
        );
    }
}
```

## Section 6: Styling React Application
### 34. Using Global Style Sheet
Global styles are styles that are site wide and they target common elements that we use all over the site. Example, heading styles, paragraph styles, button styles, any other generic style.

In React, our global stylesheet is the <code>index.css</code>. The styles in the global stylesheet will affect all targeted elements wherever they are on the site or app.

In order to register a global stylesheet, they have to be registered in the <code>index.js</code> file which kick starts our React app.

### 35. Component Stylesheet
component stylesheets are styles that are specific to a certain component.

the benefits of splittig css into different files is that as the app get bigger and when starting to style more and more elements, it helps to keep our css more modular, cleaner, and easier to update.

**Note:** *Component specific stylesheets are also global. But the way aroind this, is to add a root calss to the parent element of each component template and then use that root class in our css files.*

### 36. Inline Styles
```
<div className = "modal" style={{
    border: "4px solid",
    broderColor: "#FF4500",
    textAlign: "center"
}}>
```

### 37. Dynamic Inline Styles
<code> borderColor: isSalesModal ? "#FF4500" : "#555", </code>