(function letterIntoSpan() {
  const target = '.hovering-animated';
  let elements = document.querySelectorAll(target);
  elements.forEach((element) => {
    const text = element.innerText;
    const letters = text
      .split('')
      .map((letter) => `<span class='animated-letter'>${letter}</span>`)
      .join('');
    element.innerHTML = letters;
  });
  console.log(elements);
})();
