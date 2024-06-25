import React from 'react'
import GrandChildThree from './GrandChildThree'

const ChildThree = ({ title3 }) => {
    return (
        <div>
            ChildThree | {title3}
            <div>
                <GrandChildThree data3={title3} />
            </div>
        </div>
    )
}

export default ChildThree
