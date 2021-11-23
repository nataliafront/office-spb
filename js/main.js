let select = () => {
	let selectCurrent = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('select--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.select').classList.remove('select--opened');
		})
	});
};

select();

var sandwich = function sandwich() {
    var sandwichButton = document.querySelector('.sandwich__open-btn');
    var sandwichClose = document.querySelector('.sandwich__close-btn');
    var menu = document.querySelector('.sandwich__content');
    sandwichButton.addEventListener('click', function () {
      menu.classList.add('sandwich__content--opened');
    });
    sandwichClose.addEventListener('click', function () {
      menu.classList.remove('sandwich__content--opened');
    });
};
  
sandwich();


var swiper = new Swiper(".services-card-swiper", {
	slidesPerView: 'auto',
	loop: 'true',
    spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		// when window width is <= 499px
  
		320: {
			spaceBetween: 24,
		},
  
		768: {
			spaceBetween: 24,
		},
		// when window width is <= 999px
		1280: {
			spaceBetween: 30,
		},
	}
});

var swiper = new Swiper(".house-card-swiper", {
	slidesPerView: 3,
    spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		// when window width is <= 499px
		
		320: {
			slidesPerView: 1.1,
			spaceBetween: 24,
		},

		400: {
			slidesPerView: 1.3,
			spaceBetween: 24,
		},
  
		480: {
			slidesPerView: 1.2,
    		spaceBetween: 30,
		},

		650: {
			slidesPerView: 1.7,
    		spaceBetween: 30,
		},
		// when window width is <= 999px
		991: {
			slidesPerView: 3,
    		spaceBetween: 30,
		},
	}
});


var swiper = new Swiper(".house-main-swiper", {
	spaceBetween: 20,
	slidesPerView: 6,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		// when window width is <= 499px

		320: {
			spaceBetween: 16,
			slidesPerView: 3,
		},
  
		768: {
			spaceBetween: 20,
			slidesPerView: 5,
		},
  
		991: {
			spaceBetween: 15,
			slidesPerView: 6,
		},
		// when window width is <= 999px
		1280: {
			spaceBetween: 20,
			slidesPerView: 6,
		},
	}
  });
  var swiper2 = new Swiper(".house-main-swiper2", {
	spaceBetween: 10,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });

  const popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll(".lock-padding");
  
  let unlock = true;
  
  const timeout = 800;
  
  if (popupLinks.length > 0) {
	  for (let index = 0; index < popupLinks.length; index++) {
		  const popupLink = popupLinks[index];
		  popupLink.addEventListener("click", function (e) {
			  const popupName = popupLink.getAttribute('href').replace('#', '');
			  const curentPopup = document.getElementById(popupName);
			  popupOpen(curentPopup);
			  e.preventDefault();
		  });
	  }
  }
  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
	  for (let index = 0; index < popupCloseIcon.length; index++) {
		  const el = popupCloseIcon[index];
		  el.addEventListener('click', function (e) {
			  popupClose(el.closest('.popup'));
			  e.preventDefault();
		  });
	  }
  }
  
  function popupOpen(curentPopup) {
	  if (curentPopup && unlock) {
		  const popupActive = document.querySelector('.popup.open');
		  if (popupActive) {
			  popupClose(popupActive, false);
		  } else {
			  bodyLock();
		  }
		  curentPopup.classList.add('open');
		  curentPopup.addEventListener("click", function (e) {
			  if (!e.target.closest('.popup__content')) {
				  popupClose(e.target.closest('.popup'));
			  }
		  });
	  }
  }
  
  function popupClose(popupActive, doUnlock = true) {
	  if (unlock) {
		  popupActive.classList.remove('open');
		  if (doUnlock) {
			  bodyUnLock();
		  }
	  }
  }
  
  function bodyLock() {
	  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  
	  if (lockPadding.length > 0) {
		  for (let index = 0; index < lockPadding.length; index++) {
			  const el = lockPadding[index];
			  el.style.paddingRight = lockPaddingValue;
		  }
	  }
	  body.style.paddingRight = lockPaddingValue;
	  body.classList.add('lock');
  
	  unlock = false;
	  setTimeout(function () {
		  unlock = true;
	  }, timeout);
  }
  
  function bodyUnLock() {
	  setTimeout(function () {
		  if (lockPadding.length > 0) {
			  for (let index = 0; index < lockPadding.length; index++) {
				  const el = lockPadding[index];
				  el.style.paddingRight = '0px';
			  }
		  }
		  body.style.paddingRight = '0px';
		  body.classList.remove('lock');
	  }, timeout);
  
	  unlock = false;
	  setTimeout(function () {
		  unlock = true;
	  }, timeout);
  }
  
  document.addEventListener('keydown', function (e) {
	  if (e.which === 27) {
		  const popupActive = document.querySelector('.popup.open');
		  popupClose(popupActive);
	  }
  });
  
  (function () {
	  // проверяем поддержку
	  if (!Element.prototype.closest) {
		  // реализуем
		  Element.prototype.closest = function (css) {
			  var node = this;
			  while (node) {
				  if (node.matches(css)) return node;
				  else node = node.parentElement;
			  }
			  return null;
		  };
	  }
  })();

  (function () {
	  // проверяем поддержку
	  if (!Element.prototype.matches) {
		  // определяем свойство
		  Element.prototype.matches = Element.prototype.matchesSelector ||
			  Element.prototype.webkitMatchesSelector ||
			  Element.prototype.mozMatchesSelector ||
			  Element.prototype.msMatchesSelector;
	  }
  })();
  
  (function () {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:860px)');

	
    // keep track of swiper instances to destroy later
    let mySwiper;
	const sliderAdvantages = function () {
        mySwiper = new Swiper('.services__slider', {
            spaceBetween: 20,
            slidesPerView: 'auto',
			navigation: {
				nextEl: ".services__next-btn",
				prevEl: ".services__prev-btn",
			  },
        });
    };
	
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return sliderAdvantages();
        }
    };

	

    if (window.innerWidth <= 640 && mySwiper) {
        mySwiper.destroy(false)
    }

    
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})();

(function () {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:860px)');

	
    // keep track of swiper instances to destroy later
    let mySwiper;
	const sliderAdvantages = function () {
        mySwiper = new Swiper('.services__slider2', {
            spaceBetween: 20,
            slidesPerView: 'auto',
			navigation: {
				nextEl: ".services__next-btn2",
				prevEl: ".services__prev-btn2",
			  },
        });
    };
	
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return sliderAdvantages();
        }
    };

	

    if (window.innerWidth <= 640 && mySwiper) {
        mySwiper.destroy(false)
    }

    
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})();

(function () {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:860px)');

	
    // keep track of swiper instances to destroy later
    let mySwiper;
	const sliderAdvantages = function () {
        mySwiper = new Swiper('.services__slider3', {
            spaceBetween: 20,
            slidesPerView: 'auto',
			navigation: {
				nextEl: ".services__next-btn3",
				prevEl: ".services__prev-btn3",
			  },
        });
    };
	
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return sliderAdvantages();
        }
    };

	

    if (window.innerWidth <= 640 && mySwiper) {
        mySwiper.destroy(false)
    }

    
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})();