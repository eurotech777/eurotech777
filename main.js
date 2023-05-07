const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//for the ROTATEY

//We use jquary to change the block for click
$('.name of block or div').on('click', function(){
  //change one block(container) to another(container-origin)
  $('container').toggleClass('container-origin');
})

//for the ROTATEY
