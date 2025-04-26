# Styling

## CSS in React
- Relatively straight-forward like defining any other stylesheet. 
- The main difference is our files are imported into the `main.jsx` and `App.jsx` instead of being applied to the `index.html` header.
- We assign classes as always but we have to use `className` as our attribute to ensure React understands what we are trying to do.  

Defining styles
```css
.container {
    height: 100vw;
    padding: 20px;
    background: #83a4d4;
    background: linear-gradient(to left, #b6fbff, #83a4d4);
    color: #171212;
}

.headline-primary {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: 2px;

}

```
Importing stylesheets
```jsx
import * as React from 'react'
...
import "./App.css"
```

Applying classes
```html
<div className='container'>
<h1 className="headline-primary">My Hacker Stories</h1>
```

## CSS Modules
- Requires a few changes to our syntax within our React Components
- Redefines how we import our stylesheets, apply our classes, and name our css files. 
- Does not require changes actual css itself

Importing stylesheets
```jsx
import * as React from 'react'
...
import styles from "./App.module.css"
```

Applying classes
```jsx
<div className={{styles.container}}>
<h1 className={{styles.headlinePrimary}}>My Hacker Stories</h1>
```

*You'll notice we've imported our stylesheet into it's own object for later use and we are no longer passing a string to our className. This styling strategy means each class we define inside our CSS files are accessible within this new object. It also means we have to change the naming convention of our classes to comply with the conventions of JavaScript Objects. `headline-primary` became `headlinePrimary` *

