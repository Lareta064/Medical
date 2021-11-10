/*========== Показать телефон на фиксированном меню ==========*/
window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 80){
		document.querySelector('.header').classList.add('header-fixed');
	}else{
		document.querySelector('.header').classList.remove('header-fixed');
	}
	
})
