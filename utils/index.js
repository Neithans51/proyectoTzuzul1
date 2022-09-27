import {localStorageDefault } from "../config/index.js";
localStorage.setItem("nombreUsuario");
const input = document.getElementById('input');
const barra = document.getElementById('barra-estado');
const terminal = document.getElementById("terminal");
var userName = document.querySelector("#user-name");
// import {nombreUsuario} from "../config/index.js";

const menu = [
    "*Nueva Partida",
    "*Continuar",
    "*Niveles"
];

const niveles = [
    "nivel 1",
    "nivel 2",
    "nivel 3",
    "nivel 4",
    "nivel 5"
]

input.focus();
document.addEventListener("click", function(){
    input.focus();
});

/**
*@param {string} content
*/
function newTextElement(content){
    let newText = document.createElement("p");
    newText.textContent = content;
    input.insertAdjacentElement("beforebegin", newText);
}


function showMenu(array){
    array.forEach(element => {
        let newMenuOption = document.createElement("p");
        newMenuOption.textContent = element;
        input.insertAdjacentElement("beforebegin", newMenuOption);
    });
}

function validarInput(accion){
    input.addEventListener("keypress", (e) =>{
        if(accion == seleccionarOpcionMenu){
            if(e.key == "Enter"){
                switch(input.value){
                    case "nueva partida":
                    case "Nueva partida":
                        accion("1")
                        break;
                    case "continuar":
                    case "Continuar":
                        accion("2");
                        break;
                    case "niveles":
                    case "Niveles":
                        accion("3");
                        break;
                    case "nivel 1":
                    case "Nivel 1":
                        accion("1");
                        break;
                    case "nivel 2":
                    case "Nivel 2":
                        accion("4");
                        break;
                    case "nivel 3":
                    case "Nivel 3":
                        accion("5");
                        break;
                    case "nivel 4":
                    case "Nivel 4":
                        accion("6");
                        break;
                    case "nivel 5":
                    case "Nivel 5":
                        accion("7");
                        break;
                    default:
                        accion("8");
                        break;            
                }
            }
        }
    }
    );    
}

/**
*@param {string} valor
*/
function seleccionarOpcionMenu(valor){
    if(valor == "1"){
        localStorageDefault()
        redireccionarACapitulo("capitulo 1");
    }else if(valor == "2"){
        switch(localStorage.getItem("progress")){
            case "capitulo 1":
            case "New game":
                redireccionarACapitulo("capitulo 1");
                break;
            case "capitulo 2":
                redireccionarACapitulo("capitulo 2");
                break;
            case "capitulo 3":
                redireccionarACapitulo("capitulo 3");
                break;
            case "capitulo 4":
                redireccionarACapitulo("capitulo 4");
                break;
            case "capitulo 5":
                redireccionarACapitulo("capitulo 5");
                break;
            default:
                newTextElement("No tienes partidas guardadas");               
        }
    }else if(valor == "3"){
        return showLevels(niveles);
    }else if(valor == "4"){
        return redireccionarACapitulo("capitulo 2");
    }else if(valor == "5"){
        return redireccionarACapitulo("capitulo 3");
    }else if(valor == "6"){
        return redireccionarACapitulo("capitulo 4");
    }else if(valor == "7"){
        return redireccionarACapitulo("capitulo 5");
    }else{
        newTextElement("comando erroneo");
    }
}

function showLevels(array){
    let newMenuOption = document.createElement("p");
    newMenuOption.style = "color: lightseagreen"
    
    if(localStorage.getItem("progress") == "capitulo 1" || localStorage.getItem("progress") == "New game"){ 
        newMenuOption.textContent = array[0];
        input.insertAdjacentElement("beforebegin", newMenuOption);
    }else if(localStorage.getItem("progress") == "capitulo 2"){
        for(let i = 0; i < 2; i++){
            newMenuOption.textContent = array[i];
            input.insertAdjacentElement("beforebegin", newMenuOption);
        } 
    }else if(localStorage.getItem("progress") == "capitulo 3"){
        for(let i = 0; i < 3; i++){
            newMenuOption.textContent = array[i];
            input.insertAdjacentElement("beforebegin", newMenuOption);
        }
    }else if(localStorage.getItem("progress") == "capitulo 4"){
        for(let i = 0; i < 4; i++){
            newMenuOption.textContent = array[i];
            input.insertAdjacentElement("beforebegin", newMenuOption);
        }
    }else if(localStorage.getItem("progress") == "capitulo 5"){
        for(let i = 0; i < 5; i++){
            newMenuOption.textContent = array[i];
            input.insertAdjacentElement("beforebegin", newMenuOption);
        }
    }else{
        newTextElement("No has iniciado ninguna partida");
    }
}

function redireccionarACapitulo(cap){
    if(cap == "capitulo 1"){
        location.href = "caps/capitulo1.html";
    }else if(cap == "capitulo 2"){
        location.href = "caps/capitulo2.html";
    }else if(cap == "capitulo 3"){
        location.href = "caps/capitulo3.html";
    }else if(cap == "capitulo 4"){
        location.href = "caps/capitulo4.html";
    }else if(cap == "capitulo 5"){
        location.href = "caps/capitulo5.html";
    }
}

if(localStorage.getItem("nombreUsuario") == "undefined"){
    var usuario = prompt("Dime tu nombre");
    localStorage.setItem("nombreUsuario", usuario);
    userName.textContent = usuario;
}else{
    userName.textContent = localStorage.getItem("nombreUsuario");
}

newTextElement("Hola Bienvenido");
showMenu(menu);
validarInput(seleccionarOpcionMenu);

