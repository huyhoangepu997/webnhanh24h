$(function() {
    $(".slide-text--title").textyle({
        duration: 500,
        delay: 200,
        easing: 'linear',
        callback: function() {
            $(this).css({
                transform: 'translateY(0px) rotateY(360deg)'
            });
        }
    });
    $(".slide-text--desc").textyle();
});

// Back to top
// , scrollMenuHide() 
window.onscroll = function() { scrollFunction()}; 

function scrollFunction() {
    if (window.pageYOffset > 450) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
};

document.getElementById("back-to-top").addEventListener("click", backToTop);
function backToTop() {
    window.scrollTo(0, 0);
};

// Scroll Down Navabar Hide
// function scrollMenuHide() {
//   var prevScrollpos = window.pageYOffset;
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// 
// var modal = document.getElementById('id01');

//   // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

// // 
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".col1").click(function(){
  $("#col1").toggle(500);
});
$(".col2").click(function(){
  $("#col2").toggle(500);
});
$(".col3").click(function(){
  $("#col3").toggle(500);
});


