import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
import { useEffect, useState } from "react"

// https: //api.github.com/user/marlonpaulo1

const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, steRepositories] = useState([])

    useEffect(() => {
        fetch('https: //api.github.com/user/marlonpaulo1/repos')
            .then(response => response.json())
            .then(data => steRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              <RepositoryItem repository={repository} />  
              <RepositoryItem repository={repository} />  
              <RepositoryItem repository={repository} />  
              <RepositoryItem repository={repository} />  
            </ul>
        </section>
    )
}