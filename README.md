# Blogs API

[Trybe](https://www.betrybe.com/) é uma escola de tecnologia focada em Desenvolvimento Web e o projeto Blogs API foi uma atividade proposta com a intenção de pôr em prática os conhecimentos adquiridos no curso até aquele momento.

## Descrição

A aplicação consiste em uma API desenvolvida em Node.js com Express conectada à uma banco de dados MySQL, permitindo ao usuário realizar um CRUD (Create, Read, Update, Delete) em blogs e posts de seus respectivos blogs.


## Tecnologias utilzadas

<br>

[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="logo nodejs"/>](https://nodejs.org/en/)
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="logo express"/>](https://expressjs.com/pt-br/)
[<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="logo mysql"/>](https://www.mysql.com/)
[<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize"/>](https://sequelize.org/)
[<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="logo docker"/>](https://www.docker.com/)

## Como utilizar

Clone o repositório em seu diretório local a acesse a pasta raiz do projeto.

**Obs**: Utilizaremos um banco de dados MySQL, você pode utilizar uma instância local ou utilizar a instância gerada através do docker-compose.

<details>
  <summary><strong>🐋 Rodando com Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  :warning: Para rodar essa aplicação com Docker, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências com `npm install`. (dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **todos** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **dentro** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências com `npm install`

  <br/>
</details>

