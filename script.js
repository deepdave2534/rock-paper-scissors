function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

// Test the function
console.log("You chose:", getHumanChoice());
