import React from 'react'
import Box from '../Box'
import {StarBorderOutlined, CodeOutlined} from '@material-ui/icons'

import './userBox.css'

function UserBox(props) {
    return (
        <Box>
            <img className='avatar' src={props.avatar} alt={props.name ? props.name : props.userName} />
            <div className='user-description'>
                <h3>{props.userName}</h3>
                {props.name ? <p>Nome: {props.name}</p> : ''}
                {props.email ? <p>Email: {props.email}</p> : ''}
                {props.bio ? <p>Bio: {props.bio}</p> : ''}
                <p>Repositórios públicos: {props.publicRepos}</p>
                <p>Seguidores: {props.followers}</p>
                <p>Seguindo: {props.following}</p>
                <div className='buttons-container'>
                    <a href={`/repositories/${props.userName}`} className='button'>
                        <CodeOutlined  />
                        Repositórios
                    </a>
                    <a href={`/favorites/${props.userName}`} className='button'>
                        <StarBorderOutlined />
                        Favoritos
                    </a>
                </div>
            </div>
        </Box>
    )
}

export default UserBox

