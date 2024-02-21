import { useQuery } from "react-query"
import axios from "axios"
import { Link } from "react-router-dom"
// import { useApi } from "./hooks/useApi"

export type RepositoryProps = {
  full_name: string
  description: string
}

export function Repositories() {
  const { data: repositories, isFetching } = useQuery<RepositoryProps[]>('repositories', async () => {
    const response = await axios.get('https://api.github.com/users/naanon/repos')

    return response.data
  }, {
    staleTime: 1000 * 60
  })
  // const {
  // data: repositories,
  //   isFetching
  // } = useApi<Repository[]>('users/naanon/repos')

  return (
    <>
      <ul>
        {(isFetching ? <p>Carregando...</p> :
          (repositories?.map((repository) => {
            return (
              <li key={repository.full_name}>
                <Link
                  to={`repository/${repository.full_name}`}
                  target="_blank"
                >
                  {repository.full_name}
                </Link>
                <p>{repository.description}</p>
              </li>
            )
          }))
        )}
      </ul>
    </>
  )
}



31989785833