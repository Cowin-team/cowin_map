window.addEventListener('DOMContentLoaded', (event) => {
  let dropdowns = document.querySelectorAll('.dropdown .dropdown-trigger');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.closest(".dropdown").classList.toggle('is-active');
    });
  });

    //Collapse navbar with burger icon in narrower screens
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

    //Toggle the details div using "Click for details"
    // const targetDivM = document.getElementById("toggledDetailsMobile");
    // const targetDivD = document.getElementById("toggledDetailsDesktop");
    // const btn = document.getElementById("toggleButton");

    // // if supported touch, otherwise click event:
    // let clickOrTouchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
    // btn.addEventListener(clickOrTouchEvent, () => {
    // if (targetDivM.style.display !== "none") {
    // targetDivM.style= "display:none";
    // } else {
    // targetDivM.style= "display:block; margin:18px";
    // }
    // if (targetDivD.style.display !== "none") {
    //   targetDivD.style.display = "none";
    //   } else {
    //   targetDivD.style = "display:block; float:left; width:20%; padding:30px";
    //   }
    // });

    // Show/ hide details using 'Click for details' on the desktop
    var $button = $('#toggleButton');

    var $textDesktop   = $('#toggledDetailsDesktop'),
    visibleDesktop = true;
  
    $button.click(function(){
    if ( visibleDesktop ) {
      $textDesktop.slideUp('fast',function(){
        $textDesktop.addClass('hide')
            .slideDown(0);
      });
    } else {
      $textDesktop.slideUp(0,function(){
        $textDesktop.removeClass('hide')
            .slideDown('fast');
      });
    }
    visibleDesktop = ! visibleDesktop;
    });
  
  // Show/ hide details using 'Click for details' on the mobile and other narrow screens
  var $textMobile  = $('#toggledDetailsMobile'),
  visibleMobile = true;

  $button.click(function(){
  if ( visibleMobile ) {
    $textMobile.slideUp('fast',function(){
      $textMobile.addClass('hide')
          .slideDown(0);
    });
  } else {
    $textMobile.slideUp(0,function(){
      $textMobile.removeClass('hide')
          .slideDown('fast');
    });
  }
  visibleMobile = ! visibleMobile;
  });  


});


