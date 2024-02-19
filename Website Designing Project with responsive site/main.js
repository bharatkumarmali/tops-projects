
// counter 
const elements = document.querySelectorAll(".count-numbers");
let interval = 4000;

elements.forEach(element => {
  let counter = 0
  let endvalue = parseInt(element.getAttribute("data-value"))
  let duration = Math.floor(interval / endvalue)
  const count = setInterval(function () {
    counter++
    element.innerText = counter + '+'
    if (counter == endvalue) {
      clearInterval(count)
    }
  }, duration);
})
