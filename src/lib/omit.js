module.exports = function omit (obj, keys) {
  return Object
    .keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce(
      (accum, key) => ({ ...accum, [key]: obj[key] }),
      {}
    )
}
