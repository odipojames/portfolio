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
