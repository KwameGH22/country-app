## ROUTE CONFIGURATION SETUP

## INTRODUCTION
- React-router-dom is a fully featured client and server-side routing library developed for React.
- It helps to create and navigate between different URLs that make up your web application.
- Assists in providing unique URLs for different components in your application and makes the UI easily shareable with other users.
### STEP 01
- Open the main.jsx file of your react project and import <code>CreateBrowserRoute</code> from <code>react-router-dom</code>.

```js
//main.js
import { BrowserRouter } from 'react-router-dom' //step 01


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)


```

### STEP 02
- invoke the BrowserRouter component and wrap around the App root component like this:
```js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter> // step 02
      <App />
    </BrowserRouter>
      
    
    
  </React.StrictMode>,
)

```

### STEP 03
- Navigate to the App.jsx file and then import the <code>Routes</code> and <code>Route</code> Components from react-router-dom.

```js
import {Routes, Route} from 'react-router-dom'; //step 03

```

### STEP 04
- Invoke the <code>Routes</code> component in the return block of the App.jsx component starting with the opening and closing Routes elements: <code>&ltRoutes&gt</code> <code>&lt/Routes&gt</code>:

```js
import {Routes, Route} from 'react-router-dom';

function App () {

    return (
   
      <Routes></Routes> //Step 04
   
  )
}

export default App
```
### STEP 05

- Within your <code><Route></code> <code>&lt/Routes&gt</code> start defining your unique routes by invoking the <code>&ltRoute&gt</code> <code>&lt/Route&gt</code> component which has earlier on been import from react-router-dom.

```js
import {Routes, Route} from 'react-router-dom';

function App () {

    return (
   
      <Routes>
        <Route></Route> //step 05
      </Routes> //Step 04
   
  )
}

export default App
```
### STEP 06

- To finish setting up our individual routes beginning with the root route, there is the need to invoke three (3) <code>&ltRoutes&gt</code> attributes namely; <code>path</code>, <code>loader</code> and <code>element</code>

### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00
### STEP 00


<code></code>