# React Road

This is a place to document my journey learning React using a book I found on Amazon.

## Description

I'm just experimenting as I follow tutorials and build projects to get a better understanding of how React works and what it's capable of doing for me what I can build in the future. The goal is eventually to go back to Next.js and/or Laravel with Inertia but I want to do it with a full understanding as oppose to letting the frameworks do most of the work. My hope is that this book with help me do that as I walk through it step by step. 

## Learning React
Documentation: [![React][React.js]][React-url]

Tooling is provided by [![Vite][Vite.js]][Vite-url]

## Progress

- [x] Fundamentals
- [ ] Roadmap
- [ ] Styling
- [ ] Maintenance
- [ ] Advanced
- [ ] Deployment


### Fundamentals

#### Components

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
#### Handlers
* Bubbling
    * event.stopPropagation is a preventative measure against bubbling. Keeping the developer in control of how the browser responds to user interactions. 

#### Props (Properties)
- This is the vehicle by which all data is passed down the compenent tree from the root (ancestor component) to the leaves (components with no children)
- Props are passed between compenents within an immutable JavaScript object. 
- Though it is possible to derive new data based on the props passed into a component via computation, values of the props themselves should not be manipulated directly. (Short ver. Props are Read-Only).

> [!WARNING]
> Props cannot be passed from child components back up the component tree to a parent or ancestor.


---
#### State
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

#### Strict Mode
- This is a development-only feature that provides some additional checks when building React Apps. 
- All Components, Effects, and Ref Callbacks are run twice in development when this is enabled
- There are also checks implemented for deprecated APIs

> [!WARNING]
> If you are trying to track the rendering of your components via `console.log`, seeing them twice in development does not mean they will render twice in production.  
        

### Roadmap



### Styling



### Maintenance
#### Structure
The majority of the projects within this repository should be structured as follows:

```
project-name/
├── public/                # Static assets
├── node_modules/          # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── styles/            # CSS or SCSS files
│   │   └── App.css        # Main stylesheet
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   └── assets/            # Images or other assets
├── .gitignore             # Git Ignore File
├── eslint.config.js       # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```
- Cramming a bunch of components into one file like App.jsx would be a mistake. It's best to split things up when files get too cluttered and/or complex. 



### Advanced



### Deployment




## Authors

[@DexHowl](https://twitter.com/dexhowl)

## License

This project is licensed under the MIT License.

## Acknowledgments

The Road to Learn React by rwieruch


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Vite.js]: https://img.shields.io/badge/Vite-A020F0?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vite.dev/