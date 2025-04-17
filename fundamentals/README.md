# Fundamentals

> [!NOTE]
> The directory formerly known as `hacker-stories`, is now called `the-garage`

## Components

* The App component (as the Entry Point) is the Root or Ancestor to all components in the applications constructed here
* Child components of App can be parents and/or siblings of other components withing the application
    * Example: App > List > Item within hacker-stories. App is the Root, List is a child of App but a parent to Item.
* Components that don't generate their own components from within are the leaves. 
* Extraction of additional components typically occurs naturally when complexity becomes too intense.
* Passing multiple values within a component property creates an object, not an array.
---

**Declaration**: This refers to the creation of an interface that is your component. Similar to defining a class in Java. This is where you create the template all instances of your component are birth from. 

Function Component Declaration

```jsx 
function Hello() { 
    return (
        <h1>Hello World</h1>
    )
}
```


Arrow Function Expression

```jsx
const Hello = () => <h1>Hello World</h1>
```
Both of these components provide the same output though the arrow function expression is more concise. 
The trade-off being that it does not allow for anything else to occur prior to returning. 
Removing the braces and return block means the JSX is all you get. 

*Note: While it is possible to mix the two it's best practice to choose a style and stick with it throughout the entire project*
            
**Instance**: Each occurence of your component is an instance. They are all independent of one another but follow the same structure as declared. 

**Element**: This is what's rendered at to the browser after declaration and instantiation of your component. 

### Controlled Components
HTML elements have their own internal state that doesn't tie into React on it's own. This means the value of each element, unless overriden by React, is likely to become out of sync. Ultimately, this could lead to unexpected behavior out of our control. 

Fixing this requires us to take control of the value within the `input` element directly using React state to ensure they stay in sync.

From `the-garage`, here's one example. where our state passed within the `text` prop.

```jsx
//State managed by React
export default function Search({text, onSearch}) {
    
    return (
      <>
        <label htmlFor="search">Search </label>
        <input type="text" value={text} name="search" onChange={onSearch} id="search" />
        <p>Looking for: <strong>{text}</strong></p>
      </>
    )
  }

//State managed internally
export default function Search({text, onSearch}) {
    
    return (
      <>
        <label htmlFor="search">Search </label>
        <input type="text" /* Here */ name="search" onChange={onSearch} id="search" />
        <p>Looking for: <strong>{text}</strong></p>
      </>
    )
  }


```
*This small change is easy to miss but it is critical to avoid unexpected errors or behaviors throughout the application.*


---
## Handlers
- These are functions that called each time an event is triggered within the DOM such as onClick, onChange, onHover, etc.
- Another interpretation might describe them as React's solution to event listeners. 

- Callback Event Handler
    - Allows for communication up the component tree from child to parent. 
    - Passed down the tree via React props and communicates back up the tree after the function is called. 
    - Often used in form submissions. 

- Inline Event Handler
    - Allows for declaration of the handle function directly within the JSX. 
    - Functions declared this way are technically anonymous. 


- Bubbling
    - event.stopPropagation is a preventative measure against bubbling. Keeping the developer in control of how the browser responds to user interactions. 

## Props (Properties)
- This is the vehicle by which all data is passed down the compenent tree from the root (ancestor component) to the leaves (components with no children).
- Props are passed between compenents within an immutable JavaScript object.**(Short ver. Props are Read-Only).**
- Though it is possible to derive new data based on the props passed into a component via computation, values of the props themselves should not be manipulated directly.

Here are a few different ways we can pass props. 

```jsx
//Standard
function App() {
    const greeting = 'Welcome to React';
    return (
        <div>
            <Welcome text={greeting} />
        </div>
    )
}

function Welcome(props) {
  return (
    <h1>{props.text}</h1>
  )
}

//Destructured Props
function Welcome({text}) {
  return (
    <h1>{text}</h1>
  )
}

//Passing the String Directly

function App() {
    return (
        <div>
            <Welcome text={'Welcome to React'} />
        </div>
    )
}

//Passing an Object 
function App() {
    const object = {greeting: 'Welcome to React'};
    return (
        <div>
            <Welcome text={object} />
        </div>
    )
}

function Welcome({text}) {
  return (
    <h1>{text.greeting}</h1>
  )
}

```

- Keeping the values we want to display stored within the component where its rendered would not provide the oppurtunity to create dynamic content.
- If we didn't want our content to be dynamic it's likely React is overkill. 

***Do props increase maintainablility since we don't need to make changes in more than one place when a value changes?***

***Maybe this is an example of the DRY principle at work? You pass data using props and state to avoid duplicating knowledge throughout the code.***

> [!CAUTION]
> Props cannot be passed from child components back up the component tree to a parent or ancestor.

### Spreading
- The spread operator in JS is useful in React as it make it possible to pass all props in one go. 

Lets pretend the above Welcome function has 10 props instead of 1 and I don't want to type them all because I'm just going to dump everything into the next child component in the tree. 

Spreading gives us and easy way to do that.

```jsx

function Welcome(props) {
  return (
    <Message {...props} />
  )
}

```
*Essentially what's happening here is that no matter how many props we add to `Welcome` this syntax will pass them all for us with minimal effort.*

>[!CAUTION]
>It is possible to accidentially override props you are trying to pass. This behavior is based on the order in which your attribute and/or spreads are placed in. 

Lets say one of the 10 props passed to `Message` is *name* initialized with the value of "Jane".

```jsx
<Message name="John" {...props} /> // Result: props.name = "Jane"

<Message {...props} name="John" /> // Result: props.name = "John"

//Rest Props
function Message({name, ...others}) {
    return (
        ...
        <h1>`Hello, ${name}`</h1>
        <p>{...others.paragraph}</p>
    )
}

```
*As shown above, the order in which you declare your props matters when using this spreading operator. You'll also notice in the above example `...others`. This value is similar to spreading but on the receiving end. It allows you to destructure your props sacrificing readability of the function signature if the prop count gets too high to manage.*


### Destructuring

- Being that the `props` variable is just an object, it's possible to unpack the values within that object for more immediate access. This is destructuring. 
- I would use this mostly when there only 1-2 props as it feels like a cleaner execution to not have to use `props.*` 
- Considering the Rest Props we just learned about above, I'd say it can be useful on the other end of the spectrum as well when you have so many props you have to destructure to pull out just want you need a little more easily. 

In an earlier version of hacker-stories, you may have noticed this nightmare.

```jsx
const list = [...]

...

function List() {
   return (
    <ul>
      {list.map((car) => ( 
        <Item key={car.id} details={{make:car.make, year:car.year, model:car.model, miles:car.miles}}/> 
        ))} 
   </ul>
   )
}

function Item({details}) {
  
  return (
    <li>{details.year} {details.make} {details.model}: {details.miles} Miles</li>
  )
}
```

*While I didn't pass `props` to the `List` component here, you can see the `Item` component does have props passed though deconstructed. This only worked because the list variable was declared globally and all our components were inside a single file (App.jsx). Though, it's not great to look at or easy to read and overall unecessarily verbose.*

I'd like to hope that this new version is much more readable. 

```jsx

function Item({car}) { //deconstructed props passed from List component
    return (
        <li>
            <span>{car.year} </span>
            <span>{car.make} </span>
            <span>{car.model}: </span> 
            <span>{car.miles} Miles</span> 
        </li>
    )
}

function List(props) { //all props passed from App component 
    return (
     <ul>
        {props.list.map((item) => (
            <Item key={item.id} car={item}/>   
          ))} 
     </ul>
    )
}

const cars = [...]

function App() {
    return (
        ...
        <List list={cars} />
        ...
    )
}
 
```
### Default Values
- Sometimes it's necessary to fill in a value when you don't have something from the user or stored in a database to fill the gaps. Defaults are optional in React but helpful in some cases. 

```jsx
function Message({name = "Rockstar", ...others}) { // If name is null, this passes the value Rockstar instead. 
    return (
        ...
        <h1>`Hello, ${name}`</h1>     
    )
}

//Alternate Syntax
function Message({name, ...others}) { 
    return (
        ...
        <h1>`Hello, ${name || "Rockstar"}`</h1>     
    )
}

```

### Children Prop
- This property is useful when we need to pass Components as props. If I remember correctly, this slot pattern is used extensively in Next.js. Laravel also uses a similar pattern.
- Can be passed as a function or render prop. 

```jsx
function Layout({children}) {
    return (
        <html>
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}
```

## State
- This is the "engine" that allows interactivity with React Components. State is typically updated via an event handler.
- Stateful values are mutable unlike props. The goal is to allow them to change over time as part of that interactivity for the user.

> [!NOTE]
> Stateful values can be passed to child components as props. Meaning, there is an exception to the rule we set earlier about props being immutable.
> When state is updated by a parent component and that state happens to be passed as a prop, the parent component passes the modified state value to the child component when it is re-rendered.


### Sequencing 
- Render Component &rarr; Interaction &rarr; Update &rarr; Re-Render Component (and all child components)

```jsx
const [count, setCount()] = React.useState(0);
```
*In this scenario `count` is the "stateful" variable that we want to allow the user to manipulate while `setCount()` is the function that facilitates this value's manipulation when combined with an event handler.*

- Conditional Rendering allows us to show or hide content based on state as well.
```jsx
const [isVisible, setVisible] = React.useState(true);

return (
    ...
    {isVisible ? <Hello name={user} /> : null} // This reminds me of the ternary operator in PHP
)
```
- It is also possible to pass stateful values to props of child components that will update from the parent via a callback. 
- A change in state for the parent forces a re-rendering of the parent component in addition to all children and as such props are reloaded with the new values. 

### Communication From Child to Parent Components
- Remember we said earlier that you cannot pass `props` up the component tree only down. This remains true. 
- Though as expressed in the Handlers section above, there is a bit of a workaround.

To make this work, we have to pass a function as a prop similar to how we can pass stateful values as props. After the function is called from a child component, it moves to the parent for execution. This causes a change in state and therefore forces the component to re-render with the new values stored as props. 

### Lifting
- When a child component's state is managed within itself, we as the developer are limited in what we can do to the component based on state. 
- Transfering the task of state management from a component up the tree to it's parent or an ancestor is called **Lifting State**

## Strict Mode
- This is a development-only feature that provides some additional checks when building React Apps. 
- All Components, Effects, and Ref Callbacks are run twice in development when this is enabled.
- There are also checks implemented for deprecated APIs.

> [!WARNING]
> If you are trying to track the rendering of your components via `console.log`, seeing them twice in development does not mean they will render twice in production.  

## Context API
- Allows props to be "passed" down the component hierarchy more easily. Useful when the child component is deeply nested. 
- In reality, context is like a back door or tunnel that allows child components to consume information from parents/ancestors on demand. 
- State can also be passed using this tunnel. 

```jsx
import React from 'react';

const Context - React.createContext();
export default Context;
```
*`createContext()` as shown above, provides access to both a Provider and Consumer Component. These are made available for use in both the ancestor and child components respectively*

```jsx
import Context from './Context';

function Ancestor() {
    return (
        <Context.Provider name="John">
            <Parent />
        </Context.Provider>
    )
}
```
```jsx
import Context from './Context';

function Child() {
    return (
        <Context.Consumer>
         {name => (
            <h1>`Hello, ${name}`</h1>
         )}
        </Context.Consumer>
    )
}
```
*Passing the `name` attribute through the `Context.Provider` means the value is only known to the components that consume the Context. Meaning, we have totally bypassed the Parent Component to get the value we needed to the Child*

## Hooks

### useState
- Can be used for integers, booleans, strings, and also arrays
- Always use a function in useState's update function if your state update depends on your previous state.
    - This means passing a function to the *state updater function* instead ensuring that the an accurate value is given at time of execution.

### useReducer

