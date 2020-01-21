## Índice

* [1. Resumo do Projeto](#1-Resumo-do-Projeto)
* [2. Características Técnicas](#2-Características-Técnicas)
* [3. Histórias de Usuário Implementadas](#3-Histórias-de-Usuário-Implementadas)
* [4. Tempo do Projeto](#4-Tempo-do-Projeto)
* [5. Futuras Implementações](#5-Futuras-Implementações)

## 1. Resumo do Projeto
Neste projeto, criamos a Rede Social Live In Sampa, que busca conectar donos de bares e usuários para anúncios de shows locais.

Foram utilizadas duas APIs:

A primeira para a busca de CEP do usuário na página de Registro (https://viacep.com.br/ws/${cep}/json).

A segunda foi a HERE API REST para a disponibilização de um mapa para os usuários.

## 2. Características Técnicas
As caraterísticas técnicas da aplicação envolveram:

Uma Single-Page Application;
CSS: Desenho com enfoque no mobile only;
Permite a persistência, edição, atualização e exclusão de dados;
Desenvolvimento FrontEnd
Tecnologias
HTML5
HTML5 semântico.
CSS3
Implementação de seletores de classe.
Utilizamos flexbox para alcançar o desenho mobile first, implementando um layout que se adapte a mobile, conforme modelo proposto.
Não utilizamos frameworks de CSS (bootstrap), nem estilização com float.
JavaScript (ES6+)
Utilizamos módulos do JavaScript ES6 na elaboração do código.
Uso de Template strings.
Implementamos um sistema de rotas (sem uso de bibliotecas externas) para trocar de uma tela para outra de maneira dinâmica (SPA).
Persistência de dados
Neste projeto, utilizamos o Firestore do Firebase para estruturação dos dados, para que estes possam ser consultados, atualizados, modificados e eliminados segundo os requerimentos do usuário.

Ferramentas utilizadas
HTML5
CSS
Vanilla JS
Git e GitHub
Visual Code Studio
Firebase auth, firestore e hosting
## 3. Histórias de Usuário Implementadas
HISTÓRIA DE USUÁRIO 1 - Como dono de estabelecimento, eu preciso logar na minha conta com e-mail e senha para poder iniciar uma sessão no aplicativo.

HISTÓRIA DE USUÁRIO 2 - Como dono de estabelecimento, desejo incluir informações básicas e contato no cadastro para preenchimento do meu perfil.

HISTÓRIA DE USUÁRIO 3 - Como dono de estabelecimento, desejo incluir informações sobre o local em meu cadastro para que possam ficar disponíveis em meu perfil.

HISTÓRIA DE USUÁRIO 4 - Como dono de estabelecimento logado, devo poder criar, visualizar e deletar os meus eventos.

HISTÓRIA DE USUÁRIO 5 - Como dono de estabelecimento, desejo um feed em que eu possa visualizar os eventos de terceiros.

## 4. Tempo do Projeto
O projeto foi elaborado em 2 (dois) dias.

## 5. Futuras Implementações
Telas de Cadastro para os clientes de bares.

Possibilidade de edição de dados.