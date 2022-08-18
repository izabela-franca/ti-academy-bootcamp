import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

//Importando a aplicação back-end
import { api } from "../../../config/index";

export const ListarServicos = () => {
  //Recebendos os dados
  const [data, setData] = useState([]); //Array vazio para receber os dados

  //Tratamento de erro
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  //Declarando função
  const getServicos = async () => {
    await axios
      .get(api + "/listaservicos")
      .then((response) => {
        console.log(response.data.servicos); //traz os dados
        setData(response.data.servicos); //permite a manipulação dos dados
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message: 'Erro: sem conexão com a API'
        })
      });
  };

  //Chamando a função getServicos através do método useEffect()
  useEffect(() => {
    getServicos();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <h1>Visualizar informações do serviço</h1>
        </div>
        {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.descricao}</td>
                <td className="text-center/">
                  <Link to={"/listar-pedido/"+item.id}
                  className="btn btn-outline-info btn-sm">
                    Consultar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
