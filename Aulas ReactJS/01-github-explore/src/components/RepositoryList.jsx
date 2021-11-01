import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
import { useEffect, useState } from "react"

// https: //api.github.com/user/marlonpaulo1

export function RepositoryList() {
    const [repositories, steRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/MarlonPaulo1/repos')
            .then(response => response.json())
            .then(data => steRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              {repositories.map(repository => {
                  return <RepositoryItem key={repository.name} repository={repository} />  
              })}  
            </ul>
        </section>
    )
}