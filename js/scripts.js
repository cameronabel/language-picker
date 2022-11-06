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

function goToQ3 () {
  const oldText = document.getElementById("q2-text");
  const oldImage = document.getElementById("q2-img");
  const newImage = document.getElementById("q3-img");
  const newText = document.getElementById("q3-text");
  
  oldText.classList.toggle("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.toggle("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToQ4 () {
  const oldText = document.getElementById("q3-text");
  const oldImage = document.getElementById("q3-img");
  const newImage = document.getElementById("q4-img");
  const newText = document.getElementById("q4-text");
  
  oldText.classList.toggle("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.toggle("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToQ5 () {
  const oldText = document.getElementById("q4-text");
  const oldImage = document.getElementById("q4-img");
  const newImage = document.getElementById("q5-img");
  const newText = document.getElementById("q5-text");
  
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
  for (let selection of form1) {
    selection.addEventListener('click', function () {
      localStorage.platform = selection.value
      goToQ2()
    })
  }

  let form2 = document.getElementsByName("exp")
  for (let selection of form2) {
    selection.addEventListener('click', function () {
      localStorage.exp = selection.value
      goToQ3()
    })
  }

  let form3 = document.getElementsByName("legacy")
  for (let selection of form3) {
    selection.addEventListener('click', function () {
      localStorage.legacy = selection.value
      goToQ4()
    })
  }

  let form4 = document.getElementsByName("game")
  for (let selection of form4) {
    selection.addEventListener('click', function () {
      localStorage.game = selection.value
      goToQ5()
    })
  }

}