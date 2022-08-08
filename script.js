let textarea = document.querySelector('textarea')
let bCript = document.getElementById('b-cript')
let bDescript = document.getElementById('b-descript')

textarea.addEventListener("focus", e => {
    textarea.removeAttribute("placeholder")
})

textarea.addEventListener("blur", e => {
    textarea.setAttribute("placeholder", "Digite seu texto aqui.")
})

textarea.addEventListener("input", e => {
    if (e.target.value === "") {
        let card = document.getElementById("card")
        card.innerHTML = `<div class="text">
        <img src="assets/High quality products 1 1.svg" alt="">
        <p id="title">Nenhuma mensagem encontrada</p>
        <p id="subtitle">Digite um texto que você deseja criptografar ou descriptografar.</p>
    </div>`
    card.style.justifyContent = "center"
    card.style.alignItems = "center"
    }
})

bCript.addEventListener("click", e => {
    let card = document.getElementById("card")
    let texto = textarea.value
    texto = encriptador(texto)
    card.innerHTML = `<div id="encripted">${texto}</div><button id="copy">Copiar</button>`
    card.style.justifyContent = "left"
    card.style.alignItems = "flex-start"

    let copy = document.getElementById('copy')

    copy.addEventListener("click", bCopy(texto))
    

})

bDescript.addEventListener("click", e => {
    let card = document.getElementById("card")
    let texto = textarea.value
    texto = decriptador(texto)
    card.innerHTML = `<div id="encripted">${texto}</div><button id="copy">Copiar</button>`
    card.style.justifyContent = "left"
    card.style.alignItems = "flex-start"

    let copy = document.getElementById('copy')

    copy.addEventListener("click", bCopy(texto))
})

function encriptador(x) {
    let texto = x
    let verifyE = texto.replace(/e/gi, "enter")
    let verifyI = verifyE.replace(/i/gi, "imes")
    let verifyA = verifyI.replace(/a/gi, "ai")
    let verifyO = verifyA.replace(/o/gi, "ober")
    let verifyU = verifyO.replace(/u/gi, "ufat")
    return verifyU
    };


function decriptador(x) {
    let texto = x
    let verifyU = texto.replace(/ufat/gi, "u")
    let verifyO = verifyU.replace(/ober/gi, "o")
    let verifyA = verifyO.replace(/ai/gi, "a")
    let verifyI = verifyA.replace(/imes/gi, "i")
    let verifyE = verifyI.replace(/enter/gi, "e")
    return verifyE
}


async function bCopy (x) {
    let text = x
    await navigator.clipboard.writeText(text)
}



let mudaCursor = () => {
    let title = document.getElementById("cursor")
    if (title.textContent === "|") {
        title.textContent = ""
    } else {
        title.textContent = "|"
    }
}

setInterval (mudaCursor, 500)


