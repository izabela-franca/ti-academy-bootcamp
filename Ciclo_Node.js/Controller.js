/*--------------Implementando inserções--------------*/

//Importando os módulos 
const express = require ('express');
const cors =  require ('cors');


//Iniciando a criação do Controller 
const app = express();
app.use(cors());


//Exibindo mensagems
app.get('/', function(req, res){
    res.send('Olá, mundo!')
});

app.get('/clientes', function(req, res){
    res.send('Seja bem-vindo(a) a ServicesTI.')
});

app.get('/servicos', function(req, res){
    res.send('Veja nossos serviços disponíveis.')
});

app.get('/pedidos', function(req, res){
    res.send('Pedidos: ')
})


//Criando uma porta de acesso
let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});


