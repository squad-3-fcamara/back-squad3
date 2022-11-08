<h1>Back-end do Squad-03</h1>

<h3>Endpoints:</h3>

<p>Cadastro - <b>/usuario/cadastro</b></p>
<ul>
    <li>Usada para cadastrar usuário</li>
    <li>Deve ser enviado no body: nome, email, senha e as trilhas</li>
    <li>nome: string (obrigatório)</li>
    <li>email: string (obrigatório)</li>
    <li>senha: string e deve ter no mínimo 8 dígitos (obrigatório)</li>
    <li>trilhas: array de string das trilhas (obrigatório)</li>
    <li>Opções das trilhas: Fullstack (fullstack), UX/UI (ux), Quality Assurance (qa)</li>
</ul>

<p>Login - <b>/usuario/login</b></p>
<ul>
    <li>Usada para o usuário fazer login</li>
    <li>Deve ser enviado no body: email, senha</li>
    <li>email: string (obrigatório)</li>
    <li>senha: string e deve ter no mínimo 8 dígitos (obrigatório)</li>
    <li>Será retornado o token de autenticação e os dados do usuário logado</li>
</ul>
