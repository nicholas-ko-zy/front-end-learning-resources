const cargoManifest = {
  containerId: null,
  destination: null, 
  weight: null,
  unit: null,
  hazmat: null
}

function check_valid_id(manifest) {
  let id = manifest.containerId;
  if (typeof(id) == "number" && id > 0) {
    if (Number.isInteger(id)) {
      return true
    }
    else {
      return false
    }
  } else {
    return false
  }
}

function check_valid_destination(manifest) {
    let destination = manifest.destination;
    if (destination != "" && typeof(destination) == "string") {
        return true
    }
    else {
        return false
    }
};

function check_valid_weight(manifest) {
    let weight = manifest.weight;
    if (typeof(weight) == "number" && weight > 0) {
        return true
    } else {
        return false
    }
    
};

function check_valid_unit(manifest) {
  // Check is string
  let unit = manifest.unit;
  if (typeof(unit) == "string" && ["lb", "kg"].includes(unit)) {
    return true
  } else {
    return false
  }
};

function check_valid_hazmat(manifest) {
  let hazmat = manifest.hazmat;
  if (typeof(hazmat) == "boolean") {
    return true
  }
  else {
    return false
  }
};

function check_missing_attribute(manifest, attribute) {
    return !manifest.hasOwnProperty(attribute)
}

let manifest =  {containerId: 1, 
                destination: "Santa Cruz", 
                weight: 304, 
                unit: "kg", 
                hazmat: false };

console.log(`Valid ID: ${check_valid_id(manifest)}`);
console.log(`Valid Destination: ${check_valid_destination(manifest)}`);
console.log(`Valid Weight: ${check_valid_weight(manifest)}`);
console.log(`Valid Unit: ${check_valid_unit(manifest)}`);
console.log(`Valid Hazmat: ${check_valid_hazmat(manifest)}`);
console.log(`Missing Attribute: ${check_missing_attribute(manifest, "hazmat")}`);

function validateManifest(manifest) {
  // Check if all properties are there
  let has_valid_id = check_valid_id(manifest);
  let has_valid_destination = check_valid_destination(manifest);
  let has_valid_weight = check_valid_weight(manifest);
  let has_valid_unit = check_valid_unit(manifest);
  let has_valid_hazmat = check_valid_hazmat(manifest);

  if (has_valid_id && has_valid_destination && has_valid_weight && has_valid_unit && has_valid_hazmat) {
    return {}
  }
  else {
    // Initialise empty object
    const error_message = {};
    // Write 10 if/ if else statements...sigh
    // Invalid id
    if (!has_valid_id) {
        error_message["containerId"] = "Invalid";
    }
    // Missing id
    // Invalid destination 
    // Missing destination
    // Invalid weight
    // Missing weight
    // Invalid unit
    // Missing unit
    // Invalid hazmat
    // Missing hazmat
    
  }
};