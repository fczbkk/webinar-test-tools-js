function multiply (a, b) {
  return a * b
}

function asyncMultiply (a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(multiply(a, b))
    }, 1000)
  })
}

function getElement (tagName, content) {
  const element = document.createElement(tagName)
  element.innerHTML = content
  return element
}

module.exports = {
  multiply,
  asyncMultiply,
  getElement
}
