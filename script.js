const c1 = document.querySelector("#c1")

const call = [...document.querySelectorAll("div")]


call.map((e)=>{
    e.addEventListener("click", ()=>{
        console.log(" e " + e)
        e.classList.add("destaque")
        e.innerHTML += " - curso completo clicado"
    })
})


// c1.addEventListener("click", (evt)=>{
//     const el = evt.target
//     el.classList.add("destaque")
//     c1.innerHTML = "curso de html completo"
// })


