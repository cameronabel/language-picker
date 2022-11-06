function goToQ1 (event) {
  event.preventDefault();
  oldText = document.getElementById("title");
  qImage = document.getElementById("q1-img");
  oldText.classList.toggle("loaded")
  oldText.classList.add("hidden")
  qImage.classList.add("loaded")
  qImage.classList.remove("hidden")
  oldImage = document.getElementById("title-image")
  oldImage.classList.toggle("loaded")
  oldImage.classList.add("hidden")
  newText = document.getElementById("q1-text")
  newText.classList.remove('hidden')
  newText.classList.add('loaded')
}

window.onload = function () {
  const titleButton = document.getElementById("start-btn");
  titleButton.addEventListener("click", goToQ1);
}