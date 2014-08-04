exports.assign = function(target) {
  if (target) for (var i = 1; i < arguments.length; ++i) {
    var source = arguments[i]
    for (var key in source) target[key] = source[key]
  }

  return target
}

exports.isEmpty = function(value) {
  if (typeof value == "string") return value.length == 0
  for (value in value) return false
  return true
}
