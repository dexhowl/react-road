# Maintenance

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