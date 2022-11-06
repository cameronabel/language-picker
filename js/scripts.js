function goToQ1(event) {
  event.preventDefault();
  const oldText = document.getElementById("title");
  const oldImage = document.getElementById("title-image");
  const newImage = document.getElementById("q1-img");
  const newText = document.getElementById("q1-text")
  
  oldText.classList.remove("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.remove("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToQ2() {
  const oldText = document.getElementById("q1-text");
  const oldImage = document.getElementById("q1-img");
  const newImage = document.getElementById("q2-img");
  const newText = document.getElementById("q2-text");
  
  oldText.classList.remove("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.remove("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToQ3() {
  const oldText = document.getElementById("q2-text");
  const oldImage = document.getElementById("q2-img");
  const newImage = document.getElementById("q3-img");
  const newText = document.getElementById("q3-text");
  
  oldText.classList.remove("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.remove("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToQ4() {
  const oldText = document.getElementById("q3-text");
  const oldImage = document.getElementById("q3-img");
  const newImage = document.getElementById("q4-img");
  const newText = document.getElementById("q4-text");
  
  oldText.classList.remove("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.remove("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToQ5() {
  const oldText = document.getElementById("q4-text");
  const oldImage = document.getElementById("q4-img");
  const newImage = document.getElementById("q5-img");
  const newText = document.getElementById("q5-text");
  
  oldText.classList.remove("loaded");
  oldText.classList.add("hidden");
  newImage.classList.add("loaded");
  newImage.classList.remove("hidden");
  oldImage.classList.remove("loaded");
  oldImage.classList.add("hidden");
  newText.classList.remove('hidden');
  newText.classList.add('loaded');
}

function goToResult() {
  const oldText = document.getElementById("q5-text");
  const oldImage = document.getElementById("q5-img");
  const leftDiv = document.getElementById("left-half");
  const rightDiv = document.getElementById("right-half");

  
  oldText.classList.remove("loaded");
  oldText.classList.add("hidden");
  oldImage.classList.remove("loaded");
  oldImage.classList.add("hidden");
  leftDiv.classList.remove("loaded");
  leftDiv.classList.add("hidden");
  rightDiv.classList.remove("loaded");
  rightDiv.classList.add("hidden");
  displayResult()
}

function displayResult() {
  const platform = localStorage.platform;
  const exp = localStorage.exp;
  const legacy = localStorage.legacy;
  const game = localStorage.game;
  const popular = localStorage.popular;

  let result;
  if (popular === 'obscure') {
    result = document.getElementById("brainfuck");
  } else if (exp === 'no') {
    result = document.getElementById("python");
  } else if (legacy === 'old') {
    result = document.getElementById("cobol");
  } else if (platform === 'mobile') {
    result = document.getElementById("swift");
  } else if (platform === 'web' && game === 'gamer') {
    result = document.getElementById("javascript");
  } else if (platform === 'web' && game === 'non-gamer') {
    result = document.getElementById("ruby");
  } else if (platform === 'desktop' && game === 'gamer'){
    result = document.getElementById("c/c#");
  }
  const resultField = document.getElementById("results")
  resultField.classList.remove('hidden')
  result.classList.remove('hidden')
  const restartButton = document.getElementById("start-over-btn");
  restartButton.addEventListener("click", function () {
    resultField.classList.add('hidden')
    result.classList.add('hidden');
    const leftDiv = document.getElementById("left-half");
    const rightDiv = document.getElementById("right-half");
    leftDiv.classList.remove("hidden");
    leftDiv.classList.add("loaded");
    rightDiv.classList.remove("hidden");
    rightDiv.classList.add("loaded");

    const newText = document.getElementById("title");
    const newImage = document.getElementById("title-image");
    newText.classList.remove('hidden');
    newText.classList.add('loaded');
    newImage.classList.add("loaded");
    newImage.classList.remove("hidden");
  }
  );
}

window.onload = function () {
  const titleButton = document.getElementById("start-btn");
  titleButton.addEventListener("click", goToQ1);


  let form1 = document.getElementsByName("platform")
  for (let selection of form1) {
    selection.addEventListener('click', function () {
      localStorage.platform = selection.value;
      goToQ2()
    })
  }

  let form2 = document.getElementsByName("exp")
  for (let selection of form2) {
    selection.addEventListener('click', function () {
      localStorage.exp = selection.value;
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

  let form5 = document.getElementsByName("popular")
  for (let selection of form5) {
    selection.addEventListener('click', function () {
      localStorage.popular = selection.value
      goToResult()
    })
  }

}