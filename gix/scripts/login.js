function login() {
    var login = document.getElementById('login').value
    var password = document.getElementById('password').value

    if (login == "vgLemos" && password == "admin") {
        window.location.href = "home.html" //loga e direciona usuário
    } else if (login == "" || password == "") {
        document.getElementById('msg').innerText = 'Os dados devem ser preenchidos.'

    } else {
        document.getElementById('msg').innerText = 'Ops ... Login/Senha inválido'
    }
}

function abrirModal() {
    document.getElementById('modal').style.top = '0'
    console.log("clicou")
}

function fecharModal() {
    document.getElementById('modal').style.top = '-100%'
}