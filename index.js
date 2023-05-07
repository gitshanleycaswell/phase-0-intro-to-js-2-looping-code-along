const names = ["Charlie", "Samip", "Ali"]


function writeCards(names, event) {
    let messages = []
    for (let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    
    } 
    return messages;  
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    let countDown = 10
    while (countDown > -1) {
    console.log(countDown--);
    }
}
