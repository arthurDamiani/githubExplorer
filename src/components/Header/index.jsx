import React from 'react'
import {ArrowBack} from '@material-ui/icons'

import './header.css'

function Header(props) {
    return (
        <header className={`header ${props.page}`}>
            {props.page != 'landing' ? <a href='/' className='back'><ArrowBack /></a> : ''}           
            <h2>{props.content}</h2>
            {props.children}
        </header>
    )
}

export default Header
