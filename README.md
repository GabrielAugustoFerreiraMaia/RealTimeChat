# Chat em Tempo Real

Este é um projeto de chat em tempo real, inspirado em aplicativos de mensagens populares como WhatsApp, Facebook Messenger e Telegram. O backend é implementado em Node.js usando Express e Socket.IO, e o frontend é estilizado com Tailwind CSS.

## Funcionalidades

- **Mensagens em Tempo Real**: Envio e recebimento de mensagens instantaneamente entre todos os usuários conectados.
- **Estilização Moderna**: Interface inspirada em aplicativos de mensagens com um design responsivo e limpo utilizando Tailwind CSS.
- **Servidor Node.js**: Backend simples usando Express e Socket.IO para gerenciar conexões e eventos de chat.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (normalmente incluído com o Node.js)

## Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/chat-em-tempo-real.git
   cd chat-em-tempo-real
2. **Instale as dependências:**

   ```bash
   git clone https://github.com/seu-usuario/chat-em-tempo-real.git
   cd chat-em-tempo-real
3. **Compile o Tailwind CSS:**
    
    Se estiver utilizando Tailwind CSS com um processo de compilação, você pode precisar gerar o arquivo CSS antes de rodar o projeto:
   ```bash
   npx tailwindcss -i ./public/styles.css -o ./public/output.css --watch
## Executando o Projeto

1. **Inicie o servidor Node.js:**

   ```bash
   node server.js
2. **Abra o navegador:**

    Acesse http://localhost:3000 para ver o chat em tempo real.