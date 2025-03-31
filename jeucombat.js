let a = prompt ("nombre d'entrainement?")

for (let i = 1; i <= a; i++) {
    console.log ("entrainement numero "+i);
}
console.log ("entrainement terminer")

let enemie = 4;
console.log ("le combat commence")
while (true) {
    console.log (" Le héros attaque un ennemi !")
    console.log ("il reste " + enemie + " enemie");
    if(enemie===1){
        console.log("Tous les ennemis sont vaincus !");
        console.log ("fin du combat")
        break
    }
    enemie --;

}
console.log(" Le héros ouvre les coffres aux trésors !")
let tresor = [" Épée légendaire", "Potion magique", "Bouclier en or"];
tresor.forEach (function (cadeau) {
    console.log("Le héros a trouvé : " + cadeau);
});
console.log("L'aventure du héros est terminée !");



/*
// version amelioree a finir

let a = prompt ("nombre d'entrainement?")

for (let i = 1; i <= a; i++) {
    console.log ("entrainement numero "+i);
    console.log ("energie +" +i)
}
console.log ("entrainement terminer")

console.log (" Un ennemi est devant toi ! ⚔️ Que fais-tu ? attaque ou fuite ")
let a = prompt ("pour attaquer taper 1 ou la fuite taper 0")
let b=10
let c=5 

while (a==='1'|| a==='0') {
     if(a==='1'){
        console.log(" Le héros attaque un ennemi ! et il a 10 energie");
        console.log ("il reste" + c + "vie et " + b + " energie");
        b --;
        c --;
        
        break
    }
    else if (a==='0') {
        console.log ("le heros prend la fuite");
        break
    }
    else {
        console.log ("fin de combat")
    }

    b --;
    c--;

}

/*
//teste a finir
console.log (" Un ennemi est devant toi ! ⚔️ Que fais-tu ? attaque ou fuite ")
let a = prompt ("pour attaquer taper 1 ou la fuite taper 0")
let b=10
let c=5 



while (true) {
     if(a==='1'){
        console.log(" Le héros attaque un ennemi ! et il a 10 energie");
        console.log ("il reste" + c + "vie et " + b + " energie");
        b --;
        c --;
        
        break
    }
    b --;
    c --;
    else if (a==='0') {
        console.log ("le heros prend la fuite");
        break
    }
    else {
        console.log ("fin de combat")
    }

    b --;
    c--;

}
    */