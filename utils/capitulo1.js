import { template } from "./capsTemplate.js";

const dialogues = [
    "Razit se presenta y prepara sus dagas",
    "Razit lanza esporas venenosas que cubren la habitacion",
    "Razit lanza sus dagas hacia ti",
]

const options = [
    [
        "ATACAR0",
        "HABLAR0",
        "HUIR0"
    ], 
    [
        "ATACAR1",
        "HABLAR1",
        "HUIR1"
    ], 
    [
        "ATACAR2",
        "HABLAR2",
        "HUIR2"
    ], 
]

const dialogues2 = [
    [
        "Atacas y razit recibe el golpe",
        "Razit no quiere hablar contigo y te ataca",
        "Fuiste herido por razit, mientras huias"
    ]
]

template(dialogues, options, dialogues2, 1)