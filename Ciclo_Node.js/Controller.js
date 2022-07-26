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


/*--------------Criando Inserções--------------*/

//Definindo rotas e configurando mensagens
app.get('/', function(req, res){
    res.send('Olá, mundo!')
});


//Inserindo novos registros
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

app.post('/clientes', async(req, res) => {
    await cliente.create(
        req.body
    ).then(function(){     
        return res.json({
            error: false,
            message: 'Cliente criado com sucesso.'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível se conectar.'
        })
    });
});

app.post('/pedidos', async(req, res) => {
    await pedido.create(
        req.body
    ).then(function(){     
        return res.json({
            error: false,
            message: 'Pedido criado com sucesso.'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível se conectar.'
        })
    });
});

app.post('/itempedidos', async(req, res) => {
    await itempedido.create(
            req.body
    ).then(function(){     
        return res.json({
            error: false,
            message: 'Item pedido criado com sucesso.'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível se conectar.'
        })
    });
});


/*--------------Criando Consultas--------------*/

//Retornando todos os serviços criados
app.get('/listaservicos', async(req, res) => {
    await servico.findAll({
        order: [['nome', 'ASC']]   
    }).then(function(servicos){
        res.json({servicos})
    });
});


//Retornando a quantidade de serviços existentes
app.get('/ofertaservicos', async(req, res) => {
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});


//Retornando um único serviço
app.get('/servico/:id/pedidos', async(req, res) => {
    await itempedido.findAll({
        where: {ServicoId: req.params.id}})
    .then(item => {
        return res.json({
            error: false,
            item
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});


//Retornando todos os clientes existentes
app.get('/listaclientes', async(req, res) => {
    await cliente.findAll({
        order: [['clienteDesde', 'ASC']]   
    }).then(function(clientes){
        res.json({clientes})
    });
});


//Retornando a quantidade de clientes existentes
app.get('/qntclientes', async(req, res) => {
    await cliente.count('id').then(function(clientes){
        res.json({clientes});
    });
});


//Retornando todos os itens pedidos existentes
app.get('/listaitenspedidos', async(req, res) => {
    await itempedido.findAll({
        order: [['valor', 'DESC']]   
    }).then(function(itempedidos){
        res.json({itempedidos})
    });
});


//Retornando a quantidade de pedidos realizados
app.get('/qntpedidos', async(req, res) => {
    await pedido.count('id').then(function(pedidos){
        res.json({pedidos});
    });
});


/*--------------Criando Updates--------------*/

//Realizando e retornando as alterações feitas
app.put('/atualizaservico', async(req, res) => {
    await servico.update(req.body, {
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});


/*--------------Criando portas de acesso--------------*/

let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});