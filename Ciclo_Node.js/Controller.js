/*--------------Criando a camada de Controller--------------*/

//Importando os módulos 
const express = require ('express');
const cors =  require ('cors');
const models = require('./models'); 


//Iniciando a criação do Controller 
const app = express();
app.use(cors());
app.use(express.json());    //Configurando para que as informações sejam passadas em formato Json


//Criando variáveis para se associarem a cada classe
let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;


//Definindo rotas e configurando mensagens
app.get('/', function(req, res){
    res.send('Olá, mundo!')
});


//Definindo rotas e inserindo novos registros
app.post('/servicos', async(req, res) => {
    await servico.create(
        req.body    //Requisição externa
    ).then(function(){      //Verificação de erro
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso!'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível se conectar.'
        })
    });
});

app.get('/clientes', async(req, res) => {
    await cliente.create({
        nome: "Izabela França",
        endereco: "Rua Marechal Deodoro",
        cidade: "São Carlos",
        uf: "SP",
        nascimento: '1991-05/03',
        clienteDesde: '2021-02/15',
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Cliente criado com sucesso.')
});

app.get('/pedidos', async(req, res) => {
    await pedido.create({
        data: '2022-08-02',
        createAt: new Date(),
        ClienteId: 2,
        updateAt: new Date()
    });
    res.send('Pedido criado com sucesso!')
});

app.get('/itempedidos', async(req, res) => {
    await itempedido.create({
        PedidoId: 5,
        ServicoId: 6,
        quantidade: 2,
        valor: 199.90,
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Item pedido criado com sucesso!')
});


//Criando uma porta de acesso
let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});




