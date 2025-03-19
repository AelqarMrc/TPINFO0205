    // DECLARATION DES VARIABLES OU CONSTANTES
const contenu = document.querySelector(".contenu")
, textarea = document.getElementById("texte")
, button  = document.getElementById("ajouterBtn")
let cpt = 0

    // FONTCTION 

ajouter = () => {
    cpt += 1
    const droite = document.querySelector(".droite")
    , gauche = document.querySelector(".gauche")
    , message = textarea.value

    if (cpt%2==0){
        gauche.textContent += message
    }
    else{
        droite.textContent += message
    }

}

    // ECOUTEUR D EVENEMENT AU CLIQUE DU BOUTTON

button.addEventListener("click", () => {
    ajouter()
    console.log("ok")
})


