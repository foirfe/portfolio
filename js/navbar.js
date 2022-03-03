window.onscroll = function() {navbarSticky();
  activeNavBar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
const sections = document.querySelectorAll("section")

function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Gør at hvis en section er i fokus saa faar a item i nav en aktiv class
function activeNavBar() {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  allNav.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
}

//GÃ¸r sÃ¥ledes at sidebaren fÃ¥r en active class nÃ¥r den bliver trykket pÃ¥
const allNav = document.querySelectorAll("#navbar-links a");
allNav.forEach(item => {
    item.addEventListener( "click", function(e){

for(var i=0; i < allNav.length; i ++) {
    allNav[i].classList.remove("active");
}
        this.classList.add("active");
    });
});

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

