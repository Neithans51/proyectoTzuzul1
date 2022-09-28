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
        if(dialogue == "Razit muere" || dialogue == "Consumes el poder de las plantas de razit" || dialogue == "Te diriges a la siguiente sala"){
            getDialogues(dialogues2, "...")
            syncDelay(2000);
        }else{
            const input = prompt(`${dialogue}\n\telige la opcion:\n\t\t${options[0][0]}\n\t\t${options[0][1]}\n\t\t${options[0][2]}`);
            getDialogues(dialogues2, input);
            syncDelay(2000);
        }
    });
}

const getDialogues = (dialogues2, input) => {
    
    switch (input){
        case options[0][0]:
        case "atacar":    
            respuesta(`haz elegido ${input}: ${dialogues2[0][0]}`); 
            break;
        case options[0][1]:
        case "hablar":
            respuesta(`haz elegido ${input}: ${dialogues2[0][1]}`); 
            break;
        case options[0][2]:
        case "huir":
            respuesta(`haz elegido ${input}: ${dialogues2[0][2]}`); 
            break;
        case "...":
            respuesta(`...`); 
            break;
        default:
            respuesta("no haces nada, Razit aprovecha para asestarte un golpe"); 
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

function respuesta(content){
    let nuevaRespuesta = document.createElement("p");
    nuevaRespuesta.style = "color: lightseagreen";
    nuevaRespuesta.textContent = content;
    input.insertAdjacentElement("beforebegin", nuevaRespuesta);
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
    "Razit se presenta y prepara sus dagas",
    "Razit lanza esporas venenosas que cubren la habitacion",
    "Razit lanza sus dagas hacia ti",
    "Razit se encuentra mal herido por la batalla",
    "Razit muere",
    "Consumes el poder de las plantas de razit",
    "Te diriges a la siguiente sala"
]

const options = [
   [
    "ATACAR",
    "HABLAR",
    "HUIR"
   ] 
]

const dialogues2 = [
    [
        "Atacas y razit recibe el golpe",
        "Razit no quiere hablar contigo y te ataca",
        "Fuiste herido por razit, mientras huias"
    ]
]

template(dialogues, options, dialogues2);
