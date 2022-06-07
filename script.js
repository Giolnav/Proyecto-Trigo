//Calcular promedio
function media(){
    
function calcularProm(datos){
    const sumaLista = datos.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / datos.length;
    return promedioLista; 
}
        var medi = document.getElementById("input").value;
        let valueArray = Array.from(medi.split(','),Number)
        calcularProm = calcularProm(valueArray);
        console.log(calcularProm);
        var rst = document.getElementById('statistics-result');
         rst.innerText = 'La media de tus datos es: ' + calcularProm;
}

var tst;
//Calcular Mediana
function mediana(){

    var rst = document.getElementById('statistics-result').value;
// sacar Promedio
    function calcularProm(datos){
        const sumaLista = datos.reduce(
            function(valorAcomulado = 0, nuevoElemento){
                return valorAcomulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / datos.length;
        return promedioLista; 
    }
    
        
    function esPar(numero){
        if(numero % 2 === 0){
            return true;
        } else{
            return false;
        }
    }    
    
     let mediana;
     
     
        var medi = document.getElementById("input").value;
        let valueArray = Array.from(medi.split(','),Number)
        let listOrder = valueArray;
        listOrder.sort((a, b) => a - b);
        var mitadLista1 = parseInt(listOrder.length / 2);
        console.log(valueArray);
        if(esPar(listOrder.length)){
                const primeValor = listOrder[mitadLista1];
                const segundoValor = listOrder[mitadLista1 - 1];
                const Promedio = calcularProm([
                    primeValor,
                    segundoValor,
                ]);

                tst = Promedio;
                console.log('Si es true');
                var rst = document.getElementById('statistics-result');
                rst.innerText = 'La mediana de tus datos es: ' + Promedio;
                
                
        } else{
            mediana = listOrder[mitadLista1];
            console.log(mediana);
            var rst = document.getElementById('statistics-result');
            rst.innerText = 'La mediana de tus datos es:' + " " +mediana;
        }

}
// Calcular Moda
function moda(){
    var medi = document.getElementById("input").value;
        let lista1 = Array.from(medi.split(','),Number)
      
      const lista1Count = {};
      
      lista1.map(
        function (elemento) {
          if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
          } else {
            lista1Count[elemento] = 1;
          }
        }
      );
      
      const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
        }
      );
      
      const moda = lista1Array[lista1Array.length - 1];
      var rst = document.getElementById('statistics-result');
                rst.innerText = 'La moda de tus datos es: ' +"[" + moda + ']';
        console.log(moda);
}


        var tsss;
//Varianza
  function varianza(){

    var rst = [];// Array de datos
    var numeroDatos; //cuantos datos hay?
    var medi = document.getElementById("input").value;
    let valueArray = Array.from(medi.split(','),Number)
//calcular promedio
    function calcularProm(datos){
        const sumaLista = datos.reduce(
            function(valorAcomulado = 0, nuevoElemento){
                return valorAcomulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / datos.length;
        return promedioLista; 
    }


    var promedio = calcularProm(valueArray);
    for(i=0; i<valueArray.length; i++){
        var valor = (valueArray[i] - promedio) **2;
        numeroDatos = i + 1;
        rst.push(valor);
    }
//calcular sumar Datos
    function sumarDatos(datos){
        const sumaLista = datos.reduce(
            function(valorAcomulado = 0, nuevoElemento){
                return valorAcomulado + nuevoElemento;
            }
        );
    
        const suma = sumaLista; 
        return suma; 
    }

    tsss = rst;
    var varianza = sumarDatos(rst) / numeroDatos;
    var rst = document.getElementById('statistics-result');
    rst.innerText = 'La varianza de tus datos es:' + " " + varianza;
    
    


  }