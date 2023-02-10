function sw() {
  const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  }); 
}

function sw2() {
  const swiper = new Swiper('.swiper', {
    
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.features-menu__img-next',
      prevEl: '.features-menu__img-prev',
    },   
  });
}

function sw3() {
  const swiper = new Swiper('.swiper', {
    
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.review-menu__img-next',
      prevEl: '.review-menu__img-prev',
    },   
  });
}

function sw4() {
  const swiper = new Swiper('.swiper', {
    
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.article-box__img-next',
      prevEl: '.article-box__img-prev',
    },   
  });
}

function modal() {
  let loginForm = document.querySelector('.login-form');

  document.querySelector('#login-form').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
  }
}

function modalMedia(){
  let loginForm = document.querySelector('.login-form');

  document.querySelector('#login-forms').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
  }
}

function hamburger(){
  let navbar = document.querySelector('.header-menu-navbar');

  document.querySelector('#hamburger').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
  }
}

const swiper = new Swiper('.swiper', {
  
});

// window.onscroll = () =>{
//   searchForm.classList.remove('active');
//   shoppingCart.classList.remove('active');
//   loginForm.classList.remove('active');
//   navbar.classList.remove('active');
// }

sw()
sw2()
sw3()
sw4()
modal()
modalMedia()
hamburger()
