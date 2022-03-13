function ejercicioUno() {
      let x = document.getElementById("num1").value;
      let y = document.getElementById("num2").value;
      let z = document.getElementById("num3").value;     
      // converting strings to numbers
      x = Number(x);
      y = Number(y);
      z = Number(z);        
      if (x > 0) {
            document.getElementById("result").innerHTML = "Multiplicación de " + y + " * " + z + " = " + y*z;
            document.getElementById("logic").innerHTML = "Primer número es positivo";
      }else {
            document.getElementById("result").innerHTML = "Adición de " + y + " + " + z + " = " + (y+z); 
            document.getElementById("logic").innerHTML = "Primer número es negativo"
            }
}

function ejercicioDos() {
      let x = document.getElementById("num1").value;
      let y = document.getElementById("num2").value;
      let z = document.getElementById("num3").value;     
      // converting strings to numbers
      x = Number(x);
      y = Number(y);
      z = Number(z);
	
      if (x == y+z) {
            document.getElementById("result").innerHTML ="Number " + x +  " = " + y + " + " + z;
        }else if (y == x+z) {
      		document.getElementById("result").innerHTML ="Number " + y +  " = " + x + " + " + z;	
		}else if (z == x+y){
      		document.getElementById("result").innerHTML ="Number " + z +  " = " + x + " + " + y;	
		}else {
      		document.getElementById("result").innerHTML ="No existe solución";	
		}
}

function ejercicioTres() {
      let num = "";
      let sum = 0;
	  for (let x=3; x<100; x=x+3){
            num += x + ", ";
            sum += x;
            document.getElementById("result").innerHTML =num;
      }
      document.getElementById("sum").innerHTML ="La suma es: "+sum;
}

function ejercicioCuatro() {
      let contador = 0;
      let num = 2, pot = "";
      while (true) {
            num = 2**contador;
            pot += num + ", ";
            if (num >= 100) break;
            document.getElementById("result").innerHTML =pot;
            contador++;
      }
}

function ejercicioCinco() {
      let number = 50;
      let sum = 0;
      while(true) {
            if (number > 200) break;
            sum += number;
            number += 2;    
      }
     document.getElementById("result").innerHTML ="La suma es igual a "+sum; 
}

function ejercicioSeis() {
      let tempC = document.getElementById("num1").value;
      let tempF = 9/5*tempC + 32;
      document.getElementById("result").innerHTML ="Temperatura en grados Fahrenheit es igual a "+tempF;     
}


function ejercicioSiete() {
      let hora = document.getElementById("num1").value;
      if (hora > 12) {
            hora -= 12 
            hora += " p.m.";
      } else hora = hora + " a.m."
      document.getElementById("result").innerHTML ="La hora del día en notación *12 horas* es: "+hora;     
}


function ejercicioOcho() {
      let cadUno = document.getElementById("txt1").value;
      let cadDos = document.getElementById("txt2").value;
      let cadTres = document.getElementById("txt3").value;    
      let cadCuatro = document.getElementById("txt4").value;
      let cadCinco = document.getElementById("txt5").value;

      let vectorInicial = [cadUno, cadDos, cadTres, cadCuatro, cadCinco];
      let vectorInverso = [];

      for (let i=0; i <= vectorInicial.length; i++) {
		  vectorInverso[vectorInicial.length - i] = vectorInicial[i];
	  }
      
      document.getElementById("inicial").innerHTML ="Vector inicial: " + "[" + vectorInicial + "]";  
      document.getElementById("result").innerHTML ="Vector inverso: " + "[" + vectorInverso + "]";      
}


function ejercicioNueve() {
	let notaUno = document.getElementById("num1").value;
    let notaDos = document.getElementById("num2").value;
    let notaTres = document.getElementById("num3").value;    
    let notaCuatro = document.getElementById("num4").value;
    let notaCinco = document.getElementById("num5").value;
	let promedioNotas, notaMasAlta = 0, notaMasBaja = 10;
	let sumaNotas=0;
	
    let vectorNotas = [notaUno, notaDos, notaTres, notaCuatro, notaCinco];

    for (let i=0; i <= 4; i++) {
		sumaNotas += parseInt(vectorNotas[i])
		if (vectorNotas[i] > notaMasAlta) notaMasAlta = vectorNotas[i];
		if (vectorNotas[i] < notaMasBaja) notaMasBaja = vectorNotas[i];
	}

	promedioNotas = sumaNotas/5;
			
	document.getElementById("notas").innerHTML ="Notas del alumno: " + "[" + vectorNotas+ "]";  
    document.getElementById("promedio").innerHTML ="Promedio: " + promedioNotas;
	document.getElementById("masAlta").innerHTML ="Nota más alta: " + notaMasAlta;
	document.getElementById("masBaja").innerHTML ="Notas más baja: " + notaMasBaja;
}

function ejercicioDiez() {
	// captura de datos desde el DOM
	let filaUno = document.getElementById("txt1").value;
    let filaDos = document.getElementById("txt2").value;
    let filaTres = document.getElementById("txt3").value;
	// inicialización de variables
	let vectorSumaFilas = [];
	let vectorSumaColumnas = [];
	// creación de los vectores 
	const vectorFilaUno = filaUno.split(',');
	const vectorFilaDos = filaDos.split(',');
	const vectorFilaTres = filaTres.split(',');
	// creación de la matriz 3 x 4
	const matriz = [vectorFilaUno, vectorFilaDos, vectorFilaTres];
	// doble loop for para sumar filas
	for (let i=0; i<3; i++){
		let suma = 0;
		for (let j=0; j<4; j++) {
			suma = suma + parseInt(matriz[i][j]);		
		}
		vectorSumaFilas[i] = suma;
	}
	// doble loop suma columnas
	for (let i=0; i<4; i++){
		let suma = 0;
		for (let j=0; j<3; j++) {
			suma = suma + parseInt(matriz[j][i]);	
		}
		vectorSumaColumnas[i] = suma;
	}

	document.getElementById("sumaFilas").innerHTML ="Vector con suma de elementos en cada fila " + "["+vectorSumaFilas+"]";
	document.getElementById("sumaColumnas").innerHTML ="Vector con suma de elementos en cada columna " + "["+vectorSumaColumnas+"]";
}

function showAndHide() {
    var x = document.getElementById('js_code');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}