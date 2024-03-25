import  api  from './index'

export const getAllTodos = async () => {
    const { data } = await api.get('/todos')
    console.log(data)
    return data
   }
   //Con export const ... exportamos mas peticiones