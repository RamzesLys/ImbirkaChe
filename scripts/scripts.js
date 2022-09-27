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

function shiftLeft() {
  const boxes = document.querySelectorAll(".reviews__slide");
  const tmpNode = boxes[0];
  boxes[0].className = "reviews__slide move-out-from-left";

  setTimeout(function() {
      if (boxes.length > 5) {
          tmpNode.classList.add("reviews__slide-hide");
          boxes[5].className = "reviews__slide move-to-position5-from-left";
      }
      boxes[1].className = "reviews__slide move-to-position1-from-left";
      boxes[2].className = "reviews__slide move-to-position2-from-left";
      boxes[3].className = "reviews__slide move-to-position3-from-left";
      boxes[4].className = "reviews__slide move-to-position4-from-left";
      boxes[0].remove();

      document.querySelector(".reviews__slider-block").appendChild(tmpNode);

  }, 500);

}

function shiftRight() {
  const boxes = document.querySelectorAll(".reviews__slide");
  boxes[4].className = "reviews__slide move-out-from-right";
  setTimeout(function() {
      const noOfCards = boxes.length;
      if (noOfCards > 4) {
          boxes[4].className = "reviews__slide reviews__slide-hide";
      }

      const tmpNode = boxes[noOfCards - 1];
      tmpNode.classList.remove("reviews__slide-hide");
      boxes[noOfCards - 1].remove();
      let parentObj = document.querySelector(".reviews__slider-block");
      parentObj.insertBefore(tmpNode, parentObj.firstChild);
      tmpNode.className = "reviews__slide move-to-position1-from-right";
      boxes[0].className = "reviews__slide move-to-position2-from-right";
      boxes[1].className = "reviews__slide move-to-position3-from-right";
      boxes[2].className = "reviews__slide move-to-position4-from-right";
      boxes[3].className = "reviews__slide move-to-position5-from-right";
  }, 500);

}

// const right = document.querySelectorAll('.reviews__btn-next'),
//       left = document.querySelectorAll('.reviews__btn-prev'),
//       revSlides = document.querySelectorAll('.reviews__slide');
      
// let revIndex = 0;

// const RevActiveSlide = n => {
//   for(revSlide of revSlides) {
//     revSlide.classList.remove('reviews__active');
//   }
//   revSlides[n].classList.add('reviews__active');
// }

// const rightSlide = () => {
//   if (revIndex == revSlides.length - 1) {
//     revIndex = 0;
//     prepareCurrentSlide(revIndex);
//   } else {
//     revIndex++;
//     prepareCurrentSlide(revIndex);
//   }
// }

// const leftSlide = () => {
//   if(revIndex == 0) {
//       revIndex = revSlides.length - 1
//       prepareCurrentSlide(revIndex);
//   } else {
//     revIndex--;
//     prepareCurrentSlide(revIndex);
//   }
// }

// right.addEventListener('click', rightSlide);
// left.addEventListener('click', leftSlide);









