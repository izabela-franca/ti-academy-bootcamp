import {Container} from "reactstrap";
import {Link} from "react-router-dom";

export const Home = () => {
    return(
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página Inicial</h1>
                    </div>
                    <div className="p-2">
                        <Link to = "/listar-clientes" className="m-auto btn btn-outline-info btn-sm">Clientes</Link>
                    </div>
                    <div className="p-2">
                        <Link to = "/listar-pedidos" className="m-auto btn btn-outline-info btn-sm">Pedidos</Link>
                    </div>
                    <div className="p-2">
                        <Link to = "/listar-servicos" className="m-auto btn btn-outline-info btn-sm">Serviços</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}