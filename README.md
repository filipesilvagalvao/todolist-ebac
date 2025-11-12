# TodoList

Um pequeno projeto de lista de tarefas (to-do) criado com React e Vite.

## Tecnologias utilizadas

- React 19
- Vite (rolldown-vite)
- ESLint
- JSX / CSS Modules

## Como rodar o projeto localmente

As instruções assumem que você tem Node.js e npm instalados.

1. Clone o repositório (ou acesse a pasta do projeto):

	git clone <https://github.com/filipesilvagalvao/todolist-ebac>
	cd todoList ou o "nome da pasta que tu der"

2. Instale as dependências:

	npm install

3. Rode em modo de desenvolvimento (com hot-reload):

	npm run dev

	O Vite iniciará um servidor local. Abra o navegador em http://localhost:5173 (o endereço será exibido no terminal).

4. Gerar build de produção:

	npm run build

5. Visualizar a build localmente (servidor estático):

	npm run preview

## Scripts úteis

- npm run dev — inicia o servidor de desenvolvimento (Vite)
- npm run build — cria a versão de produção
- npm run preview — serve a build para pré-visualização
- npm run lint — executa o ESLint

## Observações

- Este projeto usa `rolldown-vite` como reempacotador do Vite através de override no `package.json`.
- Se você usar outro gerenciador (yarn, pnpm), adapte os comandos conforme necessário (por exemplo `yarn` ou `pnpm install`).
