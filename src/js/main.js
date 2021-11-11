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
		
		for(let j=0; j<menuItems.length; j++){
			if(j !==i){
				menuItems[j].classList.remove('active');
			}
			if(j==i){
				if(menuItems[j].classList.contains('active')){
					menuItems[j].classList.remove('active');
				}else{
					menuItems[j].classList.add('active');
				}
			}
		}
		const thisData = menuItems[i].getAttribute('data-role');
		for(let block of menuItemContent ){
			block.classList.remove('active');
			const contentData = block.getAttribute('data-content');				
			if(thisData == contentData && menuItems[i].classList.contains('active')){
				block.classList.add('active');
			}
		}
	});
}
/* ======swiper slider========*/
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  loop: true,
  autoplay: {
	delay: 5000,
	},
	speed:2000,
  pagination: {
    el: '.swiper-pagination',
	 clickable: true,
  }
});
