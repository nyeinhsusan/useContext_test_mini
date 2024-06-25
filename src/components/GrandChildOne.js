import React, { useContext } from 'react'
import context from '../context/ThemeContext'

const GrandChildOne = ({newData}) => {
    const contextData = useContext(context);
    console.log(contextData + "from grand child");
  return (
    <div>
      GrandChildOne|{newData}
    </div>
  )
}

export default GrandChildOne
