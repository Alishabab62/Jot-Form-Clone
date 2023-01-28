const createFormBtn=document.querySelector('.create-form-btn');
const createFormBtnSection = document.querySelector(".create-form-btn-section")
const mainContent=document.querySelector(".content-section");
const createFormSEction = document.querySelector('.create-form-section');
const nav=document.querySelector(".nav");

function sectionHide(){
    mainContent.style.display="none";
    createFormSEction.style.display="flex"
}
function navHide(){
    nav.style.display="none";
}
createFormBtn.addEventListener("click" ,sectionHide);
createFormBtn.addEventListener("click" ,navHide);
createFormBtnSection.addEventListener('click' , sectionHide);
createFormBtnSection.addEventListener('click' ,navHide);


const backCut = document.querySelector('.back-cut');
const layOutSection = document.querySelector('.layout-form-section');
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("svg-image")){
    createFormSEction.style.display="none";
    backCut.style.display="flex";
    layOutSection.style.display="flex";
    }
})


backCut.addEventListener("click",()=>{
    createFormSEction.style.display="flex";
    backCut.style.display="none";
    layOutSection.style.display="none";
})

const createForm = document.querySelector('.create-form-section');
const cut = document.querySelector('.cut');
cut.addEventListener('click' ,()=>{
    mainContent.style.display="flex";
    nav.style.display="flex";
    createForm.style.display="none";
})