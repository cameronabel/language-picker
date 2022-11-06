function goToQ1 (event) {
  event.preventDefault();
  const oldText = document.getElementById("title");
  const oldImage = document.getElementById("title-image");
  const newImage = document.getElementById("q1-img");
  const newText = document.getElementById("q1-text")
  
  oldText.classList.toggle("loaded")
  oldText.classList.add("hidden")
  newImage.classList.add("loaded")
  newImage.classList.remove("hidden")
  oldImage.classList.toggle("loaded")
  oldImage.classList.add("hidden")
  newText.classList.remove('hidden')
  newText.classList.add('loaded')
}

function goToQ2 () {
  const oldText = document.getElementById("q1-text");
  const oldImage = document.getElementById("q1-img");
  const newImage = document.getElementById("q2-img");
  const newText = document.getElementById("q2-text");
  
  oldText.classList.toggle("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.toggle("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

window.onload = function () {
  const titleButton = document.getElementById("start-btn");
  titleButton.addEventListener("click", goToQ1);

  let form1 = document.getElementsByName("platform")
  for (let platformButton of form1) {
    platformButton.addEventListener('click', function () {
      localStorage.platform = platformButton.value
      goToQ2()
    })
  }
}