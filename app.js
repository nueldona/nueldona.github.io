function scrollAppear() {
  var bioText = document.querySelector('.bio__text');
  var bioPosition = bioText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (bioPosition < screenPosition) {
    bioText.classList.add('bio__text-appear')
  }
}

window.addEventListener('scroll', scrollAppear);

// scrollmagic 
let header = document.querySelector('header');
let brandName = header.querySelector('.brand__name')
let headerContent = document.querySelector('.header__content')

const textAnim = TweenMax.fromTo(header, 6, {opacity: 0}, {opacity: 1});

let controller = new ScrollMagic.Controller();
let Scene = new ScrollMagic.Scene({
  duration: 0,
  triggerElement: header,
  triggerHook: 0,
  
}) 

// var controller = new ScrollMagic.Controller();		
var scene = new ScrollMagic.Scene({triggerElement: "#about", reverse:false})
// trigger animation by adding a css class
.setClassToggle(".animate", "animate")
//.addIndicators({name: "1 - add aa class"}) // add indicators (requires plugin)
// .addTo(controller);
// .addIndicators()
.addTo(controller);