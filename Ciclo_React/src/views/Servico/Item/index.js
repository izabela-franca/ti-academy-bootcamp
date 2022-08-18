import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

//Importando a aplicação back-end
import { api } from "../../../config/index";

export const Item = (props) => {
  //Recebendos os dados
  const [data, setData] = useState([]); //Array vazio para receber os dados

  const [id, setId] = useState(props.match.params.id);

  //Tratamento de erro
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  //Declarando função
  const getItens = async () => {
    await axios
      .get(api + "/servico/" + id + "/pedidos")
      .then((response) => {
        console.log(response.data.item); //traz os dados
        setData(response.data.item); //permite a manipulação dos dados
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Erro: sem conexão com a API",
        });
      });
  };

  //Chamando a função getServicos através do método useEffect()
  useEffect(() => {
    getItens();
  }, [id]);

  return (
    <div>
      <Container>
        <div>
          <h1>Pedidos dos serviço</h1>
        </div>
        {status.type === "error" ? (
          <Alert color="danger"> {status.message} </Alert>
        ) : (
          ""
        )}
        <Table striped>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.ServicoId}>
                <td>{item.PedidoId}</td>
                <td>{item.quantidade}</td>
                <td>{item.valor}</td>
                <td className="text-center/">
                  <Link
                    to={"/listar-pedido/"}
                    className="btn btn-outline-info btn-sm"
                  >
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
