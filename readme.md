==================== Forms JS====================

helper input:
[helper input](js/helperInput.js)

Form created detailed:
[form](js/forms.js)

loops over objects:
obeject to array:
Object.values() - takes out values from the object and puts them to array;
Object.entries() - makes an array of arrays witheach inner array having two elements: key and value;
Object.keys() - makes an array from object keys;

Is there a letter function:

function isThereAletter(valueToCheck, needle) {
// ir Arrays ir STRING turi sita .includes()
let arYra = valueToCheck.includes(needle)
console.log('arYra ===', arYra);
return arYra;
}
isThereAletter(valueToCheck, needle);

inputEl.value.trim() - trim() deletes white spaces;

console.error - similar to console.log, makes creates an error message.
