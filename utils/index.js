export function getInput(options){
    if(!options.length)
        throw new Error('El menu no tiene opciones suficientes');
    
    const menu = createMenu(options);

    let stdin = prompt('Ingresa una opción' + menu);

    while(true){
        if(stdin == null)
            return
        if(isValidInput(stdin, options.length))
            return BigInt(stdin);

        stdin = prompt('No es una opción valida intentelo de nuevo' + menu);  
    }    
} 

function createMenu(options){
    let menu = '\n';
    for(let index = 0; index < options.length; index++){
        menu += `${index+1}. ${options[index]}\n`; 
    }
    return menu;
}

function isValidInput(input, length){
    try {
        input = BigInt(input);
        return input >= 1 && input <= length;
    }catch(error){
        console.log(" ~ file: index.js ~ line 46 ~ isValidInput ~error", error);
        return false;
    }
}

