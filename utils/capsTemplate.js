import { autosave } from "../config/index.js";

function redireccionarACapitulo(cap){
    let chapter = localStorage.getItem("progress")
    let nextChapter =  Number(chapter) + 1
    location.href = `capitulo${nextChapter}.html`;
}

let userName = document.querySelector("#user-name");
userName.textContent = localStorage.getItem("nombreUsuario");

function syncDelay(milliseconds){
    let start = new Date().getTime();
    let end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

export const template = (dialogues, options, dialogues2, chapter) => {
    validarInput()
    autosave(chapter)

    
    dialogues.forEach(dialogue => {
        let dialogueIndex = dialogues.findIndex(element => element === dialogue)
        newTextElement(dialogue)
        if(dialogue === "Razit muere" || dialogue === "Consumes el poder de las plantas de razit" || dialogue === "Escribe 'siguiente' para avanzar"){
            getDialogues(dialogueIndex ,options, dialogues2, "...")
            syncDelay(100);
        }else{
            const input = prompt(`${dialogue}\n\telige la opcion:\n\t\t${options[dialogueIndex][0]}\n\t\t${options[dialogueIndex][1]}\n\t\t${options[dialogueIndex][2]}`);
            getDialogues(dialogueIndex, options, dialogues2, input);
            syncDelay(100);
        }
    });
}

const getDialogues = (dialogueIndex, options, dialogues2, input) => {
    
    switch (input){
        case options[dialogueIndex][0]:
        case "atacar":    
            respuesta(`haz elegido ${input}: ${dialogues2[0][0]}`); 
            break;
        case options[dialogueIndex][1]:
        case "hablar":
            respuesta(`haz elegido ${input}: ${dialogues2[0][1]}`); 
            break;
        case options[dialogueIndex][2]:
        case "huir":
            respuesta(`haz elegido ${input}: ${dialogues2[0][2]}`); 
            break;
        case "atras":
            console.log('si') 
            dialogueIndex = dialogueIndex -2 
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

function validarInput(){
    input.addEventListener("keypress", (e) =>{
        if(e.key === "Enter" && input.value.toLowerCase().trim() === "siguiente"){
            redireccionarACapitulo(input.value)
        }
    })
}