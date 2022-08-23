import {useEffect, useState} from 'react'
import {axios} from 'axios'
import {api} from '../../../config/index'

export const ListarClientes = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getClientes = async () => {
        await axios.get(api+"/listaclientes")
        .then((response) => {
            console.log(response.data.cli)
            setData(response.data.cli)
        })
        .catch(()=> {
            console.log("Erro: sem conexão com a API.")
        })
    };

    //Chamando função getClientes
    useEffect(()=> {
        getClientes();
    }, [])

    return(
        <div>
            <h1>Lista de Clientes</h1>
        </div>
    )
}
