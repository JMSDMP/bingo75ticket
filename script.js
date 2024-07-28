let ticket = document.getElementById('ticket');

var usedNumbers = new Array()


for (let index = 0; index < 16; index++) {
    let newEle = document.createElement("div")
    newEle.onclick = () => {
        newEle.classList.toggle("selected");
    };
    let randomNum = Math.floor(Math.random() * 75) + 1;
    while (usedNumbers.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * 75) + 1;
    }
    usedNumbers.push(randomNum);
    newEle.innerText = randomNum;
    ticket.appendChild(newEle);
}
