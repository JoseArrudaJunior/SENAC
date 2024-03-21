let usuarios = JSON.parse(localStorage.getItem('users')) || []

//let user = {nome: "Jose Arruda", senha: "123456", email:"jasobrinhoj@gmail.com"}
//usuario.push(user)

let botaoCadastro = document.querySelector('.cadastro form .botao')
botaoCadastro.addEventListener('click', cadastrarUser)

function cadastrarUser(){
    let usuario = document.getElementById('cadUsuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('cadSenha').value
    let confirmarSenha = document.getElementById('confirmarSenha').value
    if(!usuario && !email && !senha && !confirmarSenha){
        alert('Preencha todos os campos, sujeito!!!')
        return
    }
    if(senha===confirmarSenha){
        let user = {usuario: usuario, email: email, senha: senha }
        usuarios.push(user)
        salvarUser()
    }else{
        alert('Senhas incompatíveis')
    }
}
function salvarUser(){
    localStorage.setItem('users', JSON.stringify(usuarios))
}