import React from 'react'
import SearchAndFilter from '../components/SearchAndFilter'



const Home = () => {
    



  return (
    <main className="home xl:pt-16">
      <div className="container grid xl:gap-16">
        <SearchAndFilter/>
        <Countries/>
      </div>
    </main>
  )
}

export default Home
