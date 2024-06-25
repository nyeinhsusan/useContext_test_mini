import React, { useContext } from 'react'
import GrandChildOne from './GrandChildOne'
import context from '../context/ThemeContext'
const ChildOne = ({ title1 }) => {
    const contextData = useContext(context);
    console.log(contextData); //got data from context => we have created with createContext()=> ThemeContext.js
    
    return (
        <div>
            ChildOne| {title1}
            <div>
                <GrandChildOne newData={title1} />
            </div>
        </div>
    )
}

export default ChildOne
