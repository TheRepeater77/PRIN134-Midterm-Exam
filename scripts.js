const gallery = document.querySelector(".gallery");
const cards = gallery.querySelectorAll(".card");
const first_card = cards[0];
const last_card = cards[cards.length-1];
const pet_btns = gallery.querySelectorAll(".card button");
const pet_all = document.querySelector("#btn-select-all");
const unpet_all = document.querySelector("#btn-unselect-all");
const toLast_btn = document.querySelector("#btn-select-last");
const toFirst_btn = document.querySelector("#btn-select-first");
const next_btn = document.querySelector("#btn-select-next");
const prev_btn = document.querySelector("#btn-select-previous");

let current_card = 0;

/* ================ 1# Pet Button Heart START */
pet_btns.forEach(button => {    
    button.addEventListener("click",()=>{
        let heart = button.querySelector("i");
        heart.classList.toggle("fa-solid");
    });
});
/* 1# Pet Button Heart END ================ */

/* ================ Pet All Button START */
pet_all.addEventListener("click",()=>{
    pet_btns.forEach((button) =>{
        let heart = button.querySelector("i");
        if(!heart.classList.contains("fa-solid")){
            heart.classList.toggle("fa-solid");
        }
    });
});
/* Pet All Button END ================ */

/* ================ Unpet All Button START */
unpet_all.addEventListener("click",()=>{
    pet_btns.forEach((button) =>{
        let heart = button.querySelector("i");
        if(heart.classList.contains("fa-solid")){
            heart.classList.toggle("fa-solid");
        }
    });
});
/* Unpet All Button END ================ */

/* ================ To Last Button START */
toLast_btn.addEventListener("click",()=>{
    if(first_card.classList.contains("card-selected")){
        first_card.classList.toggle("card-selected");
        first_card.classList.toggle("active");   
    }
    if(!last_card.classList.contains("card-selected")){
        last_card.classList.toggle("card-selected");
        last_card.classList.toggle("active");
    }
    current_card = cards.length-1;
});
/* Last Button Button END ================ */

/* ================ To First Button START */
toFirst_btn.addEventListener("click",()=>{
    if(!first_card.classList.contains("card-selected")){
        first_card.classList.toggle("card-selected");
        first_card.classList.toggle("active");
    }
    if(last_card.classList.contains("card-selected")){
        last_card.classList.toggle("card-selected");
        last_card.classList.toggle("active");
    }
    current_card = 0;
});
/* To First Button Button END ================ */

/* ================ Next Button START */
next_btn.addEventListener("click",()=>{
    if(current_card < cards.length-1){
        current_card++;
    } else {
        current_card = 0;
    }
    cards.forEach((card,i) => {
        if(current_card == i && !card.classList.contains("card-selected")){
            card.classList.toggle("card-selected");
            card.classList.toggle("active");
        } else if (card.classList.contains("card-selected")) {
            card.classList.toggle("card-selected");
            card.classList.toggle("active");
        }
    });
    console.log(current_card);
});
/* Next Button Button END ================ */

/* ================ Last Button START */
prev_btn.addEventListener("click",()=>{
    if(current_card > 0){
        current_card--;
    } else {
        current_card = cards.length-1;
    }
    cards.forEach((card,i) => {
        if(current_card == i && !card.classList.contains("card-selected")){
            card.classList.toggle("card-selected");
            card.classList.toggle("active");
        } else if (card.classList.contains("card-selected")) {
            card.classList.toggle("card-selected");
            card.classList.toggle("active");
        }
    });
    console.log(current_card);
});
/* Last Button Button END ================ */