export const template = (dialogues, options, dialogues2) => {
    dialogues.forEach(dialogue => {
        newTextElement(dialogue); 
        const input = Number(prompt(`elige la opcion: ${options[0]}`))

        getDialogues(dialogues2, input)
    })
}

export const getDialogues = (dialogues2, input) => {
    
    switch (input){
        case 0:
            newTextElement(`haz elegido ${input} \n ${dialogues2[0][0]}`); 
            break;
        case 1:
            newTextElement(`haz elegido ${input} \n ${dialogues2[0][1]}`); 
            break;
        case 2:
            newTextElement(`haz elegido ${input} \n ${dialogues2[0][2]}`); 
            break;
        default:
            newTextElement("si"); 
            break;
    }
}
