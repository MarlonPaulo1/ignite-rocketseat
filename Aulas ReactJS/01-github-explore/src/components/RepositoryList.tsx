import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
import { useEffect, useState } from "react"

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repositories, steRepositories] = useState<Repository[]>([])

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