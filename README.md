## React Follow along Tutorial from KG coding by Prashant Sir and from Bro code

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

## Reusable Components
    - Modularity: Components are modular, allowing for easy reuse across different parts of an application
    - Consistency: Reusing components ensures UI consistency and reduces the chance of discrepancies.
    - Efficiency: Reduces development time and effort by avoiding duplication of code
    - Maintainability: Changes made to a reused component reflect everywhere it's used, simplifying updates and bug fixes.

## Including Bootstrap
    - Responsive: Mobile-first design for all device sizes
    - Components: Pre-styled elements like buttons and navbars
    - Customizable: Modify default styles as needed
    - Cross-Browser: Consistent look across browsers
    - Open-source: Free with community support

## Fragments
    - What??
        - Allows grouping of multiple elements without DOM nodes
    - Why??
        - Return multiple elements without a wrapping parent
        - Cleaner DOM and consistent styling
    - How? Two Syntaxes:
        - <React Fragment> ... </ReactFragment>
        - Short <> .. </>

## Map Method
    - Purpose: Render lists from array data
    - JSX elements: Transform array items into JSX
    - Inline Rendering: Directly inside JSX {items.map(item => <li ke = {item.id}>{item.name} </li>)}

## Conditional-Rendering
    - Displaying content based on certain conditions
    - Allows for dynamic user interfaces

    - Methods
        - If-else statements: Choose between 2 blocks of content
        - Ternary operators: Quick way to choose btw 2 options
        - Logical operators: Useful for rendering content when a condition is true
    - Benefits
        - Enhances user experience
        - Reduces unnecessary rendering
        - Makes apps more interactive and responsive
## Passing Data via props
    - Props in react
        - Short for properties
        - Mechanism for passing data
        - Read-only by default
    - Usage
        - Pass data from parent to child component
        - Makes components reusable
        - Defined as attributes in JSX
    - Key-Points
        - Data flows one-way
        - Props are immutable
        - Used for communication between components

## Props
    - read only properties that are shared between components
    - A parent component can send data to a child component

## Click Events
    - An interaction when a user clicks a specific element
    - We can respond to clicks by passing a callback to the onClick event handler

## React Hooks
    - Special Function that allows functional components to use react features without writing class components(useState, useEffect, useContext, useReducer, useCallback and many more ..)
    
    - useState Hook - A react hook that allows the creation of a stateful variable and a SETTER function to update it's value in the virtual DOM.
    [name, setName]
## onChange Event Handler
    - Used primarily with form-elements
    - eg: <input>, <radio>, <select> etc etc
    - Triggers a function every time the value of the input changes
## Updater function
    - A function passed as an argument to setState() usually eg: setYear(arrow function)
    - Allow for safe updates based on the previous state
    - Used with multiple state updates and asyncronous functions
    - Good practise to use updater functions
    