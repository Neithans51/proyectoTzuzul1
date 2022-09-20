import { getInput } from "./utils/index.js";

const firstResponse = getInput([
    'Agarrar espada',
    'Correr',
    'Dialogar'
]);

// switch(firstResponse){
//     case "1": 
//         getInput([
//             'Ataque ligero',
//             'Ataque pesado',
//             'Escapar'
//         ])
//         break;
//     case "2":
//         alert('Te han matado mientras corrias, game over');
//         break;
//     case "3": 
//         getInput([
//             'Te robaron, persiguelos',
//             'Te robaron, escapa de la ciudad'
//         ]); 
//     default: 
//     break;
// }

if(firstResponse == "1"){
    getInput([
        'Ataque ligero',
        'Ataque pesado',
        'Escapar'
    ])
}else if(firstResponse == "2"){
    alert('Te han matado mientras corrias, game over');
}else{
    getInput([
        'Te robaron, persiguelos',
        'Te robaron, escapa de la ciudad'
    ]);
}