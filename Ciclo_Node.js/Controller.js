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
        //raw: true
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


//Retornando a quantidade de um único serviço
app.get('/servico/:id', async(req, res) => {
    await servico.findByPk(req.params.id)
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});


/*--------------Criando portas de acesso--------------*/

let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});