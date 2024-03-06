function recuperarTecla(tecla) {
    document.getElementById('display').value += tecla;
}

function limparTecla() {
    document.getElementById('display').value = '';
}

function calculo() {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}