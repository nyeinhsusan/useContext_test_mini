import React from 'react'
import GrandChildTwo from './GrandChildTwo'

const ChildTwo = ({ title2 }) => {
    return (
        <div>
            ChildTwo|{title2}
            <div>
                <GrandChildTwo data2={title2} />
            </div>
        </div>
    )
}

export default ChildTwo
