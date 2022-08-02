/*--------------Criando a camada de Controller--------------*/

//Importando os módulos 
const express = require ('express');
const cors =  require ('cors');
const models = require('./models'); 


//Iniciando a criação do Controller 
const app = express();
app.use(cors());


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
app.get('/servicos', async(req, res) => {
    await servico.create({
        nome: "Node.js",
        descricao: "Desenvolvimento de aplicação back-end",
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Serviço criado com sucesso!')
});

app.get('/clientes', async(req, res) => {
    await cliente.create({
        nome: "Izabela França",
        endereco: "Rua Marechal Deodoro",
        cidade: "São Carlos",
        uf: "SP",
        nascimento: 03/05/1991,
        clienteDesde: 15/02/2021,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Cliente criado com sucesso.')
});

app.get('/pedidos', async(req, res) => {
    await pedido.create({
        data: new Date(),
        createAt: new Date(),
        ClienteId: 1,
        updateAt: new Date()
    });
    res.send('Pedido criado com sucesso!')
});

/*
app.get('/itempedidos', async(req, res) => {
    await itempedido.create({
        ServicoId: 1,
        quantidade: 1,
        valor: 299.90,
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Item pedido criado com sucesso!')
});*/


//Criando uma porta de acesso
let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});




