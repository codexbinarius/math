/* script.js */
function calcular(operacion) {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let resultado = 0;

    if (operacion === 'suma') {
        resultado = num1 + num2;
    } else if (operacion === 'resta') {
        resultado = num1 - num2;
    } else if (operacion === 'multiplicacion') {
        resultado = num1 * num2;
    }
    
    document.getElementById('resultado').innerText = resultado;
}
