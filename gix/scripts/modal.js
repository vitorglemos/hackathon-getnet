function abrirModal(id) {
    document.getElementById('modal').style.top = '0'
    document.getElementById('company_name').innerText = id // adiciona o nome da loja no modal

}

function fecharModal() {
    document.getElementById('modal').style.top = '-100%'
}

var elem = document.querySelector('input[type="range"]');

var rangeValue = function() {
    var newValue = elem.value;
    var target = document.querySelector('.value');
    target.innerHTML = newValue;
}


elem.addEventListener("input", rangeValue);

var header = document.getElementById("dates");

var btns = document.getElementsByClassName("item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function addCart() {
    var number_cart = parseInt(document.querySelector('.counter').value, 10)
    var val_cart = parseInt(document.querySelector('.value').value, 10)
        //var v_dates = document.querySelector('item primaryButon').value

    document.getElementById('company_name').innerText = number_cart + 1

    document.getElementById('modal').style.top = '-100%'
    compra = [number_cart, val_cart]
}

compra = []
    //window.location.href = "carrinho.html" //carrinho