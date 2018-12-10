var operandoa;
var operandob;
var operacion;


function init(){
 var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var raizcuadrada = document.getElementById('raizcuadrada');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
    console.log(resultado.textContent);
  }
  dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5"; 
    console.log(resultado.textContent);
  }
  seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
  }
  punto.onclick= function(e){
      resultado.textContent = resultado.textContent + ".";
  }
  reset.onclick = function(e){
        resetear();
  }
  suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        console.log(operacion);
        limpiar();
  }
  resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
  }
  multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
  }
  division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
  }
  raizcuadrada.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "raiz";
        limpiar();
        resolver();
  }
  igual.onclick = function(e){
    operandob = resultado.textContent;
    console.log(operandoa);
    console.log(operandob);
    console.log(operacion);
    resolver();
}
}
function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = "";
	operandob = "";
	operacion = "";
}

function resolver(){
	var res;
	switch(operacion){
		case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
		    res = parseFloat(operandoa) - parseFloat(operandob);
		    break;

		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;

		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
      break;

    case "raiz":
			res = Math.sqrt(parseFloat(operandoa));  
			break;
	}
  resetear();
	resultado.textContent = res;
}
