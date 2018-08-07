function objSubscribe (obj, callback) {
  const proxy = new Proxy(obj, {
    set (obj, prop, val) {
      obj[prop] = val
      callback(obj)
      return true
    }
  })

  return proxy
}

module.exports = objSubscribe
