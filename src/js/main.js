/*========== Показать телефон на фиксированном меню ==========*/
window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 80){
		document.querySelector('.header').classList.add('header-fixed');
	}else{
		document.querySelector('.header').classList.remove('header-fixed');
	}
});
/*============header-menu ==================*/
const menuItems = document.querySelectorAll('[data-role]');
const menuItemContent = document.querySelectorAll('[data-content]');
for(let i=0; i<menuItems.length; i++ ){
	menuItems[i].addEventListener('click', ()=>{
		for(let btn of menuItems ){
			btn.classList.remove('active');
		}
		
		if(menuItems[i].classList.contains('active')){
			menuItems[i].classList.remove('active');
		}else{
			menuItems[i].classList.add('active');
			
		}
		const thisData = menuItems[i].getAttribute('data-role');
		for(let block of menuItemContent ){
			block.classList.remove('active');
			const contentData = block.getAttribute('data-content');				
			if(thisData == contentData){
				block.classList.add('active');
			}
		}
	});
}
