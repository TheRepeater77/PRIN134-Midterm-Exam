const pet_buttons = document.querySelectorAll(".gallery button");
const pet_all = document.querySelector("#btn-select-all");

/* ==================================================== 1# Pet Button Heart START */
pet_buttons.forEach(button => {    
    button.addEventListener("click",()=>{
        let heart = button.children[0];
        heart.classList.toggle("fa-solid");
    });
});
/* 1# Pet Button Heart END ==================================================== */

/* ==================================================== Pet All Button START */
pet_all.addEventListener("click",()=>{
    pet_buttons.forEach((button) =>{
        let heart = button.children[0];
        if(!heart.classList.contains("fa-solid")){
            heart.classList.toggle("fa-solid");
        }
    });
});
/* Pet All Button END ==================================================== */