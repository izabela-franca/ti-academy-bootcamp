import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";

//Importando a aplicação back-end
import { api } from "../../../config/index";

export const ListarServicos = () => {
  //Recebendos os dados
  const [data, setData] = useState([]); //Array vazio para receber os dados

  //Declarando função
  const getServicos = async () => {
    await axios
      .get(api + "/listaservicos")
      .then((response) => {
        console.log(response.data.servicos); //traz os dados
        setData(response.data.servicos); //permite a manipulação dos dados
      })
      .catch(() => {
        console.log("Erro: não foi possível se conectar com a API");
      });
  };

  //Chamando a função getServicos através do método useEffect()
  useEffect(() => {
    getServicos();
  }, []);

  return (
    <div>
      <Container>
        <h1>Visualizar informações do serviço</h1>
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
                <td className="text-center/">Botão</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
