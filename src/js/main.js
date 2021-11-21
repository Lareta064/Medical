/*========== Показать телефон на фиксированном меню ==========*/
window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 80){
		document.querySelector('.header').classList.add('header-fixed');
	}else{
		document.querySelector('.header').classList.remove('header-fixed');
	}
});
/*============= menu toggle ===============*/
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.header-menu');
const overlayBlock = document.querySelector('#overlay');
const bodyEl = document.body;
  menuToggle.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      
      this.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlayBlock.classList.remove('active');
      bodyEl.classList.remove('noscroll');

    } else {
      this.classList.add('active');
	  mobileMenu.classList.add('active');
	  overlayBlock.classList.add('active');
      bodyEl.classList.add('noscroll');
    }
  });
  window.addEventListener('resize', function () {
    menuToggle.classList.remove('active');
	mobileMenu.classList.remove('active');
	overlayBlock.classList.remove('active');
    bodyEl.classList.remove('noscroll');
  });
   overlayBlock.addEventListener('click', function () {
      this.classList.remove('active');
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      bodyEl.classList.remove('noscroll');

    });
/*==================HEADER SEARCH FORM ==========*/
const showSearchForm = document.querySelector('#showSearchForm');
const headerSearchForm = document.querySelector('#headerForm');
const headerCloseSearch = document.querySelector('#closeSearch');

showSearchForm.addEventListener('click', function () {
	headerSearchForm.classList.add('active');
});
headerCloseSearch.addEventListener('click', function () {
	headerSearchForm.classList.remove('active');
	headerSearchForm.querySelector('input').value = '';
});
/*============tabs ==================*/

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
const officesTabs = document.getElementById('officesTabs');


if(teamtabs){
	pageTabs(teamTabs,  teamTabs);
}
if(faqTabs){
	pageTabs(faqTabs,  faqTabs);
}
if(officesTabs){
	pageTabs(officesTabs,  officesTabs);
}

/* ========== моб меню - показать выпадающие меню ==========*/
	const openMenuLevel2 = document.querySelectorAll('.drop-menu_2');
	const openMenuLevel3 = document.querySelectorAll('.drop-menu_3');
	

	function foldWithChildren(dropMenuItem) {
		let itemIcon = dropMenuItem.querySelector(".drop-icon");
		let childrenMenu = dropMenuItem.querySelector(".submenu");

		itemIcon.classList.remove('active');
		childrenMenu.classList.remove('active');

		let childrenMenuChildren = childrenMenu.querySelectorAll('.drop-menu');
		for (let item of childrenMenuChildren) {
			foldWithChildren(item);
		}
	}

	function goUpAndFoldSiblings(dropMenuItem) {
		let ancestor = dropMenuItem.parentElement.closest('.drop-menu');

		if (ancestor == null)
			return;

		let next = dropMenuItem.nextElementSibling;
		while (next != null) {
			if (next.classList.contains("drop-menu")) {
				foldWithChildren(next);
			}
			next = next.nextElementSibling;
		}
		let prev = dropMenuItem.previousElementSibling;
		while (prev != null) {
			if (prev.classList.contains("drop-menu")) {
				foldWithChildren(prev);
			}
			prev = prev.previousElementSibling;
		}
		goUpAndFoldSiblings(ancestor);
	}

	function showSubmenu(item, subMenuClass) {
		item.addEventListener('click', function (e) {
			//e.stopPropagation();

			const thisIcon = this.querySelector('.drop-icon')
			const subMenuLevel = this.querySelector(`${subMenuClass}`)

			if (e.target == thisIcon) {

				if (thisIcon.classList.contains('active')) {
					foldWithChildren(item);
					//subMenuLevel.classList.remove('active');
					//thisIcon.classList.remove('active');
				} else {
					goUpAndFoldSiblings(item);
					subMenuLevel.classList.add('active');
					thisIcon.classList.add('active');
				}
			}
		});
	}
	for (let item of openMenuLevel2) {
		showSubmenu(item, '.submenu-2');
	}
	for (let item of openMenuLevel3) {
		showSubmenu(item, '.submenu-3');
	}
/* ============swiper slider========*/
/*const swiper = new Swiper('.swiper', {
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
 
  navigation: {
    nextEl: '#faqArrow'
  },
  scrollbar:{
	  	el:'.faq-scrollbar',
		  draggable:true,
  },
  watchOverflow: 'true'
});

/*(function () {
  "use strict";

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia("(min-width:768px)");

  // Create a wariable to hold swipers
  let swipers = [];

  /** Function to switch styles according to the breakpoint */
  /*const massBreakpointCheker = function (...args) {
    // if larger viewport and multi-row layout needed
    for (let i = 0; i < args.length; i++) {
      if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (swipers[i] !== undefined) {
          swipers[i].destroy(true, true);
          swipers.shift();
        }
        // or/and do nothing
        return;
      }
      // else if a small viewport and single column layout needed
      else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return activateSwiper(swipers, args[i][0], args[i][1]);
      }
    }
  };

  /** Initiate swiper with argument params */
  /*function activateSwiper(swiperArr, clName1, clName2) {
    swiperArr.push(
      new Swiper(clName1, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,

        a11y: true,
        keyboardControl: true,
        grabCursor: true,

        // pagination
        pagination: {
          el: clName2,
          clickable: true,
        },
      })
    );
  }

  // Example swiper arguments, add thme to massBreakpointChecker
  
  // const swips1 = [".swiper-products", ".swiper-products-pagination"];
  // const swips2 = [".swiper", ".swiper-pagination"];
  // const swips3 = [".swiper-result", ".swiper-result-pagination"];
  // const swips4 = [".swiper-library", ".swiper-library-pagination"];
  // const swips5 = [".swiper-sertificate", ".swiper-sertificate-pagination"];
 
  

  // Listener to react on the resize
  // breakpoint.addListener(() => {
  //   massBreakpointCheker(swips1, swips2);
  //   massBreakpointCheker( swips3);
  //  massBreakpointCheker( swips4);
  //  massBreakpointCheker( swips5);
  // });

  // Initiate sweepers, Add arguments here
  // massBreakpointCheker(swips1, swips2);
  // massBreakpointCheker( swips3);
  // massBreakpointCheker( swips4);
  // massBreakpointCheker( swips5);
 /*})(); /* IIFE end */
/*(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:992px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;///////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };
  const enableSwiper = function() {

    mySwiper = new Swiper ('.articles-swiper', {

      loop: true,
      
      slidesPerView: 1,
	  spaceBetween: 30,
      centeredSlides: true,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      // pagination
	  pagination: {
    	el: '.articles-swiper-pagination',
		 clickable: true,
  		},
		  breakpoints: {
        574: {
          slidesPerView: 1.8,
		  spaceBetween: 10,
         
        },
		768: {
          slidesPerView: 2.5,
		  spaceBetween: 30,
         
        }
	}
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
})(); /* IIFE end */
/*(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:992px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;///////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }
  };
  const enableSwiper = function() {

    mySwiper = new Swiper ('.articles-swiper2', {

      loop: true,      
      slidesPerView: 1,
	  spaceBetween: 30,
      centeredSlides: true,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      // pagination
	  pagination: {
    	el: '.articles-swiper-pagination',
		 clickable: true,
  		},
		  breakpoints: {
        574: {
          slidesPerView: 1.8,
		  spaceBetween: 10,
         
        },
		768: {
          slidesPerView: 2.5,
		  spaceBetween: 30,
         
        }
	}
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
})(); /* IIFE end */
/*============faq accordeon=============*/

/* price card hide-text*/
const priceCardsLink = document.querySelectorAll('.price-card .dashed-link');
for(let item of priceCardsLink){
	item.addEventListener('click', ()=>{
		item.nextElementSibling.classList.add('active');
		item.remove();
	})
}
/************/
/*$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 10,
    slidesPerView:1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        574: {
          slidesPerView: 1,
		      spaceBetween: 10,
         
        },
        768: {
              slidesPerView: 3,
              spaceBetween: -30,
            
        },
        1200: {
          slidesPerView: 3,
		      spaceBetween: -30,
         
        }
	}
  });
});
/*var aboutSwiper = new Swiper(".swiper-about", {
    spaceBetween: 30,
    slidesPerView:1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
    	el: '.about-swiper-pagination',
		  clickable: true,
  		}
  });
*/
/*======show all review text=====*/
const truncateItems = document.querySelectorAll('.truncate-item');
if(truncateItems.length > 0){
  for(let item of truncateItems){
    
    item.querySelector('.dashed-link').addEventListener('click', function(){
      this.previousElementSibling.classList.remove('min-text');
      this.remove();
    })
  }
}
/*=========RATING BLOCK =======*/
const ratingBlock = document.querySelectorAll('[data-rating]');
if(ratingBlock){
	ratingBlock.forEach( function(item, index) {
		const itemActive = item.querySelector('[data-count]');
		const itemActiveCount = itemActive.querySelectorAll('i');
		const itemActiveLength = itemActiveCount.length
		const itemActiveVal = itemActive.getAttribute('data-count');
		const activeBlockWidth = +(((itemActiveVal / itemActiveLength) * 100)+0.2) ;//0.5 погрешность нп расстояние между звездами
		itemActive.style.width =`${activeBlockWidth}%`;
	});
}
/*=========== custom select ===========*/
const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
if(mySelectBlocks){
  mySelectBlocks.forEach((item, i) =>{
    const mySelect = item.querySelector('.mySelect-input');
    const mySelectInput = item.querySelector('.selectValue');
    let mySelectOptions = item.querySelectorAll('.mySelect-options');
    const mySelectIcon = item.querySelector('.mySelect-icon');
    const mySelecDrop = item.querySelector('.mySelect-drop');

    mySelect.addEventListener('click', ()=>{

      if(mySelecDrop.classList.contains('active')){
        mySelecDrop.classList.remove('active');
        mySelectIcon.classList.remove('active');
        mySelect.classList.remove('open');


      }else{
        mySelecDrop.classList.add('active');
        mySelectIcon.classList.add('active');
        mySelect.classList.add('open');
      }

    });
    for(let item of mySelectOptions){
      item.addEventListener('click', ()=>{
        mySelecDrop.classList.remove('active');
        mySelectIcon.classList.remove('active');
        mySelectInput.value = item.value;

      });
    }
  });
}
$(document).ready(function(){
	$('[data-fancybox="gallery"]').fancybox({
		animationEffect: "zoom",
		loop: true,
		animationDuration: 500,
		slideClass: "fancy-foto"
		});
  $(function(){
    $(".modal-inline").fancybox({
      closeBtn: false,
      modal: false,
      margin: 0,
      padding: 20,
      maxWidth: 400,
      autoScale: true,
      transitionIn: 'none',
      transitionOut: 'none',
      type: 'inline',
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  });
});
/*=======================SWIPER CLASS ===================*/
(function () {
  // Activate swipers
  const swips = new Swips();
  /*Глав желтый блок*/
  swips.addSwiper(".swiper", "", {
    autoplay: {
      delay: 5000,
    },
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  /* видео */
  swips.addSwiper(".swiper-container", "",{
    spaceBetween: 10,
    slidesPerView:1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        574: {
          slidesPerView: 1,
		      spaceBetween: 10,
         
        },
        768: {
              slidesPerView: 3,
              spaceBetween: -30,
            
        },
        1200: {
          slidesPerView: 3,
		      spaceBetween: -30,
         
        }
	}
  });
  /*Глав табы с кнопкой справа*/
  swips.addSwiper(".faq-tabs__buttons-block", "", {
    slidesPerView: 3.5,

    navigation: {
      nextEl: "#faqArrow",
    },
    scrollbar: {
      el: ".faq-scrollbar",
      draggable: true,
    },
    watchOverflow: "true",
  });
  /*Глав карточки с обувью*/
  swips.addSwiper(".swiper-products", "min-width:768px", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: {
      el: ".swiper-products-pagination",
      clickable: true,
    },
  });
  /*стр Акции -новости*/
  swips.addSwiper(".swiper-result", "min-width:768px", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: {
      el: ".swiper-result-pagination",
      clickable: true,
    },
  });
   /*стр Статья -статьи ведущих врачей*/
  swips.addSwiper(".swiper-library", "min-width:992px", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: {
      el: ".swiper-library-pagination",
      clickable: true,
    },
    
      breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  });
  /*стр Глав -с желтым зонтиком*/
  swips.addSwiper(".articles-swiper", "min-width:992px", {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: {
      el: ".articles-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      574: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });
  /* сертификаты*/
  swips.addSwiper(".swiper-sertificate", "min-width:992px", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: {
      el: ".swiper-sertificate-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });
  /* слайдер в аккордеоне документ */
  swips.addSwiper(".swiper-about", "",{
    spaceBetween: 30,
    slidesPerView:1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
    	el: '.about-swiper-pagination',
		  clickable: true,
  		}
  })
  swips.init();
})();