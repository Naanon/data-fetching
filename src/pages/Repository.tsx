import { useQueryClient } from "react-query"
import { useParams } from "react-router-dom"
import { Repository } from "./Repositories"

export function Repository() {
  const params = useParams()
  const currentRepository = params['*'] as string

  const queryClient = useQueryClient()

  async function handleChangeRepositoryDescription() {
    const previousRepositories = queryClient.getQueryData<Repository[]>('repositories')

    if (previousRepositories) {
      const nextRepositories = previousRepositories.map((repository) => {
        if (repository.full_name === currentRepository) {
          return { ...repository, description: "Testando" }
        } else {
          return repository
        }
      })

      queryClient.setQueryData('repositories', nextRepositories)
    }
  }

  return (
    <>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar Descrição</button>
    </>
  )
}