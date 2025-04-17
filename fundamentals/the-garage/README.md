# The Garage
This displays a list of cars using React Components. There's no styling so far. 



## Debugging
```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "firefox",
        "request": "launch",
        "name": "Launch Firefox against localhost",
        "url": "http://localhost:5173/index.html",
        "webRoot": "${workspaceFolder}/fundamentals/the-garage/",
        "pathMappings": [
          {
            "url": "http://localhost:5173/src",
            "path": "${workspaceFolder}/fundamentals/the-garage/src"
          },
        ]
      }
    ]
  }

```
### Advanced Props Examples
Let's start this off by showing off our List and Item Components. 

```jsx

 function List(props) {
    return (
     <ul>
        {props.list.map((item) => (
            <Item key={item.id} car={item}/>   
          ))} 
     </ul>
    )
  }

function Item(props) {
    return (
        <li>
            <span>{props.car.year} </span>
            <span>{props.car.make} </span>
            <span>{props.car.model}: </span> 
            <span>{props.car.miles} Miles</span> 
        </li>
    )
  }

```

Now, lets try a few JS tricks to refactor. The idea is to find what style is best for your scenario. It's just a fact that not all refactors will be good ones. 


```jsx
//Nested Destructuring
function Item({car: {make, model, year, miles}}) {
    return (
        <li>
            <span>{year} </span>
            <span>{make} </span>
            <span>{model}: </span> 
            <span>{miles} Miles</span> 
        </li>
    )
  }
  // Alternate Syntax
  const Item = ({car: {make, model, year, miles}}) => (
        <li>
            <span>{year} </span>
            <span>{make} </span>
            <span>{model}: </span> 
            <span>{miles} Miles</span> 
        </li>
    )


//Spread
 function List({list}) {
  return (
    <ul>
      {list.map((item) => (
          <Item key={item.id} {...item}/>   
        ))} 
    </ul>
  )
}


//Rest
 function List({list}) {
    return (
     <ul>
        {list.map(({id, ...item}) => (
            <Item key={id} {...item}/>   
          ))} 
     </ul>
    )
  }

  // Item.jsx After implementing Rest/Spread in List Component.
 function Item({make, model, year, miles}) {
    return (
        <li>
            <span>{year} </span>
            <span>{make} </span>
            <span>{model}: </span> 
            <span>{miles} Miles</span> 
        </li>
    )
  }

```

**In General, it seems `Nested Destructuring` should be a good idea as it cleans up part of our code and it's easy to read/understand. Unfortunately, our function signature is now cluttered instead so there's a trade-off. This could get a bit more difficult to read as we add more props potentially. So, it's possible we could lose the entire preceived benefit of readability using this method.**

**On the other hand, when you see how `Spread and Rest` combined allow us to refactor Item.jsx, it seems obvious the choice we'll make though it does in a sense boil down to preference.**

#### Guidelines
- Destructuring inside the function signature should be a default behavior when possible. This is because we want the values inside the props object, not props itself. 
 - The exception would be if the props are going to the component we are in and just need to pass to the next Child Component in the Tree. In this case `spread` would be the better choice. 
 - On the other hand, Nested Destructuring specifically should only be used when it actually improve readability. 

- The Rest Operator allows us to split how we are passing our props. In `List` above, you should notice we are passing both the `id` of our object along with the "rest" (or remainder) of the values within our object. This is because we have to pass the id as a `key` not as a prop to the item component. This splitting means we pass no more or no less than the values we need. `let {...rest} = x`

- The Spread Operator while similar makes available ALL values including the `id` not just what's left over. `let x = {...spread}`

>[!TIP]
>Spreading puts all your energy (object values) into individual buckets to be used where needed.
>Resting is like consolidating what didn't get used back into one larger bucket for use somewhere else.