import { useApi } from "./hooks/useApi"

type Repository = {
  full_name: string
  description: string
}

export function App() {
  const {
    data: repositories,
    isFetching
  } = useApi<Repository[]>('users/naanon/repos')

  return (
    <>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {repositories?.map((repository) => {
          return (
            <li key={repository.full_name}>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}