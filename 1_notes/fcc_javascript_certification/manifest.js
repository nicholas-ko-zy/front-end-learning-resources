const cargoManifest = {
  containerId: null,
  destination: null, 
  weight: null,
  unit: null,
  hazmat: null
}

function normalizeUnits(manifest) {
  // Create a copy of the manifest object
  if (manifest.unit == "kg") {
    let converted_manifest = manifest;
    return converted_manifest;
  } else {
    let weight_kg = manifest.weight * 0.45;
    const converted_manifest = {
      containerId: manifest.containerId,
      destination: manifest.destination, 
      weight: weight_kg,
      unit: "kg",
      hazmat: manifest.hazmat
    }
    return converted_manifest;
  }
  return converted_manifest;
};

let new_manifest = normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true });

console.log(new_manifest);
console.log(typeof(new_manifest.weight));

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

function validateManifest(manifest) {
  // Check if all properties are there
  let valid_id = manifest.hasOwnProperty("containerId");
  let has_destination = manifest.hasOwnProperty("destination");
  let has_weight = manifest.hasOwnProperty("weight");
  let has_unit = manifest.hasOwnProperty("unit");
  let has_hazmat = manifest.hasOwnProperty("hazmat");

  if (has_id && has_destination && has_weight && has_unit && has_hazmat) {
    return {}
  }
  else {

  }
};