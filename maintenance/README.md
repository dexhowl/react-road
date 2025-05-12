# Maintenance

## Testing
- End-to-End
    - Slowest
    - Verifies the flow of user interactions through the system like logging in or submitting a form.
    - In eCommerce, you'd be confirming the user is able to store items in the cart and succesfully checkout. 
- Integration
    - Checks the lines of communication between different parts of a system
    - Could be used to verify that a component is passing the expected `props`.
    - Or that an API handler is working properly. 
- Unit
    - Fastest
    - Tests occur in isolation and are typically the easiers of all to write.
    - Allow for testing on a more granular level like individual functions or components
        - When testing functions we provide input and verify the returned value (or output) is as expected.
        - When testing components we check rendering, props, callback handlers.
- Snapshot
    - Lightweight
    - Allows us to confirm spot when we accidentally make changes to the DOM.
    - Stores copy of HTML within the project from a single point in time. 
        - Can be updated when changes to the DOM are intended.

> [!CAUTION]
> Snapshots should ONLY be used for simple components that are not commonly updated. 

    
### Test Files
When using tools like Vitest, you'll notice that it automatically scans your project for test files. 
These files will typically end with `*.test.jsx` in React. 

In spite of Vitest's ability to automatically locate these files, it's a good practice to put them all in a predictable location so the entire team knows where to expect to find them. 

In large projects it may be a good idea to have a dedicated `_tests_` folder though it's not required. 

### Suites, Cases, and Assertions
- A Test Case is an individual test that can be created using the `test` function or `it` alias. They are generally used to verify and individual function works. 
- A Test Suite, on the other hand, is a collection of tests created using the `describe` function. For example, a single component/function can behave differently based on state or props. Grouping all tests related to that item make it simpler to keep results organized.
- Assertions are the expectations we set within our test cases. The idea of an assertion is to "declare" what the result of your function should be or the expected behavior. Our testing tools like Vitest then tell us if we are wrong or right about the result.  

### Tools
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/)

### Mocking
Confirming a component renders in a test environment is useful but not if it's supposed to include data from an API call or a database. 
This means we have to import these modules or functions into our test.
Though as you might suspect, storing test data in production or calling an API repeatedly in testing might cause some issues. (e.g. Exceeding Rate Limits, Additional Charges per API call, Added Database Maintenance requirements, etc.)

This is where `Mocking` enters. It allows us to simulate API calls and/or database queries to confirm that our code provides the output as expected. 
The goal of Mocking is the confirm OUR code works, not the third party entity. When something is mocked, we are essentially replacing it with our own simulated version.

Running our database queries or api calls up against a mocked version of these means we can fully test our functions without any adverse side effects. 
An `INSERT` on a mocked DB never actually reaches our database, production or otherwise. 
Same with a mocked API, we can build a GET request and response and test whether or not the rest of our application's functions are about to display or process the data as expected. 

All this with Zero impact to these external tools.

## Structure
The majority of the projects within this repository should be structured as follows:

```
project-name/
├── public/                # Static assets
├── node_modules/          # Dependecies
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── styles/            # CSS or SCSS files
│   │   └── App.css        # Main stylesheet
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   └── assets/            # Images or other assets
├── tests/                 # Testing suite
├── .gitignore             # Git Ignore File
├── eslint.config.js       # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```
- Cramming a bunch of components into one file like App.jsx would be a mistake. It's best to split things up when files get too cluttered and/or complex. 