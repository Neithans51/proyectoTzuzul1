export function getYesNoInput(){
    let stdin = prompt('Ingrese s/n').toLowerCase();
    while(true){
        try{
            if(stdin !== 's' && stdin !== 'n')
            throw new Error('No es una opción valida');

            return stdin;
        }catch(error){
            alert(`${error.message}
            intente nuevamente`
            );
            stdin = prompt('Ingrese s/n').toLowerCase();
        }
    }
}