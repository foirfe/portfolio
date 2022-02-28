window.onscroll = function() {navbarSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Header Observer
let observer = new IntersectionObserver((entries,observer) => {
  for (const introheader of entries){
      if (introheader.isIntersecting){
          scrolldown.classList.add("fade-in")
          scrolldown.classList.remove("fade-out-bck")
      } else {
  scrolldown.classList.add("fade-out-bck")
  scrolldown.classList.remove("fade-in")
      }
          
  };
  
  }, {threshold: 1}); 
  
  observer.observe(introheader);

