window.onscroll = function() {myFunction()};
var navbar = document.getElementById("second");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function() {

  $('#A').click(function() {
    $('#three').hide();
    $('#five').hide();
    $('#two').show();
  })


// displaying projects
  $('#B').click(function() {
    $('#two').hide();
    $('#three').show();
  })

// displaying contact
  $('#C').click(function() {
    $('#two').hide();
    $('#three').hide();
      $('#footer').hide();
    $('#five').show();
  })

})


var tl = gsap.timeline(), 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", {perspective: 400});

tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
