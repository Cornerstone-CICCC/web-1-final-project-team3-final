const btnMessageBoxOpen = document.querySelector(".msgbox-open");
const btnMessageBoxClose = document.querySelector(".msgbox-close");
const messageBox = document.querySelector(".msgbox");
const body = document.querySelector("body");

console.log("in")


btnMessageBoxOpen.addEventListener("click", function() {
  messageBox.classList.add("open");
  this.classList.add("hide");
})

btnMessageBoxClose.addEventListener("click", function() {
  messageBox.classList.remove("open");
  btnMessageBoxOpen.classList.remove("hide");
})

window.addEventListener("scroll", function(event) {
  if(window.scrollY == 0) {
      body.classList.add("top");
  } else {
      body.classList.remove("top");
  }
})