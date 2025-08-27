# Execução do Pojeto

# Desafio Técnico de Front-End | Ezio Borges.

Esse Projeto é a minha solução para o desafio técnico de front-end.
<br>
A plicação permite que o usuário faça login, receba e armazene um token de autenticação,
<br>
acesso uma área restrita e renderize dados protegidos.
<br>
Também foi desenvolvido uma opção para realizar logout de formna segura.

<details>
  <summary>
    <span style="font-size: 2em;"><strong>Como Executar </strong></span>
  </summary>
  <!-- conteúdo -->
  
Abra o terminal e siga as instruções abaixo para rodar o projeto localmente:

1.  **Clone este repositório**

    ```bash
    git clone https://github.com/ezioborges/desafio-drikey.git
    ```

2.  **Navegue até o diretório do projeto**

    ```bash
    cd desafio-drikey
    ```

3.  **Instale as dependências**

    ```bash
    npm install
    ```

4.  **Inicie a aplicação**

    ```bash
    npm run dev
    ```

5.  **Logins**<br>

```bash
    Admin: admin@drikey.com
    Senha: Senhaforte12@
```

```bash
    Consumer: consumer@drikey.com
    Senha: Senhaforte12@
```

```bash
    Unauthorized: unauthorized@unauthorized.com
    Senha: Senhaforte12@
```

</details>
<br>

# Tecnologias Utilizadas

<details>
  <summary>
    <span style="font-size: 1.5em;"><strong>Front-End: </strong></span>
    <span style="margin-left: 16px;">Biblioteca principal para construção da interface</span>
  </summary>
  <!-- conteúdo -->
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>React: </strong>
    Biblioteca principal para construção da interface. Por ser focada em componetização,<br>
    tornando o código reutilizável e mais fácil de organizar. A reatividade do React garante uma apalicação rápida, <br> 
    com interfaces atualizadas de forma eficiente
  </span>
    <br>
    <br>
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>React Router:</strong>
    Responsável por gerenciar as rotas e navegação entre as páginas (login e dashboard).<br>
    Integra perfeitamente com React para fazer o retoamento com base na url. 
  </span>
    <br>
    <br>
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>TypeScript: </strong>
    Responsável por adicionar tipagem estática. Garante um código mais robusto e fácil de manter. <br>
    Possibilita encontrar erros de forma mais rápida. Além de ferramentas que auxiliam no aumento de produtividade.
  </span>
     <br>
    <br>
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>Bootstrap: </strong>
    Framework de CSS para estilização e responsividade. O Bootstrap possui uma grande variedade de companentes prontos.<br>
    Possui um sistema de grid robusto com boa adaptação a diferentes tamanhos de telas.
  </span>
</details>

<details>
  <summary>
    <span style="font-size: 1.5em;"><strong>Autenticação e Armazenamento:</strong></span>
  </summary>
  <!-- conteúdo -->
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>jose: </strong>
    Biblioteca usada para simular a criação e validação de token JWT. Substitui a necessidade<br>
    de criar uma API de autenticação real. PErmite trabalhar com assinatura e criptografia (JWS e JWE).<br>
    Otimo para simular cenários de segurança.
  </span>
    <br>
    <br>
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>js-cookie: </strong>
    Responsável pelo gerenciamento de cookies. Permite o armazenamento seguro e persistente do token de autenticação no front-end.<br>
  </span>
</details>

<details>
  <summary>
    <span style="font-size: 1.5em;"><strong>Ferramentas Auxiliares:</strong></span>
  </summary>
  <!-- conteúdo -->
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>ESLint: </strong>
    Realiza análise estática do código para identificar problemas e garantir consistência de código para JavaScript/TypeScript.<br>
  </span>
    <br>
  <span style="font-size: 1.2em; margin-left: 40px;"><strong>Prettier: </strong>
    Faz a formatação de código para manter um estilo uniforme em todo projeto.<br>
  </span>
</details>
<br>

# Implementação

## Login

- **Página de login**: Interface simples e intuitiva para inserção de credenciais.
- **Integração com a API Mockada:** Simulação de um login bem-sucedido. Ao Submeter o formulário, a aplicação envia credenciais para a API<br> de simulação e retorna um JWT.
- **Armazenamento Seguro do Token:** O token não foi armazenado em um cookie httpOnly porque era uma simulação. Como eu tinha acesso direto ao servidor, <br>não houve necessidade de implementar essa medida de segurança.
- **Proteção de rotas:** Com o React Router é possível criar rotas privadas. Acessar a página Dashboard só é possível com um token válido. <br>
  Isso garante que apenas usuários autenticados podem ver os conteúdos.
- **Exibição de dados protegidos:** Os dados do usuário são obtidos a partir de um token JWT, que é armazenado em um cookie após um login válido. <br>Esse token é usado para exibir informações protegidas.
- **Funcionalidade de Logout:** Ao clicar em logout, o token é removido do cookie, o usuário é desautenticado e redirecionado para a página de login, <br>encerrando a sessão de forma segura.
  <br><br>
