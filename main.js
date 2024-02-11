const ham=document.getElementById("menu");
const menu=document.getElementById("div-menu");

ham.addEventListener('click',() =>{
	menu.classList.toggle('div-menu--show');
});