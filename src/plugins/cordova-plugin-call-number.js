exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.CallNumber === 'undefined') {
      return cb(false)
    }

    // pass through the CallNumber object
    Vue.cordova.CallNumber = window.CallNumber

    return cb(true)

  }, false)
}
