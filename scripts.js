const pet_buttons = document.querySelectorAll(".gallery button");

/* ==================================================== 1# Pet Button Heart START */
pet_buttons.forEach(button => {    
    button.addEventListener("click",()=>{
        let heart = button.children[0];
        heart.classList.toggle("fa-solid");
    });
});
/* 1# Pet Button Heart END ==================================================== */