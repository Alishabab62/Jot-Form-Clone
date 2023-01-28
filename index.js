const signUp = document.querySelector(".sign-up");
const signUpBtn = document.querySelector(".signup");
const signUpCut = document.querySelector(".cut");
const google = document.querySelector(".google");

function signUpShow(){
    signUp.style.display="flex";
}
function signUpHide(){
    signUp.style.display="none"
}
signUpBtn.addEventListener("click" ,signUpShow);
signUpCut.addEventListener("click",signUpHide);
google.addEventListener("click",signUpShow)


const loginDiv = document.querySelector(".log-in");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click" ,()=>{
    loginDiv.style.display="flex";
    loginBtn.innerText = "Logged In";
    loginBtn.style.margin = "0px 10px 0px 0px"
})

const loginCut = document.querySelector(".cutLogin");
loginCut.addEventListener("click" ,()=>{
    loginDiv.style.display="none";
})

const login = document.querySelector("#login-btn");
login.addEventListener("click" ,()=>{
    signUp.style.display="flex";
    loginDiv.style.display="none";
})
const signUpBtn2 = document.querySelector("#signup-btn");
signUpBtn2.addEventListener('click',()=>{
    signUp.style.display="none";
    loginDiv.style.display="flex";
})
// for sign up


const signUpButton = document.querySelector(".sing-up-btn"); 

signUpButton.addEventListener("click" ,signUpFunction)
async function signUpFunction(){
    const emailInput = document.querySelector("#email");
    const password = document.querySelector("#password");
    const data={
        email:`${emailInput.value}`,
        pass:`${password.value}`
    }
    const response = await fetch("https://aircampushack.onrender.com/forms/signin",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    let res =await response.json()
    let resEmail = res.user.email;
    if(resEmail == emailInput.value){
        document.querySelector(".message").innerText = `Account Created Successfully`;
        setTimeout(()=>{
        document.querySelector(".message").innerText = ``;
        },1500)
    }
}


//for login api


const loginBtnApi = document.querySelector(".log-in-btn-api");
loginBtnApi.addEventListener("click" , signInFunction)

async function signInFunction(){
    const emailInput = document.querySelector("#emailLogin");
    const password = document.querySelector("#passwordLogin");
    const data={
        email:`${emailInput.value}`,
        pass:`${password.value}`
    }
    const response = await fetch("https://aircampushack.onrender.com/forms/login",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    let res =await response.json();
    let resEmail = res.message;
    if(resEmail == "User login success"){
        loginDiv.style.display = "none";
        document.querySelector(".message").innerText = `Login Successfully`;
        setTimeout(()=>{
        document.querySelector(".message").innerText = ``;
        },1500)
    }
    else if(resEmail == "Password incorrect"){
        document.querySelector(".message").innerText = `Incorrect Password`;
        setTimeout(()=>{
        document.querySelector(".message").innerText = ``;
        },2000)
    }
    else if(resEmail =="Email incorrect"){
        document.querySelector(".message").innerText = `Incorrect Email`;
        setTimeout(()=>{
        document.querySelector(".message").innerText = ``;
        },2000)
    }
}

