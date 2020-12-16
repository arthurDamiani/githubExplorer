import React from 'react'
import Box from '../Box'

import './repositoryBox.css'

function RepositoryBox(props) {
    return (
        <Box display='column' className='repository-box'>
            <h3>{props.name}</h3>
            <div className='repository-description'>
                <p>Linguagem: {props.language ? props.language : 'não identificada!'}</p>
                <p>Forks feitos: {props.forks}</p>
            </div>
            <a className='link' href={props.url}>Clique aqui para acessar o repositório no gitHub!</a>
        </Box>
    )
}

export default RepositoryBox
