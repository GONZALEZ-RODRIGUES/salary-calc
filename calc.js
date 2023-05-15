
function showSalary() {
    var empDetails = document.getElementById('calc');
    var turno1 = document.getElementById('dias_1');
    var turno2 = document.getElementById('dias_2');
    var turno3 = document.getElementById('dias_3');
    let total = (turno1.value * 10800) + (turno2.value * 12476) + (turno3.value * 13700);
    total += (turno1.value * 570) + (turno2.value * 570) + (turno3.value * 570)
    var diasTrabalhados = parseInt(turno1.value) + parseInt(turno2.value) + parseInt(turno3.value);
    total *= 0.83,56
    console.log(typeof total);
    console.log(total);
    if(isNaN(total)){
        empDetails.innerHTML = "Esqueceu de colocar algum dia,<br> mas você ainda é linda!";
    } else {
        empDetails.innerHTML = "Seu salário liquido é: " + total.toFixed(2) + "<br>Um total de " + diasTrabalhados + " dias trabalhados.<br>Parabéns, você é linda!";
    }
    
}


