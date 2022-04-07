
const sustainabilitySlide = document.querySelector('.con-five-mobile');
const sustainabilityParagraph = document.querySelectorAll('.con-five-mobile p');

const prevBtnSys = document.querySelector('#prevBtn-sustainability');
const nextBtnSys = document.querySelector('#nextBtn-sustainability');

let counter2 = 1;
const size2 = sustainabilityParagraph[0].clientWidth;

sustainabilitySlide.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

nextBtnSys.addEventListener('click', () => {
   if(counter2 >= sustainabilityParagraph.length - 1) return;
   sustainabilitySlide.style.transition = "transform 0.4s ease-in-out";
   counter2 ++;
   sustainabilitySlide.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
})


prevBtnSys.addEventListener('click', () => {
   if(counter2 <= 0) return;
   sustainabilitySlide.style.transition = "transform 0.4s ease-in-out";
   counter2 --;
   sustainabilitySlide.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
   if(counter >= carouselImages.length - 1) return;
   carouselSlide.style.transition = "transform 0.4s ease-in-out";
   counter ++;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


prevBtn.addEventListener('click', () => {
   if(counter <= 0) return;
   carouselSlide.style.transition = "transform 0.4s ease-in-out";
   counter --;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
   if(carouselImages[counter].id ==='lastClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
   if(carouselImages[counter].id ==='firstClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
   
})
const navSlide = () => {
   const closeNav = document.querySelector('.close-nav');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');


   closeNav.addEventListener('click', () => {
      nav.classList.toggle('nav-active');


      navLinks.forEach((link,index) => {
         if(link.style.animation) {
            link.style.animation = '';
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/10+0.2}s`;
         }
         
      });
      closeNav.classList.toggle('toggle');
   });
}
navSlide();