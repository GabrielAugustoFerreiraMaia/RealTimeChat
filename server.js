const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir arquivos estáticos
app.use(express.static('public'));

// Configuração do Socket.IO para eventos de conexão
io.on('connection', (socket) => {
    console.log('Usuário conectado:', socket.id);

    // Receber mensagem do cliente
    socket.on('chat message', (msg) => {
        // Enviar mensagem para todos os clientes conectados
        io.emit('chat message', msg);
    });

    // Evento de desconexão
    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
    });
});

// Iniciar servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});