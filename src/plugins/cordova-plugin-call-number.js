exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.plugins.CallNumber === 'undefined') {
      return cb(false)
    }

    // pass through the CallNumber object
    Vue.cordova.CallNumber = window.plugins.CallNumber

    return cb(true)

  }, false)
}
