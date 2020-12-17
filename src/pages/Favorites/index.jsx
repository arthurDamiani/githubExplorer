import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import RepositoryBox from '../../components/RepositoryBox'
import Header from '../../components/Header'
import ContentContainer from '../../components/ContentContainer'
import api from '../../services/api'

function Repositories() {
    const {username} = useParams()
    const [favorites, setFavorites] = useState([])

    async function showFavorites() {
        await api.get(`${username}/starred`)
            .then((response) => {
                setFavorites(response.data)
            })
    }

    useEffect(() => showFavorites())

    return (
        <div>
            <Header content={`Repositórios favoritados de ${username}!`} page='favorites'/>
            <ContentContainer>
                {favorites.length === 0 ? <h3>{username} não tem repositórios favoritados!</h3> : favorites.map((favorite, index) => {
                    return <RepositoryBox 
                                key={index} 
                                name={favorite.name} 
                                language={favorite.language} 
                                forks={favorite.forks} 
                                url={favorite.html_url}
                                cloneUrl={favorite.clone_url}  
                                
                            />
                })}
            </ContentContainer>
        </div>
    )
}

export default Repositories
