const mainImages = document.querySelectorAll(".img img");
const smallImages = document.querySelectorAll(".small-imgs img");
const navBarButton = document.querySelector("header .header-container .menu");
const navBar = document.querySelector("header .header-container .links");

setInterval(() => {
  const smallActiveImage = document.querySelector(".small-imgs img.active");
  const index = smallActiveImage.dataset.index;
  let smallImgsIndex = index;
  removeClassActiveByForLoap(mainImages);
  removeClassActiveByForLoap(smallImages);

  smallImgsIndex++;
  if (smallImgsIndex == 4) {
    smallImgsIndex = 0;
  }

  addActiveClassByIndex(smallImages, smallImgsIndex);
  addActiveClassByIndex(mainImages, smallImgsIndex);
}, 2000);

function removeClassActiveByForLoap(e) {
  for (i = 0; i < e.length; i++) {
    e[i].classList.remove("active");
  }
}

function addActiveClassByIndex(e, index) {
  e[index].classList.add("active");
}

navBarButton.addEventListener("click", function () {
  addActiveClass(navBar);
});

function addActiveClass(e) {
  e.classList.toggle("active");
}
