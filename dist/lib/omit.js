module.exports = function omit (obj, keys) {
  var obj$1;

  return Object
    .keys(obj)
    .filter(function (key) { return !keys.includes(key); })
    .reduce(
      function (accum, key) { return (Object.assign({}, accum, ( obj$1 = {}, obj$1[key] = obj[key], obj$1 ))); },
      {}
    )
}
