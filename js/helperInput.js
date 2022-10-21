'use strict';
console.log('helperInput.js');


let inputValue = 'James';

function isValueEmpty(valueToCheck){
  let result = valueToCheck.length === 0;
  console.log('result ===', result);
  return result;
}

isValueEmpty(inputValue);


function isThereAletter(valueToCheck, needle) {
  // ir Arrays ir STRING turi sita .includes()
  let arYra = valueToCheck.includes(needle)
  console.log('arYra ===', arYra);
  return arYra;
}

isThereAletter(valueToCheck, needle);