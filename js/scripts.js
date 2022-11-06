/**
 * Delays some future JS execution
 * @param {Number} time in milliseconds
 * @returns {Promise} a Promise to execute the function
 */
function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * Hides the old page elements and fades in the new
 * @param {*} oldText 
 * @param {*} oldImage 
 * @param {*} newText 
 * @param {*} newImage 
 */
function hideAndFadeIn(oldText, oldImage, newText, newImage) {
  oldText.classList.remove("loaded");
  oldImage.classList.remove("loaded");
  newImage.classList.add("loaded");
  newText.classList.add('loaded');
  newImage.classList.remove("hidden");
  newText.classList.remove('hidden');
  newImage.classList.remove("invisible");
  newText.classList.remove('invisible');
  oldText.classList.add("invisible")
  oldImage.classList.add("invisible")
  delay(300).then(() => oldText.classList.add("hidden"));
  delay(300).then(() => oldImage.classList.add("hidden"));
}

/**
 * Transition from title page to question 1
 * @param {event} event button submit event
 */
function goToQ1(event) {
  event.preventDefault();
  const oldText = document.getElementById("title");
  const oldImage = document.getElementById("title-image");
  const newImage = document.getElementById("q1-img");
  const newText = document.getElementById("q1-text")
  hideAndFadeIn(oldText, oldImage, newText, newImage)
}

/**
 * Transition from question 1 to question 2
 */
function goToQ2() {
  const oldText = document.getElementById("q1-text");
  const oldImage = document.getElementById("q1-img");
  const newImage = document.getElementById("q2-img");
  const newText = document.getElementById("q2-text");
  hideAndFadeIn(oldText, oldImage, newText, newImage)
}

/**
 * Transition from question 2 to question 3
 */
function goToQ3() {
  const oldText = document.getElementById("q2-text");
  const oldImage = document.getElementById("q2-img");
  const newImage = document.getElementById("q3-img");
  const newText = document.getElementById("q3-text");
  hideAndFadeIn(oldText, oldImage, newText, newImage)
}

/**
 * Transition from question 3 to question 4
 */
function goToQ4() {
  const oldText = document.getElementById("q3-text");
  const oldImage = document.getElementById("q3-img");
  const newImage = document.getElementById("q4-img");
  const newText = document.getElementById("q4-text");
  hideAndFadeIn(oldText, oldImage, newText, newImage)
}

/**
 * Transition from question 4 to question 5
 */
function goToQ5() {
  const oldText = document.getElementById("q4-text");
  const oldImage = document.getElementById("q4-img");
  const newImage = document.getElementById("q5-img");
  const newText = document.getElementById("q5-text");
  hideAndFadeIn(oldText, oldImage, newText, newImage)
}

/**
 * Transition from question 5 to results page
 */
function goToResult() {
  const oldText = document.getElementById("q5-text");
  const oldImage = document.getElementById("q5-img");
  const leftDiv = document.getElementById("left-half");
  const rightDiv = document.getElementById("right-half");
  
  oldText.classList.remove("loaded");
  oldImage.classList.remove("loaded");
  oldText.classList.add("invisible")
  oldImage.classList.add("invisible")
  leftDiv.classList.remove("loaded");
  rightDiv.classList.remove("loaded");
  leftDiv.classList.add("invisible")
  rightDiv.classList.add("invisible")
  leftDiv.classList.add("hidden")
  rightDiv.classList.add("hidden")
  displayResult()
}

/**
 * Computes result and unhides relevant page elements
 */
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
  } else if (legacy === 'old' && platform === "desktop") {
    result = document.getElementById("cobol");
  } else if (platform === 'mobile') {
    result = document.getElementById("swift");
  } else if (platform === 'web' && game === 'gamer') {
    result = document.getElementById("javascript");
  } else if (platform === 'web' && game === 'non-gamer') {
    result = document.getElementById("ruby");
  } else if (platform === 'desktop' && game === 'gamer'){
    result = document.getElementById("c/c#");
  } else {
    result = document.getElementById("python")
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

/**
 * Assigns event listeners upon page load
 */
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
