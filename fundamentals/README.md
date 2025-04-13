# Fundamentals

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

---
## Handlers
* Bubbling
    * event.stopPropagation is a preventative measure against bubbling. Keeping the developer in control of how the browser responds to user interactions. 

## Props (Properties)
- This is the vehicle by which all data is passed down the compenent tree from the root (ancestor component) to the leaves (components with no children).
- Props are passed between compenents within an immutable JavaScript object.
- Though it is possible to derive new data based on the props passed into a component via computation, values of the props themselves should not be manipulated directly. (Short ver. Props are Read-Only).

- Exploring the commits within the `props` directory, you'll see how we started without props and the reasons they were added. 
- I believe the idea is to ensures the data within our components remains dynamic. 

***Do props increase maintainablility since we don't need to make changes in more than one place when a value changes?***

***Maybe this is an example of the DRY principle at work? You pass data using props and state to avoid duplicating knowledge throughout the code.***

> [!WARNING]
> Props cannot be passed from child components back up the component tree to a parent or ancestor.


---
## State
- This is the "engine" that allows interactivity with React Components. State is typically updated via a event handler.
- Stateful values are mutable unlike props. Though, stateful values can be passed to child components as props as well making them an exception to the rule of immutability to props. 
    - This only applies when a function applies the mutation to state and a re-rendering occurs. 
```jsx
const [count, setCount()] = React.useState(0);
```
*In this scenario `count` is the "stateful" variable that we want to allow the user to manipulate while `setCount()` is the function that allows plays to main roll in facilitating that value manipulation.*



- Conditional Rendering allows us to show or hide content based on state as well.
```jsx
const [isVisible, setVisible] = React.useState(true);

return (
    ...
    {isVisible ? <Hello name={user} /> : null}
)
```
- It is also possible to pass stateful values to props of child components that will update from the parent via a callback. 
- A change in state for the parent forces a re-rendering of the parent component in addition to all children and as such props are reloaded with the new values. 

Sequencing 
- Render &rarr; Interaction &rarr; Update &rarr; Re-Render

## Strict Mode
- This is a development-only feature that provides some additional checks when building React Apps. 
- All Components, Effects, and Ref Callbacks are run twice in development when this is enabled
- There are also checks implemented for deprecated APIs

> [!WARNING]
> If you are trying to track the rendering of your components via `console.log`, seeing them twice in development does not mean they will render twice in production.  