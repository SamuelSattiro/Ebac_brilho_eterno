document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll ('[data-faq-question]')

    const heroSection = document.querySelector ('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if ( posicaoAtual < alturaHero ){
            ocultarHeader()
        } else {
            exibeHeader()
        }
    })

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFecha)
    }
})

function abreOuFecha (elemento) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function ocultarHeader() {
    const header = document.querySelector ('header')
    header.classList.add('header--is-hidden')
}

function exibeHeader() {
    const header = document.querySelector ('header')
    header.classList.remove('header--is-hidden')
}