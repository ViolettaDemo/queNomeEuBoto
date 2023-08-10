x=0;
y=0;
var drawCircle="";
var drawRect="";
var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start (){
    document.getElementById("status").innerHTML="o sistema está ouvindo porfavor fale";
    recognition.start();
}
recognition.onresult=function (event){
    var conteudo=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="a fala foi reconhecida: "+ conteudo;
 if(conteudo =="círculo") { x = Math.floor(Math.random() * 900);
 y = Math.floor(Math.random() * 600); 
 document.getElementById("status").innerHTML = "Desenhando um círculo.";
drawCircle = "set";
 } if(conteudo =="retângulo") { x = Math.floor(Math.random() * 900);
y = Math.floor(Math.random() * 600); document.getElementById("status").innerHTML = "Desenhando um retângulo."; drawRect = "set";
 } } 
 function setup() { canvas = createCanvas(900, 600); } function draw() {
     if(drawCircle == "set") { raio = Math.floor(Math.random() * 100);
 circle(x, y, raio);
 document.getElementById("status").innerHTML = "Círculo desenhado. "; drawCircle = "";
 } if(drawRect == "set") { rect(x,y,70,50);
document.getElementById("status").innerHTML = "Retângulo desenhado. "; 
drawRect = ""
 } }

