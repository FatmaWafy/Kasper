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

let section2 = document.querySelector(".stats");
let number = document.querySelectorAll(".stats .number");
let started = false;

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= section2.offsetTop - 300) {
    if (!started) {
      number.forEach((num) => {
        startcount(num);
      });
    }
    started = true;
  }

  function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 100 / goal);
  }

  if (window.scrollY >= section2.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});
