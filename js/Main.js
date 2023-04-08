let info = {
    pizzeria: "Otello",
    indirizzo: "Via tal dei Tali, 1 - Firenze",
    recensioni: [ 
        { nome: "Mario", descrizione: "Pizza buonissima"},
        { nome: "Sara", descrizione: "Pizza ottima ma tempi di attesa troppo lunghi"},
        { nome: "Mario", descrizione: "Non fanno pizza senza glutine "}
    ]
}

//index.html elements
let nome = document.querySelector("#nome")
let via = document.querySelector("#via")
let bottone = document.querySelector("#bottone")
let tbodyTabella = document.querySelector("#tabella");

//init
(() => {
    nome.innerHTML = info.pizzeria
    via.innerHTML = info.indirizzo
})()

function mostraNascondi() {
    if(bottone.innerHTML == "Mostra recensioni"){
        bottone.innerHTML = "Nascondi recensioni";
        creaRighe();
    } else if (bottone.innerHTML == "Nascondi recensioni") {
        bottone.innerHTML = "Mostra recensioni";
        while(tbodyTabella.hasChildNodes)
            tbodyTabella.removeChild(tbodyTabella.firstElementChild)
    }
}

function creaRighe(){
    let tr, tdUtente, tdCommento;

    info.recensioni.forEach(e => {
        tr = document.createElement("tr");
        tdUtente = document.createElement("td");
        tdCommento = document.createElement("td");

        tdUtente.innerHTML = e.nome;
        tdCommento.innerHTML = e.descrizione;
        
        tr.appendChild(tdUtente);
        tr.appendChild(tdCommento);
        
        tbodyTabella.appendChild(tr);
    });
}