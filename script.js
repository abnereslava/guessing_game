const chute = document.querySelector("#valor")
const texto = document.querySelector("#texto")

let numero = Math.ceil(Math.random() * 100); //Gerando um número aleatório entre 0 e 100
let tentativas = 10;
let acertou = false;

function chutar(){
    if (tentativas > 0 && chute.value == numero || acertou == true){
        texto.classList.remove("erro");
        texto.classList.remove("nenhum");
        texto.classList.add("acerto");
        texto.innerHTML = "Parabéns, voce acertou!";
        acertou = true;
    } else if (chute.value === '' || chute.value < 0 || chute.value > 100){
        texto.classList.remove("erro");
        texto.classList.remove("nenhum");
        texto.classList.add("nenhum");
        texto.innerHTML = `O valor deve estar entre 0 e 100! Você ainda tem ${tentativas} tentativas`
    } else if (tentativas > 0 && chute.value > numero){
        texto.classList.remove("erro");
        texto.classList.remove("nenhum");
        texto.classList.add("erro");
        tentativas--
        texto.innerHTML = `O número secreto é menor! Você tem ${tentativas} restantes.`;
    } else if (tentativas > 0 && chute.value < numero){
        texto.classList.remove("erro");
        texto.classList.remove("nenhum");
        texto.classList.add("erro");
        tentativas--
        texto.innerHTML = `O número secreto é maior! você tem ${tentativas} restantes.`
    } else {
        texto.classList.remove("erro");
        texto.classList.remove("nenhum");
        texto.classList.add("erro");
        texto.innerHTML = 'Você perdeu! O número secreto era ' + numero;
    }
}
