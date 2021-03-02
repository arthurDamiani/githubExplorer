import React, { useState } from 'react'
import {TextField, InputAdornment, Button} from '@material-ui/core'
import {Search} from '@material-ui/icons'
import Header from '../../components/Header'
import ContentContainer from '../../components/ContentContainer'
import UserBox from '../../components/UserBox'
import api from '../../services/api'

import './landing.css'

function Landing() {
    const [user, setUser] = useState('')
    const [result, setResult] = useState([])

    async function searchUser(e) {
        e.preventDefault()
        await api.get(user)
            .then((response) => {
                setResult(response.data)
            })
            .catch(() => {alert('Nenhum usuário foi encontrado!')})
    }

    return (
        <div>
            <Header content='Procure por usuários no gitHub pelo nome de usuário!' page='landing'>
                <form onSubmit={searchUser}>
                    <TextField
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Search color='primary' className='logo-input' />
                                </InputAdornment>
                            )
                        }}
                        placeholder='Digite aqui'
                        variant='outlined'
                        size='small'
                        className='input'
                        type='text'
                    />
                    <div className="search-button">
                        <Button type='submit' variant='contained' color='secondary'>Pesquisar</Button>
                    </div>
                </form>
            </Header>
            <ContentContainer>
                {result.length === 0 ? '' : 
                    <UserBox 
                        userName={result.login} 
                        avatar={result.avatar_url} 
                        name={result.name} 
                        email={result.email}
                        followers={result.followers} 
                        following={result.following}
                        publicRepos={result.public_repos}
                        bio={result.bio}
                    />
                }
            </ContentContainer>
        </div>
    )
}

export default Landing
