import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
      <div className=''>
        <header className=''>
          <div>
            <h1 className=''>Where in the world</h1>
          </div>
          <div className=''>
            {darkMode? <IoMoonOutline className='' onClick={()=>setDarkMode(!darkMode)}/> : 
            <BsSun className='' onClick={()=> setDarkMode(!darkMode)}/>}
            <span className=''>{darkMode? 'Light Mode': 'Dark Mode'}</span>
          </div>
        </header>

      </div>
        
    </>
  )
}

export default App
