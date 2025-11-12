function validaForm() {
    const email = document.getElementById('email');
    let emailText = email.ariaValueMax.trim();
    let valido = false;

    if (emailText.includes("@")) {
        valido = false
        console.log("achei @!")
    } else {
        valido = true
    }
    let partesEmail = emailText.split("@");
    if (partesEmail[0].length >= 7 && partesEmail[0].length <= 127) {
        console.log("o tamanho esta entre 7 e 127");
        valido = true
    } else {
        valido = false;
    }
    const nome = document.getElementById("nome");
    let nomeText = nome.value.trim();

    if (nome.length >= 3) {
        console.log("nome atende ao tamanho minimo") 
        valido = true
    } else{
        valido = false
    }
    const textArea = document.getElementById("mensagem");
    let textTexto = textArea.value.trim();
    if (textTexto === "") {
        valido = true
    } else {
        valido = false
    }
    if (valido) {
        alert(" recebemos sua mensagem, em breve entraremos em contato.")
    } else{
        alert("temos um erro no formulario, corrija para seguir!")
    }
}
document.addEventListener("submit", function (e) {
    e.preventDefault();
    validaForm();
})
