# nlw-together
Next Level Week Six - Rocketseat

 - git clone 

 - yarn install

 - yarn dev

 - yarn typeorm migration:create -n CreateTags ( cria migration )

 - yarn typeorm migration: generate -n CreateTags ( gera novamente a migration apos alterações na mesma )

 - yarn typeorm migration:run ( roda migration )

 * - Ordem de Desenvolvimento:
    * Cria a migration
    * Cria entity
    * Cria repository
    * Cria service
    * Cria controller
    * Cria rota

 * - Await:
      ele vai esperar o resultado da ação para seguir o fluxo
      verificar retorno, caso seja de uma promise utilizar o await
   - Async:
      apontar que na classe haverá uma ação com await

# NLW Valoriza

## Regras

- Cadastro de Usuário

[x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

[x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

[x] Não é permitido cadastrar mais de uma tag com o mesmo nome

[x] Não é permitido cadastrar tag sem nome

[x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

[x] Não é permitido um usuário cadastrar um elogio para si

[x] Não é permitido cadastrar elogios para usuários inválidos

[x] O usuário precisa estar autenticado na aplicação
