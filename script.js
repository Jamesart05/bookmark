const main1 = document.querySelector('.one')
const main2 = document.querySelector('.two')
const main3 = document.querySelector('.three')
const main4 = document.querySelector('.four')
const more1 = document.querySelector('.more1')
const more2 = document.querySelector('.more2')
const more3 = document.querySelector('.more3')
const more4 = document.querySelector('.more4')
const arr1 = document.querySelector('.arr1')
const arr2 = document.querySelector('.arr2')
const arr3 = document.querySelector('.arr3')
const arr4 = document.querySelector('.arr4')
const ham = document.querySelector('.ham')
const modal = document.querySelector('.modal')
const nav = document.querySelector('nav')

main1.addEventListener('click', ()=>{
    more1.classList.toggle('hidden')
})
main2.addEventListener('click', ()=>{
    more2.classList.toggle('hidden')
})
main3.addEventListener('click', ()=>{
    more3.classList.toggle('hidden')
})
main4.addEventListener('click', ()=>{
    more4.classList.toggle('hidden')
})

ham.addEventListener('click', ()=>{
    modal.classList.toggle('hidden')
    nav.classList.toggle('position')
    if(modal.classList.contains('hidden')){
        ham.src = `images/icon-hamburger.svg`
    }else{
        ham.src = `images/icon-close.svg`
    }
})