



function jugar() {
    let number = document.getElementById('number');
    if (number > 12 || number < 0) return alert("Numero invalido");

    dice1 = Math.floor((Math.random() * 5) + 1)
    dice2 = Math.floor((Math.random() * 5) + 1)

    alert(`Dado 1: ${dice1}  \nDado 2: ${dice2} \nLa suma es ${dice1 + dice2}`);

    let winOrLose = false
    if (number == dice1 + dice2) winOrLose = true;
    else if (number == dice1 || number == dice2) return (winOrLose = true)

    if (winOrLose) alert("Apuesta ganadora");
    else alert("Apuesta perdedora");
}
//console.log( jugar(15))