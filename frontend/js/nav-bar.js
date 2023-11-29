//hamburguer
const menu = document.querySelector('.btn-expandir')
const navList = document.querySelector('.nav-list')
const main = document.querySelector('main')

menu.addEventListener('click', function(){
    navList.classList.toggle('action')
    main.classList.toggle('opacidade')
})

//alterar o fundo da li
const menuItem = document.querySelectorAll('.item-menu')

function selectItem() {
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>{
    item.addEventListener('click', selectItem)
})