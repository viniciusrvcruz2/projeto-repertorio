var data = new Date()
var dia = data.getDate()
/*
if(dia % 2 == 0) {
    var cronograma2 = document.querySelector('div#cronograma2')
    cronograma2.style.display = 'block'
} else {
    var cronograma1 = document.querySelector('div#cronograma1')
    cronograma1.style.display = 'block'
}*/

// Funções 

function tempoNormal() {
    document.querySelector('#cronograma3').style.display = 'none'
    esconderOpcao()
    if(dia % 2 == 0) {
        var cronograma2 = document.querySelector('div#cronograma2')
        cronograma2.style.display = 'block'
    } else {
        var cronograma1 = document.querySelector('div#cronograma1')
        cronograma1.style.display = 'block'
    }
}

const esconderOpcao = () => {
    document.querySelector('.adicionar-tempo-container').style.display = 'none'
}

function colocarTempo(tempo) {
    document.querySelector('#cronograma3').style.display = 'block'
    document.querySelector('#cronograma1').style.display = 'none'
    document.querySelector('#cronograma2').style.display = 'none'
    /*let primeiroh2 = document.querySelector('#primerioh2')
    let segundoh2 = document.querySelector('#segundoh2')
    let terceiroh2 = document.querySelector('#terceiroh2')
    let min5 = document.querySelector('.min5')
    let min10 = document.querySelector('.min10')
    let min20 = document.querySelector('.min20')

    primeiroh2.innerHTML = `${tempo / 4}min`
    segundoh2.innerHTML = `${tempo / 2}min`
    terceiroh2.innerHTML = `${tempo / 4}min`

    min5.innerHTML = `${tempo / 24}min`
    min10.innerHTML = `${tempo / 12}min`
    min20.innerHTML = `${tempo / 6}min`*/
    let div3 = document.querySelector('#cronograma3')
    div3.innerHTML = ''

    let primeiroh2 = tempo / 6
    let segundoh2 = tempo / 2
    let terceiroh2 = tempo / 3
    let calcPrih2 = (Math.abs(primeiroh2) - Math.floor(primeiroh2)) * 0.60 + Math.floor(primeiroh2)
    let calcSegh2 = (Math.abs(segundoh2) - Math.floor(segundoh2)) * 0.60 + Math.floor(segundoh2)
    let calcTerh2 = (Math.abs(terceiroh2) - Math.floor(terceiroh2)) * 0.60 + Math.floor(terceiroh2)
    let min5 = tempo / 24
    let min10 = tempo / 12
    let min20 = tempo / 6
    let min30 = tempo / 4
    let min40 = tempo / 3
    let calcMin5 = (Math.abs(min5) - Math.floor(min5)) * 0.60 + Math.floor(min5)
    let calcMin10 = (Math.abs(min10) - Math.floor(min10)) * 0.60 + Math.floor(min10)
    let calcMin20 = (Math.abs(min20) - Math.floor(min20)) * 0.60 + Math.floor(min20)
    let calcMin30 = (Math.abs(min30) - Math.floor(min30)) * 0.60 + Math.floor(min30)
    let calcMin40 = (Math.abs(min40) - Math.floor(min40)) * 0.60 + Math.floor(min40)


    div3.innerHTML = `<section>
        <h1>Estudos no Baixo</h1>
        <h2 id="primerioh2">${calcPrih2.toFixed(2)}min</h2>
        <div class="container-exercicio"><div class="tempo-tecnica">${calcMin5.toFixed(2)}min</div><div class="exercicio">Digitação</div></div>
        <div class="container-exercicio"><div class="tempo-tecnica">${calcMin5.toFixed(2)}min</div><div class="exercicio">Pizzicato</div></div>
        <div class="container-exercicio"><div class="tempo-tecnica">${calcMin5.toFixed(2)}min</div><div class="exercicio">Ghost note</div></div>
        <div class="container-exercicio"><div class="tempo-tecnica">${calcMin5.toFixed(2)}min</div><div class="exercicio">Slap</div></div>
        <h2 id="segundoh2">${calcSegh2.toFixed(2)}min</h2>
        <div class="container-exercicio"><div class="tempo-repertorio">${calcMin40.toFixed(2)}min</div><div class="exercicio">Tirar Músicas</div></div>
        <div class="container-exercicio"><div class="tempo-repertorio">${calcMin20.toFixed(2)}min</div><div class="exercicio">Músicas da harpa</div></div>
        <h2 id="terceiroh2">${calcTerh2.toFixed(2)}min</h2>
        <div class="container-exercicio"><div class="tempo-repertorio">${calcMin30.toFixed(2)}min</div><div class="exercicio">Escalas / Arpejos / Improvisação</div></div>
        <div class="container-exercicio"><div class="tempo-repertorio">${calcMin10.toFixed(2)}min</div><div class="exercicio">Teoria</div></div>
    </section>
    `

    document.querySelector('#cronograma3').addEventListener('click', (e) => {

        let divClick = e.target.parentNode
        if(divClick.classList.contains('container-exercicio')){
            if(divClick.classList.contains('feito')) { 
                divClick.classList.remove('feito')
            } else {
                divClick.classList.add('feito')
            }
        }
    })
}


// Eventos

// aparecer o adicionar tempo 
document.querySelector('.tempo').addEventListener('click', () => {

    document.querySelector('.adicionar-tempo-container').style.display = 'flex'
})

//esconder o adicionar tempo
document.querySelector('.adicionar-tempo-container').addEventListener('click', (e) => {

    if(e.target == document.querySelector('.adicionar-tempo-container')) {
        esconderOpcao()
    }
})

let buttons = document.querySelector('.buttons')
let btn30 = document.querySelector('.btn-tempo30')
let btn45 = document.querySelector('.btn-tempo45')
let btn60 = document.querySelector('.btn-tempo60')
let btn120 = document.querySelector('.btn-tempo120')
let btnNormal = document.querySelector('.btn-normal')

buttons.addEventListener('click', (e) => {

    let btnClick = e.target
    let btnValue = btnClick.innerHTML

    if(e.target == btn30) {
        esconderOpcao()
        colocarTempo(btnValue)
    } else if(e.target == btn45) {
        esconderOpcao()
        colocarTempo(btnValue)
    } else if(e.target == btn60) {
        esconderOpcao()
        colocarTempo(btnValue)
    } else if(e.target == btn120) {
        esconderOpcao()
        colocarTempo(btnValue)
    } else if(e.target == btnNormal) {
        tempoNormal()
    }
})

document.querySelector('.check').addEventListener('click', (e) => {
    let optPersonalizado = document.querySelector('#tempo')
    if(!optPersonalizado.value) {
        window.alert('Digite um número ou escolha o tempo')
    } else {
        esconderOpcao()
        colocarTempo(optPersonalizado.value)
    }
})

document.querySelector('section').addEventListener('click', (e) => {
    
    let divClick = e.target.parentNode
    if(divClick.classList.contains('container-exercicio')){
        if(divClick.classList.contains('feito')) { 
            divClick.classList.remove('feito')
        } else {
            divClick.classList.add('feito')
        }
    }
})
