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



sw()
sw2()
sw3()