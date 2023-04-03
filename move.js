// classlistがdomtokenlistに対して作用するため
const daytime = document.querySelector(".daytime")
const car = document.querySelector(".car")



document.addEventListener("keyup", (e)=>{
    if(e.key==="Enter"){
        daytime.classList.toggle("moving")
        car.classList.toggle("suspention")
    }
}, false)