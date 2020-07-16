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

function complexFunction () {
    if (Math.random() > 0.5) {
      console.log('high')
    } else {
      console.log('low')
    }
}

module.exports = {
  multiply,
  asyncMultiply,
  getElement
}
