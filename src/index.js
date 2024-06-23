const main = function(dom, text, time = 300) {
  let div = document.createElement('div');
  dom.appendChild(div);
  let textArray = text.split('');
  let addText = setInterval(() => {
    if (textArray.length) {
      div.innerHTML = div.innerHTML + textArray.shift();
    } else {
      clearInterval(addText)
    }
  }, time);
}
export default main