let btn_evidenza = document.querySelector("#par-evidenza");
let btn_podcast = document.querySelector("#par-podcast");
let btn_classifiche = document.querySelector("#par-classifiche");
let btn_generi = document.querySelector("#par-generi");
let btn_uscite = document.querySelector("#par-uscite");
let btn_scopri = document.querySelector("#par-scopri");
let sec_evidenza = document.querySelector("#sec-evidenza");
let sec_podcast = document.querySelector("#sec-podcast");
let sec_classifiche = document.querySelector("#sec-classifiche")

function myFunction(input){
    switch(input){
    case btn_evidenza:
        sec_evidenza.style.display="block";
        sec_podcast.style.display="none";
        sec_classifiche.style.display="none";
        break;
    
    case btn_podcast:
        sec_evidenza.style.display="none";
        sec_podcast.style.display="block";
        sec_classifiche.style.display="none";
        break;
    
    case btn_classifiche:
        sec_evidenza.style.display="none";
        sec_podcast.style.display="none";
        sec_classifiche.style.display="block";
        break;
    }
}

btn_evidenza.addEventListener("click", ()=>myFunction(btn_evidenza));
btn_podcast.addEventListener("click", ()=>myFunction(btn_podcast));
btn_classifiche.addEventListener("click", ()=>myFunction(btn_classifiche));