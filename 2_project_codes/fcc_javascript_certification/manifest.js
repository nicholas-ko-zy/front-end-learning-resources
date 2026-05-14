// Object Structure
const cargoManifest = {
  containerId: null,
  destination: null, 
  weight: null,
  unit: null,
  hazmat: null
}

// containerId: a positive integer identifying the associated cargo container.
// destination: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
// weight: a positive number representing the cargo's weight.
// unit: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
// hazmat: a boolean value indicating whether hazardous material handling is needed.

// 1. normalizeUnits()
// Old version
// function normalizeUnits(manifest) {
//   // Create a copy of the manifest object
//   if (manifest.unit == "kg") {
//     let converted_manifest = manifest;
//     return converted_manifest
//   } else {
//     let weight_kg = manifest.weight * 0.45;
//     const converted_manifest = {
//       containerId: manifest.containerId,
//       destination: manifest.destination, 
//       weight: weight_kg,
//       unit: "kg",
//       hazmat: manifest.hazmat
//     }
//     return converted_manifest
//   }
// };

function normalizeUnits(manifest) {
  if (manifest.unit === "kg") {
    return {...manifest};
  }
  const weightInKg = manifest.weight * 0.45
  return {
    ...manifest,
    weight: weightInKg,
    unit: "kg"
  }
}

// 2. validateManifest()
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
    if (typeof(destination) == "string") {
      if (destination.trim() != "") {
        return true
      }
        
    }
    return false
    
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
    let error_message = {};
    // Write 10 if/ if else statements...sigh
    // Invalid id
    if (!has_valid_id) {
      error_message["containerId"] = "Invalid";
    }
    // Missing id
    if (check_missing_attribute(manifest, 'containerId')) {
      error_message["containerId"] = "Missing"
    }
    // Invalid destination
    if (!has_valid_destination) {
      error_message["destination"] = "Invalid";
    }
    // Missing destination
    if (check_missing_attribute(manifest, 'destination')) {
      error_message["destination"] = "Missing"
    }
    // Invalid weight
    if (!has_valid_weight) {
      error_message["weight"] = "Invalid";
    }
    // Missing weight
    if (check_missing_attribute(manifest, 'weight')) {
      error_message["weight"] = "Missing"
    }
    // Invalid unit
    if (!has_valid_unit) {
      error_message["unit"] = "Invalid";
    }
    // Missing unit
    if (check_missing_attribute(manifest, 'unit')) {
      error_message["unit"] = "Missing"
    }
    // Invalid hazmat
    if (!has_valid_hazmat) {
      error_message["hazmat"] = "Invalid";
    }
    // Missing hazmat
    if (check_missing_attribute(manifest, 'hazmat')) {
      error_message["hazmat"] = "Missing"
    }
    return error_message
  }
};

////////////////// PERSONAL TEST CASES /////////////////////////////

// console.log(`Valid ID: ${check_valid_id(manifest)}`);
// console.log(`Valid Destination: ${check_valid_destination(manifest)}`);
// console.log(`Valid Weight: ${check_valid_weight(manifest)}`);
// console.log(`Valid Unit: ${check_valid_unit(manifest)}`);
// console.log(`Valid Hazmat: ${check_valid_hazmat(manifest)}`);
// console.log(`Missing Attribute: ${check_missing_attribute(manifest, "hazmat")}`);

////////////////// FCC TEST CASES /////////////////////////////
const expected = [];
const input = [];
const result = [];
const comparison = [];

expected.push({containerId: 68, destination: "Salinas", weight: 45.45, unit: "kg", hazmat: true});
input.push({containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true });
result.push(normalizeUnits(input[0]));
comparison.push(JSON.stringify(result[0]) == JSON.stringify(expected[0]));
console.log(`Test 2 Results: ${comparison[0]}`)

expected.push({});
input.push({containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false });
result.push(validateManifest(input[1]));
comparison.push(JSON.stringify(result[1]) == JSON.stringify(expected[1]));
console.log(`Test 6 Results: ${comparison[1]}`)

expected.push({containerId: "Missing", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing"});
input.push({});
result.push(validateManifest(input[2]));
comparison.push(JSON.stringify(result[2]) == JSON.stringify(expected[2]));
console.log(`Test 8 Results: ${comparison[2]}`)

expected.push({containerId: "Missing", destination: "Invalid", weight: "Missing", unit: "Missing", hazmat: "Missing"})
input.push({destination: "  "})
result.push(validateManifest(input[3]))
comparison.push(JSON.stringify(result[3]) == JSON.stringify(expected[3]))
console.log(`Test 13 Results: ${comparison[3]}`)
console.log(result[3])
