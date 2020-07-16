function doSomething () {
  if (false) {
    console.log('hello')
  }
  return 'something'
}

function doSomethingElse () {
  return 'something else'
}


module.exports = {
  doSomething,
  doSomethingElse
}
