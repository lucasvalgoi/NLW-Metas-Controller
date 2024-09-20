# 🚀 Projeto Gerenciador de Metas
Neste repositório, apresento o projeto desenvolvido por mim durante o evento Next Level Week (NLW) - Pocket JS da Rocketseat, na trilha iniciante usando as Tecnologias JavaScript e Node.JS!

## 📝 Intuito e funcionalidades do Projeto
O objetivo com o desenvolvimento deste projeto, era de que fosse criado um Gerenciador de Metas via terminal, com diversas funcionalidades, dentre elas são:
   - Criar/Cadastrar Metas;
   - Listar Metas;
   - Metas Realizadas;
   - Metas Abertas;
   - Deletar Metas;
   - Marcar e Desmarcar Metas;
   - Sistema de mensagens;
   - Persistência de Dados: Carregar e Salvar dados (as metas);

### 📚 Aprendizados
* Os principais aprendizados durante esse projeto foram:
  - Uso do JavaScript no terminal com o Node.JS
     - Módulo Nativo do Node - FS (File System)
     - Leitura e Escrita de arquivos
  - Manipulação & Estrutura de Dados
  - Pacote NPM (Inquirer)

## 💻 Começando o projeto
- Comece fazendo um **git clone** do meu projeto:
   - `$ git clone https://github.com/lucasvalgoi/NLW-Metas-Controller.git`
 - Agora, é necessário instalar via Terminal o pacote NPM da Biblioteca `inquirer` para criar prompts interativos
   - Use o comando `$ npm install inquirer` no terminal para instalar as dependências
   - Após a instalação das dependências, crie uma variável definindo as funcionalidades que serão necessárias para o projeto.
          - Para definir as funções que usaremos para o projeto e importá-las do Inquirer, basta criar a seguinte variável:
  ```ruby
  const { select, input, checkbox } = require('@inquirer/prompts')
  ```

- É necessário usar um módulo nativo do NODE, o FS (File System)
   - Crie a seguinte variável para importar as promises do fs:
  ```ruby
  const fs = require("fs").promises
  ```

## 👦 Desenvolvido por: Lucas Luis Valgoi
#### 📖 LICENÇA
Projeto sob MIT License
