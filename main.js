let portfolio = document.querySelector(".portfolio");
let buttons = portfolio.getElementsByClassName("button");
let images = portfolio.getElementsByClassName("box");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let category = this.getAttribute("data-category");
    for (let j = 0; j < images.length; j++) {
      if (category == "all" || images[j].className.includes(category)) {
        images[j].style.display = "block";
      } else {
        images[j].style.display = "none";
      }
    }
    for (let k = 0; k < buttons.length; k++) {
      if (k == i) {
        buttons[k].classList.add("active");
      } else {
        buttons[k].classList.remove("active");
      }
    }
  });
}
