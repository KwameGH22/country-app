# LOGIC IMPLEMENTATION GUIDE

## THEME TOGGLE IMPLEMENTATION LOGIC

### STEP 01
- Themeing logic will be implemented in the root component/file <code>App.jsx</code>.
So at the very top of the <code>App.jsx</code> file, import the useState package from react.
```js
    //App.jsx

    import {useState} from 'react';  //step o1
```

### STEP 02
- By importing the useState Hook form <code>'react'</code> the useState function: <code>useState()</code> becomes available 
in our App.jsx file for defining a <code>Theme State</code> variable and its corresponding <code>Theme State Updater Function</code>.
- our theme state variable will be called <code>darkTheme</code> and it corresponding updater function <code>setDarkTheme</code>.
- Our darkTheme state variable will hold a <code>Boolean value</code> to help in conditionally rendering the two alternate themes.
- with the help of array destructuring , the useState function hook is able to produce two values from a single function call. this makes it a higher order function. This is possible because calling the useState function calls another useReducer function which returns an array object of two elements. The first element is a variable and the second a function. So with an array returned destructuring the returned array into our preferred named elements becomes possible.
- So just after the App component function declaration, immediately after the opening curly braces of the function block, call the useState function with a boolean argument of <code>false</code> and destructure it into an array defined with the <code>darkTheme</code> and <code>setTheme</code> array elements.

```js
    //App.jsx

    import {useState} from 'react';  //step o1


    function App () {
        const [darkTheme, setDarkTheme] = useState(false);  // step 02

        return (
            <>
                UI JSX
            </>
        )
    }
```
