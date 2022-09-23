export const template = (dialogues, options, dialogues2) => {
    dialogues.forEach(dialogue => {
        console.log(dialogue); 
        const input = Number(prompt(`elige la opcion: ${options[0]}`))

        getDialogues(dialogues2, input)
    })
}

const getDialogues = (dialogues2, input) => {
    
    switch (input){
        case 0:
            console.log(`haz elegido ${input} \n ${dialogues2[0][0]}`); 
            break;
        case 1:
            console.log(`haz elegido ${input} \n ${dialogues2[0][1]}`); 
            break;
        case 2:
            console.log(`haz elegido ${input} \n ${dialogues2[0][2]}`); 
            break;
        default:
            console.log("si"); 
            break;
    }
}
