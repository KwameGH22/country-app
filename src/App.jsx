import { useState } from 'react'

import './App.css'

function App() {
  const [{darkTheme, setDarkTheme}] = useState(false);

  return (
    <>
      <div className='app-container'>
        <header className='header-container'>
          <div>
            <h1 className=''>Where in the world</h1>
          </div>
          <div className=''>
            {darkTheme? <IoMoonOutline className='' onClick={()=>setDarkMode(!darkTheme)}/> : 
            <BsSun className='' onClick={()=> setDarkTheme(!darkTheme)}/>}
            <span className=''>{darkTheme? 'Light Mode': 'Dark Mode'}</span>
          </div>
        </header>

      </div>
        
    </>
  )
}

export default App
