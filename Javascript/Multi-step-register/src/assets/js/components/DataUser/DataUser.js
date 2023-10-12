import User from '../../shared/User'
import List from '../../shared/List'

const DataUser = () => {
  const topics = ['Variables de entorno', 'Entornos e ejecución']
  const userData = [
    {
      data: 'name',
      content: 'Emily Johnson'
    },
    {
      data: 'email',
      content: 'emily@emilyjohnsonstl.com'
    }
  ]

  return (`
    <div class="grid gap-8">
      ${User(userData)}
      ${List(topics)}
    </div>
  `)
}

export default DataUser
