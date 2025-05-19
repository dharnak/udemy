document.getElementById("udemybus").addEventListener("click",function(){
   window.location.href="Business.html";
})
document.getElementById("techon").addEventListener("click",function(){
   window.location.href="Techonudemy.html";
})
document.getElementById("mylearn").addEventListener("click",function(){
   window.location.href="mylearn.html";
})
document.getElementById("log1click").addEventListener("click",function(){
   window.location.href="index1.html";
})
// menubar closing function
document.getElementById("closeX").addEventListener("click",function(){
   document.getElementById("dropdownmenu").style.display="none";
})

//script for smooth scrolling cards
function scrollLeft() {
    const container = document.getElementById('scrollCards');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    const container = document.getElementById('scrollCards');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

//script for smooth scrolling cards page4
function scrollLefts() {
    const container = document.getElementById('scrollCardss');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  function scrollRights() {
    const container = document.getElementById('scrollCardss');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
//script for smooth scrolling cards page5
function scrollLeftss() {
    const container = document.getElementById('scrollCardsss');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  function scrollRightss() {
    const container = document.getElementById('scrollCardsss');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  //script for smooth scrolling cards page7
function scrollLeftsss() {
    const container = document.getElementById('scrollCardssss');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  function scrollRightsss() {
    const container = document.getElementById('scrollCardssss');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  
  //script for smooth scrolling cards page8
function scrollLeftssss() {
    const container = document.getElementById('scrollCardsssss');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  function scrollRightssss() {
    const container = document.getElementById('scrollCardsssss');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
  // corsel

   const images = document.querySelectorAll('.carousel-images img');
    const imageContainer = document.getElementById('carouselImages');
    const dotsContainer = document.getElementById('dots');

    let currentIndex = 0;

    function updateCarousel() {
      imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    }

    function updateDots() {
      dotsContainer.innerHTML = '';
      images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (index === currentIndex ? ' active' : '');
        dot.onclick = () => {
          currentIndex = index;
          updateCarousel();
        };
        dotsContainer.appendChild(dot);
      });
    }

    // Auto-play
    setInterval(nextSlide, 4000);

    // Initial render
    updateCarousel();