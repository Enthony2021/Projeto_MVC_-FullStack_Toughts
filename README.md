# Projeto_MVC_Toughts

Projeto Monolito (arquitetura MVC) construida no Curso de <a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/" target="_blank">Node.js do Zero a Maestria com diversos Projetos</a> pela Udemy Academy para aplicar os conhecimentos em Express, Sequelize, MVC.
Totalmente Responsiva (Desktop e Mobile).

## Funções e recursos da Aplicação: 
* Cadastro de Usuário.
* CRUD de pensamentos.
* Criação de sessão ao logar.
* Utilização de critografia SHA para proteção de senha.
* filtro de pensamentos por: mais antigos, mais novos e por palavras específicas.
* Utilização de Flash Messages.

## Tecnologias usadas:
* BackEnd: *Node.js*
* FrontEnd: *Template Engine Handlebars (com HTML5 semântico)*
* Estilo: *CSS3*
* Linguagem: *JavaScript*
* DataBase: *MySQL*
* DataBase framework: *Sequelize*

## Instalação e Execução do Projeto
1. Faça o download ou cópia deste repositório.
2. Instale o mySQL (MySQL Workbench de preferência) e crie um banco de dados (Schema) de nome <b>toughts</b>.
3. Instale o Node em sua máquina.
4. Instalar dependências. Na pasta raiz do projeto execute no CMD o comando:
>npm install
5. Executar o servidor. Na pasta raiz, após instalar as dependências, execute o comando:
>npm start
6. Se tudo ocorrer bem, acesse a aplicação no endereço: http://localhost:3000

Obs: Não criei o arquivo .env para setar os dados sensiveis do banco de dados, para modificar verifique a estrutura de pastas e coloque manualmente no código.

Os dados para a connexão com o DB é:
><p>schema: toughts</p>
><p>usuário: root</p>
><p>senha: '' (sem senha)</p> 
><p>Modifique-os conforme suas configurações MySQL no arquivo "/db/conn.js".</p>

## Rotas da Aplicação:
### Rotas do usuário (auth):
<h5>/login -> GET</h5>
<h5>/register -> GET</h5>
<h5>/logout -> GET</h5>
<h5>/login -> POST</h5>
<h5>/Register -> POST</h5>

### Rotas de pensamento (toughts):
<h5>/toughts/ -> GET</h5>
<h5>/toughts/add -> GET</h5>
<h5>/toughts/edit:id -> GET</h5>
<h5>/toughts/dashboard -> GET</h5>
<h5>/toughts/add -> POST</h5>
<h5>/toughts/edit -> POST</h5>
<h5>/toughts/remove -> POST</h5>

## Estrutura de Diretórios:
<pre>
  index.js -> Arquivo principal da aplicação (servidor)
  > controllers -> Arquivos controladores entre as rotas e as views. Onde estão as regras de negócio
  > db/conn.js -> Arquivo de conecção com o banco de dados mysql através do sequelize 
  > helpers/auth.js -> Verifica se o usuário permanece conectado
  > models -> Arquivos que modelam as tabelas no db
  > public -> Arquivos públicos
    > css -> Arquivos de estilização
    > img -> Arquivos de imagens
  > routes -> Contém os arquivos das rotas da aplicação
  > views -> Arquivos de views (FrontEnd da aplicação)
    > layouts/main.handlebars -> Arquivo responsável pelo layout comum (imutável) das páginas
</pre>

## Dependências:
<pre>
<b>Critografia</b>
  bcryptjs

<b>Flash Messages</b>: 
  connect-flash
  express-flash 

<b>Permanência de sessão</b>: 
  cookie-parser
  cookie-session
  express-session
  session-file-store

<b>Servidor</b>
  express
  nodemon

<b>Template engine</b>
  express-handlebars 

<b>DataBase</b>
  mysql2 
  sequelize 
</pre>

<p>Confira algumas imagens abaixo:</p>

<img src="https://raw.githubusercontent.com/Enthony2021/imagens_dos_projetos/main/toughts1.png"></img>
<p>---</p>
<img src="https://raw.githubusercontent.com/Enthony2021/imagens_dos_projetos/main/toughts2.png"></img>
<p>---</p>
<img src="https://raw.githubusercontent.com/Enthony2021/imagens_dos_projetos/main/toughts3.png"></img>
<p>---</p>
<img src="https://raw.githubusercontent.com/Enthony2021/imagens_dos_projetos/main/toughts4.png"></img>
<p>---</p>

Para sugestões, críticas e melhoramentos deste projeto, por favor entrar em contato comigo através dos links no meu perfil.
Enthony Stevie


