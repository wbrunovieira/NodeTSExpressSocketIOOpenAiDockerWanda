import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

// Criação da aplicação Express
const app = express();

// Criação do servidor HTTP a partir da aplicação Express
const server = http.createServer(app);

// Inicialização do Socket.io com o servidor HTTP
const io = new Server(server);

// Definição de uma rota básica para o Express
app.get('/', (req, res) => {
  res.send('ae Brunao mais um servidor http rodando!');
});

// Manipulação de eventos do Socket.io
io.on('connection', (socket) => {
  console.log('boa Brunao');

  socket.on('disconnect', () => {
    console.log('eta caiu');
  });
});

// Inicialização do servidor na porta 8000
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
