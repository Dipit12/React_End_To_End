## React Follow along Tutorial from KG coding by Prashant Sir 

## What is React??
    - JS library to build Dynamic and interactive user interfaces
    - Developed at Facebook in 2011
    - Currently most widely used JS library for front-end development
    - Used to create single page applications(SAP)

## Working of DOM
    - Browser takes HTML and create DOM
    - JS helps us modify DOM based on user actions or events
    - In big applications, Working with DOM becomes complicated
## Problems with JS
    - React has a simples mental model
    - JS is cumbersome
    - JS is error-prone
    - JS is hard to maintain
## Working of React
    - No need to worry about querying and updating DOM
    - React create a webpage with small and reusable components
    - React will take care of creating and updating DOM elements
    - IT saves a lot of time

## Introduction to Components
    - Components help us write reusable, modular and better organized code
    - React Application is a tree of components with App component as the root bringing everything together

## Creating a React App
    - Official tool is CRA(Create React App)
    - Vite is a modern tool to create React Project
    - Vite produces Quick and Small bundle size
    - Use npm run dev to launch dev server

## Project Structure
    - node_modules/ has all the installed node packages
    - public/Directory: Contains static files that dont change
    - src/Directory: Main folder for the react code
        - Components: Reusable parts of the UI, like buttons or headers
        - assets: Images,fonts and other static files
        - styles: CSS or stylesheets
    - package.json contains information about this project like name, version, dependencies on other react packages
    - vite.config.js contains vite config

# File extensions
    - JS
        - Stands for JavaScript
        - Contains regulas JS code
        - User for general logic and components
    - JSX
        - Stands for Javascript XML
        - Combines Javascript with HTML like tags
        - Makes it easier to design UI components

# Class Vs Function Components
    - Class Components
        - Stateful: Can manage state
        - Lifecycle: Access to lifecycle method
        - Verbose: More boilerplate code
        - Not preferred anymore
    - Functional Components
        - Initially stateless
        - Can use Hooks for state and effects
        - Simpler and more concise
        - More popular
# What is JSX?
    - Definition: JSX determines how the UI will look whenever the component is used
    - Not HTML: Though it resembles HTML, you're actually writing JSX, which stands for javascript XML
    - Conversion: JSX gets converted to regular JS
    - Babeljs.io/repl is a tool that allows you to see how JSX is transformed into JS

## Exporting Components
    - Enables the use of a component in other parts
    - Default export: Allows exporting a single component as the default from a module
    - Named export: Allows exporting multiple items from a module
    - Importing: To use an exported component, you need to import it in the destination using import syntax

## Other Important points
    - Naming: Must be capitalized - Lowercase for default HTML
    - HTML: Unlike vanilla JS where you cant directly write HTML, In React, you can embed HTML-like syntax using JSX
    - CSS: In react, CSS can be directly imported into component files, allowing for modular and component-specific styling

## Dynamic Components
    - Dynamic Content: JSX allows the creation of dynamic and interactive UI components
    - JavaScript Expressions: Using {}, we can embed any JS expression directly with the JSX. This includes variables, function calls, and more.