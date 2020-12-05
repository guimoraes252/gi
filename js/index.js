alert('hello world!');
var nome='Guilherme Moraes';
var cargo="CTO - Growdev"

var nomehtml= document.getElementById("nome-no-html");
var cargoHtml= document.getElementById("cargo-no-html");
var texto2= document.getElementById("text-2");
var texto1= document.getElementById("texto-1");
function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML=nome;
}
function dizerola(){
    alert("olá Guilherme Moraes")
}
function colocarCargoNoHtml(){
    cargoHtml.innerHTML=cargo;
}
   

function logarNome(){
    console.log(nome);
}
function clickNoProjetos(){
    console.log("Clicou no botão projetos")
 texto2.style.display= "block";
}

 colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);