## ROUTE CONFIGURATION SETUP

## INTRODUCTION
- React-router-dom is a fully featured client and server-side routing library developed for React.
- It helps to create and navigate between different URLs that make up your web application.
- Assists in providing unique URLs for different components in your application and makes the UI easily shareable with other users.
- In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server.
- When the user clicks a link, it starts the process all over again for a new page.
- Client side routing allows your app to update the URL from a link click without making another request for another document from the server.
- Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
- This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page.
- It also enables more dynamic user experiences with things like animation.


### STEP 01

- the react-router-dom version used in this project is v6.21.3.  
- Open the main.jsx file of your react project and the top of the file import the following components: <code>CreateBrowserRouter</code>, <code>RouterProvider</code>, <code>Route</code> and <code>CreateRoutesFromElements</code> from <code>react-router-dom</code>.

```js
//main.js
import {CreateBrowserRouter, RouterProvider,Route, CreateRoutesFromElements } from 'react-router-dom' //step 01


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

- Within your <<code>Route</code>/> <code>&lt/Routes`&gt`</code> start defining your unique routes by invoking the <code>&ltRoute&gt</code> <code>&lt/Route&gt</code> component which has earlier on been import from react-router-dom.

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