function valid_id(manifest) {
  id = manifest.containerId
  if (typeof(id) != "number" || id < 0) {
    if (id.isInteger()) {
      return true
    }
    else {
      return false
    }
  } else {
    return false
  }
}

manifest_1
manifest_2
console.log();