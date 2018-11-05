// two major changes:

// The element that is clicked should be the last one to fade out (but only by a little!)

// All other elements should fade out within a small range of each other and not at exactly the same time

/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here
  setTimeout(() => {
    fadeOut(div)
  }, range)
}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout(() => {
    fadeIn(div)
  }, range)
}

function fadeAllOut(el, group) {
  // Your solution here
  let counter = 0;
  group.forEach(div => {
    if (el===div) {
      delayedFadeOut(div, LONGRANGE)
    } else {
      delayedFadeOut(div, SHORTRANGE+counter)
    }
    counter+=200;
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div, LONGESTPOSSIBLE)
  })
}
