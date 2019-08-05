import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import MainNav from './Components/MainNav/MainNav'
import UserHome from './Components/UserHome/UserHome'

function App() {
    return (
        <div className="App">
            <MainNav />
            <LandingPage />

            {/* After user is past landing page or loggin in... */}

            {/* <UserHome /> */}
        </div>
    )
}

export default App
