
const navbarmenu = document.querySelector(".nav .links")
const menubtn = document.querySelector(".menu-btn");
const hidemenubtn = navbarmenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formpopup = document.querySelector(".form-popup ")
const hidePopupBtn = document.querySelector(".form-popup .close-btn");

const loginsignuplink = document.querySelectorAll(".form-box .button-link a");


//ver menu
menubtn.addEventListener("click", () => {
    navbarmenu.classList.toggle("show-menu");
});

//ocultar menu
hidemenubtn.addEventListener("click", () => menubtn.click())


//ver formulario emergente
showPopupBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("show-popup");
});

//ocultar formulario emergente
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginsignuplink.forEach(link=>{
    link.addEventListener("click", (e)=> {
        e.preventDefault();
        formpopup.classList[link.id === "signup-link" ? 'add' : 'remove'] ("show-signup");
        
    });
})