import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './views/Home';
import {ListarClientes} from './views/Cliente/Listar';
import {ListarPedidos} from './views/Pedido/Listar';
import {ListarServicos} from './views/Servico/Listar';
import {Menu} from './Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/listar-clientes' element={<ListarClientes/>}/>
        <Route path = '/listar-pedidos' element={<ListarPedidos/>}/>
        <Route path = '/listar-servicos' element={<ListarServicos/>}/>
      </Routes>
    </div>
  );
}

export default App;
