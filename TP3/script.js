const champ = document.getElementById(inputDateDebut)
, champ2 = document.getElementById(inputDateFin)
, regex = (/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/)


function checkFormat(champ){
    if (champ.value.match(regex)){
        console.log("format ok")
        if (moment(champ.value).isValid()){
            checkValidity()
        }
        else{
            console.log("Non c pas bon");
            
        }
    }
    else{
        console.log("non");
    }


}

function checkValidity(champ){
    if (champ.value != ""){
        console.log("c bon");
        
    }
}