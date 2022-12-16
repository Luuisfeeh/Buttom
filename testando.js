var nome = document.getElementById("fundo")

function vermelho() {
    document.body.style.backgroundColor = 'red';
 }

function cinza(){
    document.body.style.backgroundColor = 'grey';
}

function laranja(){
    document.body.style.backgroundColor = '#ff4400';
}

//var intervalID = window.setInterval(entrou, 1500);

function entrou() {
    document.getElementById("logo").innerHTML = "Droga você me achou!";
    //setInterval(1500)
}

function saiu() {
    document.getElementById("logo").innerHTML = "&copy; Luis Felipe Pontes";
}