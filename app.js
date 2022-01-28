
let interact = () => {
    let name = prompt("Hello and who might you be?")
    let yourName = document.getElementById("myGreeting");
    console.log(name);
    yourName.innerHTML +=`Welcome to my page ${name}! It's a pleasure to meet you.`
}


interact()