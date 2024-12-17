# 1. Setup using React 18
- `npx create-react-app react-tutorial --use-npm`
- `cd react-tutorial`
- `npm install react@18 react-dom@18`
- `npm install web-vitals`
- `npm start`

# 2. Understanding the files and folders
1. React injects your app into **index.html** at this line:

- `<div id="root"></div>`

2. src folder
- index.js: The entry point of your app. React renders the root component (usually App).
- App.js: The main component of your React app. You’ll build your UI here.
- App.css: Basic styles for your app.
- reportWebVitals.js: For measuring performance (you can ignore it for now).

## First task: Clean up the boilerplate code

Delete unnecessary files: In the src/ folder, delete:

    App.test.js
    logo.svg
    reportWebVitals.js
    setupTests.js

- Update index.js: Remove references to reportWebVitals
- Update App.js: Replace the existing code with a simple Hello World:
- Remove unused styles in index.css and App.css if you like.
