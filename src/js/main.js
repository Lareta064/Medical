/*========== Показать телефон на фиксированном меню ==========*/
window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 80){
		document.querySelector('.header').classList.add('header-fixed');
	}else{
		document.querySelector('.header').classList.remove('header-fixed');
	}
});
/*============header-menu ==================*/
function pageTabsToggle(tabBtn, tabContent){
	const menuItems = tabBtn.querySelectorAll('[data-role]');
	const menuItemContent = tabContent.querySelectorAll('[data-content]');
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
}
function pageTabs(tabBtn, tabContent){
	const menuItems = tabBtn.querySelectorAll('[data-role]');
	const menuItemContent = tabContent.querySelectorAll('[data-content]');
	for(let i=0; i<menuItems.length; i++ ){
		menuItems[i].addEventListener('click', ()=>{
			for(let j=0; j<menuItems.length; j++){
				if(j !==i){
					menuItems[j].classList.remove('active');
				}
				if(j==i){
					menuItems[j].classList.add('active');
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
}
const headerNav = document.getElementById('headerNav');
const headerDrop = document.getElementById('headerDrop');
const teamtabs = document.getElementById('teamTabs');
const faqTabs = document.getElementById('faqTabs');
pageTabsToggle(headerNav,  headerDrop);
pageTabs(teamTabs,  teamTabs);
pageTabs(faqTabs,  faqTabs);

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
const swiper2 = new Swiper('.faq-tabs__buttons-block', {
  slidesPerView: 3.5,
 loop: true,
  navigation: {
    nextEl: '#faqArrow',
   
  },
});
/*faq arrow click*/
const faqArrow = document.getElementById('faqArrow');


