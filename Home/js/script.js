

$(document).ready(function() {
  $('#myModal').modal('show');
});

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}



$(window).scroll(function() {    // this will work when your window scrolled.
  var height = $(window).scrollTop();  //getting the scrolling height of window
  if(height  > 50) {
    $(".header").css({"position": "fixed"});
  } else{
    $(".header").css({"position": "relative"});
  }
});


$('.carousel-main').owlCarousel({
	items: 3,
	loop: true,
	autoplay: true,
	autoplayTimeout: 1500,
	margin: 10,
    responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 3
        }},
	nav: true,
	dots: false,
	navText: ['<span class="fa fa-chevron-left fa-2x"></span>','<span class="fa fa-chevron-right fa-2x"></span>'],
})


$('.carousel-main-2').owlCarousel({
	items: 4,
	loop: true,
	autoplay: true,
	autoplayTimeout: 1500,
	margin: 10,
    responsiveClass: true,
    responsive: {
        0:{
          items: 2
        },
        480:{
          items: 2
        },
        769:{
          items: 4
        }},
	nav: true,
	dots: false,
	navText: ['<span class="fa fa-chevron-left fa-2x"></span>','<span class="fa fa-chevron-right fa-2x"></span>'],
})



// testing
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let currentIndex = 0;

  function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds
});


// preloader
document.addEventListener("DOMContentLoaded", function() {
  let percent = 0;
  let preloader = document.getElementById('preloader');
  let loader = document.getElementById('percent');

  function updateLoader() {
      percent += 5; // Decrease the increment value for slower visibility

      if (percent > 100) percent = 100; // Ensure it doesn't exceed 100
      loader.innerText = percent + '%';

      if (percent >= 100) {
          clearInterval(loadingInterval);
          preloader.style.display = 'none';
          document.getElementById('content').style.display = 'block';
      }
  }

  let loadingInterval = setInterval(updateLoader, 26); // Increase the interval time for slower visibility
});


function showSection(sectionId) {
  const sections = document.querySelectorAll('.section-images');
  sections.forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'flex';
}
