import React from 'react'
import {StarBorderOutlined, CodeOutlined} from '@material-ui/icons'

import './userBox.css'

function UserBox(props) {
    return (
        <div className='user-box'>
            <img src={props.avatar} alt={props.userName} />
            <div>
                <h3>{props.userName}</h3>
                <div className='buttons-container'>
                    <a href='#' className='button'><CodeOutlined style={{ color: '#fff' }} /></a>
                    <a href='#' className='button'><StarBorderOutlined style={{ color: '#fff' }} /></a>
                </div>
            </div>
        </div>
    )
}

export default UserBox

