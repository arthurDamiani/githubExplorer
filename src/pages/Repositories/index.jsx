import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import ContentContainer from '../../components/ContentContainer'
import RepositoryBox from '../../components/RepositoryBox'
import api from '../../services/api'

function Repositories() {
    const {username} = useParams()
    const [repositories, setRepositories] = useState([])

    async function showRepositories() {
        await api.get(`${username}/repos`)
            .then((response) => {
                setRepositories(response.data)
            })
    }

    useEffect(() => showRepositories())

    return (
        <div>
            <Header page='repositories' content={`Repositórios de ${username}`} />
            <ContentContainer>
                {repositories.length === 0 ? <h3>{username} não tem nenhum repositório público!</h3> : repositories.map((repository, index) => {
                    return <RepositoryBox key={index} name={repository.name} language={repository.language} forks={repository.forks} url={repository.html_url} />
                })}
            </ContentContainer>
        </div>
    )
}

export default Repositories
