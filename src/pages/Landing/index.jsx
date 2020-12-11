import React, { useEffect, useState } from 'react'
import {TextField, InputAdornment} from '@material-ui/core'
import {Search} from '@material-ui/icons'
import UserBox from '../../components/UserBox'
import api from '../../services/api'

import './landing.css'

function Landing() {
    const [user, setUser] = useState('')
    
    const [result, setResult] = useState([])

    async function searchUser(e) {
        e.preventDefault()
        const response = await api.get(user)
        setResult(response.data)
    }

    return (
        <div>
            <header className='header-container'>
                <h2>Procure por usuários do gitHub!</h2>
                <form onSubmit={(e) => searchUser(e)}>
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
                        placeholder='Buscar usuário' 
                        variant='outlined'
                        size='small'
                        className='input'
                        type='text'
                    />
                </form>
            </header>
            <div className={result ? 'hidden' : 'user-container'}>
                <UserBox userName={result.login} avatar={result.avatar_url}/>
            </div>
        </div>
    )
}

export default Landing
