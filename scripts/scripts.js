/*SLIDE1*/
const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slider__item'),
  dots = document.querySelectorAll('.slider__dot');

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// setInterval(nextSlide, 3500);

/*SLIDES REVIEWS*/
const right = document.querySelectorAll('.reviews__btn-next'),
      left = document.querySelectorAll('.reviews__btn-prev'),
      revSlides = document.querySelectorAll('.reviews__slide');
      
let revIndex = 0;

const RevActiveSlide = n => {
  for(revSlide of revSlides) {
    revSlide.classList.remove('reviews__active');
  }
  revSlides[n].classList.add('reviews__active');
}

const rightSlide = () => {
  if (revIndex == revSlides.length - 1) {
    revIndex = 0;
    prepareCurrentSlide(revIndex);
  } else {
    revIndex++;
    prepareCurrentSlide(revIndex);
  }
}

const leftSlide = () => {
  if(revIndex == 0) {
      revIndex = revSlides.length - 1
      prepareCurrentSlide(revIndex);
  } else {
    revIndex--;
    prepareCurrentSlide(revIndex);
  }
}

right.addEventListener('click', rightSlide);
left.addEventListener('click', leftSlide);









