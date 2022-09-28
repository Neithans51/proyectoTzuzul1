var userName = document.querySelector("#user-name");
userName.textContent = localStorage.getItem("nombreUsuario");

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

const template = (dialogues, options, dialogues2) => {
    dialogues.forEach(dialogue => {
        newTextElement(dialogue);
        const input = prompt(`${dialogue}\n\telige la opcion: 
                            \n\t${options[0][0]}\n\t${options[0][1]}\n\t${options[0][2]}`);
        getDialogues(dialogues2, input);
        syncDelay(2000);
    });
}

const getDialogues = (dialogues2, input) => {
    
    switch (input){
        case options[0][0]:
            newTextElement(`haz elegido ${input} \n ${dialogues2[0][0]}`); 
            break;
        case options[0][1]:
            newTextElement(`haz elegido ${input} \n ${dialogues2[0][1]}`); 
            break;
        case options[0][2]:
            newTextElement(`haz elegido ${input} \n ${dialogues2[0][2]}`); 
            break;
        default:
            newTextElement("si"); 
            break;
    }
}


const input = document.getElementById('input');

input.focus();
document.addEventListener("click", function(){
    input.focus();
});

function newTextElement(content){
    let newText = document.createElement("p");
    newText.textContent = content;
    input.insertAdjacentElement("beforebegin", newText);
    return content;
}

function validarInput(accion){
    input.addEventListener("keypress", (e) =>{
        if(e.key === "Enter"){
            accion(input.value);
        }
    })
}

const opciones = [
    "accion 1",
    "accion 2",
    "accion 3"
];

const enunciado = [
    ["enunciado 1"],
    ["enunciado 2"],
    ["enunciado 3"]
];

//function mostrarEnunciado(enunciado){
//    enunciado.forEach(element => {
//        element.forEach(valor =>{
//            if(input.value = "1"){
//                let texto = `${valor} ${enunciado.indexOf(element)}`;
//                newTextElement(texto);
//            }            
//        });
//    });
//}

/*function validarInput(accion){
    if(accion == "enunciado 1"){
        newTextElement(enunciado[0][0]);
    input.addEventListener("keypress", (e) =>{
            if(e.key == "Enter"){
                if(input.value === "accion 1"){
                    newTextElement(opciones[0]);
                    newTextElement("consecuencia 1");
                    return 1;
                }    
                else if(input.value === "accion 2"){
                    newTextElement(opciones[1]);
                    newTextElement("consecuencia 2");
                    return 1;
                }
            }
    }
    );
}else if(accion == "enunciado 2"){
    newTextElement("enunciado 2");
    input.addEventListener("keypress", (e) =>{
            if(e.key == "Enter"){
                if(input.value === "accion 3"){
                    newTextElement(opciones[0]);
                    newTextElement("consecuencia 1");
                    return 1;
                }    
                else if(input.value === "accion 2"){
                    newTextElement(opciones[1]);
                    newTextElement("consecuencia 2");
                    return 1;
                }
            }
    }
    );
}
}
*/

/*function validarInput(){
    input.addEventListener("keydown", (e) =>{
        if(e.key === "Enter"){
            valor = "hola";
            return valor;
        } 
    });
}*/

//validarInput(newTextElement);

const dialogues = [
    "Te levantas en la mañana",
    "Sales de tu casa",
    "Viene alguien"
]

const options = [
   [
    "salir",
    "mirar",
    "hablar"
   ] 
]

const dialogues2 = [
    [
        "Te vestiste y tomas las llaves",
        "Cierras la puerta",
        "Lo saludas"
    ]
]

template(dialogues, options, dialogues2);

