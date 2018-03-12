module.exports = function omit (obj, keys) {
  return Object
    .keys(obj)
    .filter(function (key) { return !keys.includes(key); })
    .reduce(
      function (accum, key) {
        var obj$1;

        return (Object.assign({}, accum, ( obj$1 = {}, obj$1[key] = obj[key], obj$1 )));
  },
      {}
    )
}
