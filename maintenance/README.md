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

### Tools
- Vitest
- React Testing Library

### Mocking
Confirming a component renders in a test environment is useful but not if it's supposed to include data from an API call or a database. 
This means we have to import these modules or functions into our test.
Though as you might suspect, storing test data in production or calling an API repeatedly in testing might cause some issues. (e.g. Exceeding Rate Limits, Additional Charges per API call, Added Database Maintenance requirements, etc.)

This is where `Mocking` enters. It allows us to simulate API calls and/or database queries to confirm that our code provides the output as expected. 



## Structure
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