import React from 'react'

import './box.css'

function index(props) {
    return (
        <div className={`box ${props.display}`}>
            {props.children}
        </div>
    )
}

export default index
