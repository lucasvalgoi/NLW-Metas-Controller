# Projeto Gerenciador de Metas

## Começando o projeto:
- Para começar o projeto, é necessário instalar via NPM o pacote da Biblioteca `inquirer` para criar prompts interativos
     -> Use o comando `npm install inquirer` no terminal para instalar as dependências
     -> Após a instalação das dependências, crie uma variável definindo as funcionalidades que serão necessárias para o projeto.
          - Para definir as funções que usaremos para o projeto e importá-las do Inquirer, basta criar a seguinte variável `const { select, input, checkbox } = require('@inquirer/prompts')`

- É necessário usar um módulo nativo do NODE, o FS (File System)
     -> Crie a seguinte variável `const fs = require("fs").promises` para importar as promises do fs