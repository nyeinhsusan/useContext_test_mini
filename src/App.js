import React from 'react'
import ChildOne from './components/ChildOne'
import ChildTwo from './components/ChildTwo'
import ChildThree from './components/ChildThree'
import ThemeContext from "./context/ThemeContext"

const App = () => {
  return (
    <div>
      <ThemeContext.Provider value="this is testing for context only">
        <ChildOne title1="This is title for child One" />
        <ChildTwo title2="This is title for child Two" />
        <ChildThree title3="This is title for child Three" />
      </ThemeContext.Provider>

    </div>
  )
}

export default App
