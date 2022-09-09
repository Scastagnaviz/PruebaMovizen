function jugar() {
    let number = document.getElementById("dice").value;


    let bet = document.getElementById("apuesta").value;
    let earn = bet;
    if (number > 12 || number < 0) alert("Numero invalido");

    let dice1 = Math.floor(Math.random() * 5 + 1);
    let dice2 = Math.floor(Math.random() * 5 + 1);

    alert(`Dado 1: ${dice1}  \nDado 2: ${dice2} \nLa suma es ${dice1 + dice2}`);

    let winOrLose = false;

    if (number == (dice1 + dice2)) {
        winOrLose = true;
         earn =  bet * 3;
    } 
    if (number == dice1 || number == dice2) {
        winOrLose = true;
        if (dice2 == dice1) {
         earn = bet * 3;
        } else {
        earn = bet * 2;
        }
    }

    if (winOrLose == true) { alert(`Apuesta ganadora! \nGano: ${earn} `); }
    if (winOrLose == false) { alert(`Apuesta perdedora \nGano:$ ${earn}\nPerdio $: ${bet}`); }

}
