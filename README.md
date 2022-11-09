<h1>Back-end do Squad-03</h1>

<h3>Endpoints:</h3>

<p>Listar Todas as Trilhas - <b>/trilhas - GET</b></p>
<ul>
    <li>Usada para listas todas as trilhas com seu nome e id</li>
</ul>

<p>Cadastro - <b>/usuario/cadastro - POST</b></p>
<ul>
    <li>Usada para cadastrar usuário</li>
    <li>Deve ser enviado no body: nome, email, senha e as trilhas</li>
    <li>nome: string (obrigatório)</li>
    <li>email: string (obrigatório)</li>
    <li>senha: string e deve ter no mínimo 8 dígitos (obrigatório)</li>
    <li>trilhas: array de id das trilhas (obrigatório)</li>
</ul>

<p>Login - <b>/usuario/login - POST</b></p>
<ul>
    <li>Usada para o usuário fazer login</li>
    <li>Deve ser enviado no body: email, senha</li>
    <li>email: string (obrigatório)</li>
    <li>senha: string e deve ter no mínimo 8 dígitos (obrigatório)</li>
    <li>Será retornado o token de autenticação e os dados do usuário logado</li>
</ul>

<h3>Endpoints que usuário precisa estar logado:</h3>

<p>Detalhar Usuário e suas Trilhas - <b>/usuario - GET</b></p>
<ul>
    <li>Usada para detalhar o usuário e todas as trilhas</li>
</ul>

<p>Alterar as Trilhas do Usuário - <b>/usuario/trilhas/alterar - POST</b></p>
<ul>
    <li>Usada para alterar as trilhas do usuário</li>
    <li>Deve ser enviado no body: array de id das trilhas (obrigatório)</li>
</ul>
