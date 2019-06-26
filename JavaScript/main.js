function mensagem(nome){
    alert("Ei não clique em mim! "+ nome);
}

function mudaCor(cor){
    var elemento = document.getElementById("mensagem");
    elemento.style.color = cor;
}

function valida() {
    var nome = document.getElementById('nome');
    if (nome.value == ""){
        alert("campo não pode estar em branco!")
    }
    else{
        alert("Nenhum problema foi encontrado!")
    }
}