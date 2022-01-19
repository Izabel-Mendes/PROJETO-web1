window.onload = function(){
    const menu = document.querySelector('.menu-toggle')
    const header = document.querySelector('header')
    const nav = document.querySelector('nav')

    menu.onclick = (e) =>{
        header.classList.toggle('on')
        nav.classList.toggle('on')
    }
}