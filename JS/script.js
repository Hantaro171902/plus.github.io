function showSidebar() {
  const sidebar = document.querySelector(".plus-navbar-sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".plus-navbar-sidebar");
  sidebar.style.display = "none";
}

// Flip card effect on click
var clickCount = 0;

function flipCard(cardId) {
  var card = document.getElementById(cardId);
  if (clickCount % 2 === 0) {
    // Check if it's an evenS click
    card.style.transform = "rotateY(180deg)";
  } else {
    // Odd click
    card.style.transform = "rotateY(0deg)";
  }
  clickCount++;
  console.log(clickCount);
}

// Marquee
let currentScroll = 0;
let isScrolling = true;
let arrows = document.querySelectorAll(".paw");

let tween = gsap
  .to(".marquee__part", {
    xPercent: -100,
    duration: 5,
    ease: "linear",
    repeat: -1,
  })
  .totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });

window.addEventListener("scroll", function () {
  if (window.scrollY > currentScroll) {
    isScrolling = true;
  } else {
    isScrolling = false;
  }

  gsap.to(tween, {
    timeScale: isScrolling ? 1 : -1,
  });

  arrows.forEach((arrow) => {
    if (isScrolling) {
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
    }
  });

  currentScroll = window.scrollY;
});

// Rolling number
function rollNum() {
  let valueDisplay = document.getElementsByClassName("num");
  let interval = 1000;

  for (let i = 0; i < valueDisplay.length; i++) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay[i].getAttribute("data-val"));

    if (endValue >= 1000 && endValue <= 5000) {
      startValue = 500;
    } else if (endValue >= 5000 && endValue <= 10000) {
      startValue = 4000;
    } else if (endValue >= 10000 && endValue <= 50000) {
      startValue = 9000;
    } else {
      startValue = 1099000;
    }

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay[i].textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);

    console.log(startValue);
    console.log(endValue);
    console.log(valueDisplay[i]);
  }
}
