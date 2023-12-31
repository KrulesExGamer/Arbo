# Projeto Arbóreo
 
## Introdução
O objetivo do nosso projeto é o desenvolvimento de um aplicativo que permita o armazenamento e controle da informações de árvores que costituem situações de risco no campus 1 da USP de São Carlos.

Tomando em consideração o feedback durente entrevistas com o cliente nosso principal objetivo foi a criação de uma interface de uso simples e claro. Existem telas de autenticação para que um usuário possa fazer login ou se cadastradar, o usuário pode enviar mensagems para administradores disponíveis do site com informações sobre quaisquer riscos urgentes que eles tenham identificado.

No cadastro de árvores e situações de risco foi priorizada a facilidade de uso, sendo varias das opções baseadas em um estilo de selecionar aquelas que se encaixam no contexto em questão ao invés de serem campos onde quaisquer valores podem ser digitados. Para o cadastro de árvores também foi implementada a opção de se adicionar varias fotos e sua localização aproximada por meio do google maps.

Existe uma lista de árvores cadastradas(Duas no momento) e uma lista de situações de risco (Nenhuma no momento) implementadas apresentando informações relevantes sobre os mesmos. Em particular a lista de árvores possui um QR Code que outros podem usar como link para a página da árvores, um carrossel de imagens que podem ser vistas clicando nas setas para trocar de imagem e as suas coordenadas geográficas junto à uma janela do google maps.

Adicionalmente, um Administrador é capaz de cadastradar funcionários que eles julgam como qualificados para o contexto de avaliação de árvores, esses podem ser associados a certas situações de risco quando elas são cadastradas.

## Como instalar
* Realize o pull do projeto no github
* Mova-se para pasta arboV2.0 do projeto
* No terminal escreva: npm i --force 
* Em sequência: npm run nodemon
* Abra um segundo terminal e por fim rode: npm start

Existe uma conta já cadastrada no projeto como administrador para testar:
 - Email: pedro.hvn@usp.br
 - Senha: 123456789 

## Bugs e aspectos que poderiam ser melhorados.
Infelizmente devido ao tempo curto e a escala do projeto nós identificamos vários bugs e problemas que causam o nosso projeto por não estar em um estado perfeito.
* Em várias seções onde certos tipos de dados devem ser armazenados não há uma mascaras que garantem essa consistência, isso permite que por exemplo informações que deveriam ser números sejam armazenadas como letras, ou que informações fundamentais de certos formulários sejam submetidas vazias com sucesso.
* A conexão com a base de dados não esta completa, uma quantidade de dados cadastrados não são realmente armazenados pelo sistema.
* Na página onde mensagems deveriam ser enviadas para certos e-mails, tal envio não pode ser implementado a tempo.
* Notificações de sucesso ou falha não puderam ser implementados a tempo no projeto, assim ao clicar em certos botões não é claramente visível se a ação foi realmente realizada.
