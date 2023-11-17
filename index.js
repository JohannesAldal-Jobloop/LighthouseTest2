//---------- Godteri ----------
let godteri = 0
let godteriPerKlikk = 1

let godteriISekundet = 0
let GISStarta = false
//-----------------------------

//---------- Arbeidere ----------
let arbeidere = 0
let arbeidereEfektivitet = 1;
let arbeiderePris = 10
let arbeiderePrisØokning = 1.25
//-------------------------------

//---------- Arbeidere ----------
let maskiner = 0
let maskinerEfektivitet = 5;
let maskinerPris = 100
let maskinerPrisØokning = 1.50
//-------------------------------

//---------- Tellere elimenter ----------
const godteriTellerEl = document.getElementById("godteriTeller-el")
const GISTellerEl = document.getElementById("GISTeller-el")
//---------------------------------------

const godteriKnappEl = document.getElementById("godteriKnapp-el")

//--------- Lagere elimenter ----------
const lagere1KnappEl = document.getElementById("lagere1Knapp-el")
const lagere2KnappEl = document.getElementById("lagere2Knapp-el")
//--------------------------------------------

// Øker godteri med godteriPerKlikk kvar gong godteriKnappEL blir klikka.
godteriKnappEl.addEventListener("click", function()
{
    godteri += godteriPerKlikk
    godteriTellerEl.textContent = godteri;
})

// Viss godteri > arbeiderePris so øker du arbeidere med ein.
lagere1KnappEl.addEventListener("click", function()
{
    if(godteri >= arbeiderePris)
    {
        arbeidere++

        godteriISekundet += arbeidereEfektivitet
        GISTellerEl.textContent = godteriISekundet

        godteri -= arbeiderePris

        KjekkOmGISErStarta()

        ØkPris(arbeiderePris, arbeiderePrisØokning)

        godteriTellerEl.textContent = godteri;

        lagere1KnappEl.textContent = `Få Arbeider. Pris: ${arbeiderePris}`
    }
    
   
})
// Viss godteri > maskinerPris so øker maskiner med ein.
lagere2KnappEl.addEventListener("click", function()
{
    if(godteri >= maskinerPris)
    {
        maskiner++

        godteriISekundet += maskinerEfektivitet
        GISTellerEl.textContent = godteriISekundet

        godteri -= maskinerPris

        KjekkOmGISErStarta()
        
        ØkPris(maskinerPris, maskinerPrisØokning)

        godteriTellerEl.textContent = godteri;

        lagere2KnappEl.textContent = `Få Maskin. Pris: ${maskinerPris}`
    }
    
   
})

// Øker godteri med godteriISekundet kvart sekund.
// Kaller på seg sjølv so den går foraltid.
function LagGodteriISekundet()
{
    godteri += godteriISekundet
    godteriTellerEl.textContent = godteri;
    
    setTimeout(LagGodteriISekundet, 1000)
}

// Kjekker om LagGodteriISekundet() er starta for å ikkje ha fleire kjøyrande.
// Viss den ikkje er starte so starter den LagGodteriISekundet().
function KjekkOmGISErStarta()
{
    if(!GISStarta){
        LagGodteriISekundet()
        GISStarta = true
    }
}

// Øker pris med å gange den med prisØkning.
// Bruker Math.floor() for å få ein int.
function ØkPris(pris, prisØking)
{
    pris *= prisØking
    pris = Math.floor(pris)
}
