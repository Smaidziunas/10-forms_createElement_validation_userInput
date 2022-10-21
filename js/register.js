'use strict';
console.log('register.js');


/*
register html

1. perimti formos valdyma su javascript, sutabdyti issiuntima

2. funkcijos viduje gauti visu inputu reiksmes

3. palyginti ir atspausdinti ar sutampa slaptazodziai

4. patikrinti ir pranesti jei nera kazkurios reiksmes.

5. patikrinti kad username butu daugiau nei 3 simboliai ir apie tai pranesti jei nera.

6. Jei sutampa slaptazodiziai paslepti forma su display none. Ir htmle atspausdinti username h2 elemente ir slaptazodi pre elemente.

7. paziureti ar yra @. 

*/


// element helper:

function crEl(tagName, dest, className, text) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (text || text === 0) el.textContent = text;
    dest.append(el);
    console.log(el);
    return el;
  }

// sukuriam formEl
const formEl = document.querySelector('form');

// nusitaikom i inputElements:
const emailEl = document.getElementById('email');
const pswEl = document.getElementById('psw');
const pswRepeatEl = document.getElementById('psw-repeat');




// pridedam event listener
formEl.addEventListener('submit', function (event) {

  event.preventDefault();
  console.log('submit ivyko');

  // nusitaikom i inputValues
  const emailValue = emailEl.value.trim();
  const pswValue = pswEl.value.trim();
  const pswRepeatValue = pswRepeatEl.value.trim();
  // atspausdinam input values
    // console.log('emailvalueEl ===', emailValue);
    // console.log('pswEl ===', pswValue);
    // console.log('pswRepeatEl ===', pswRepeatValue);

  // if(pswValue === pswRepeatValue){
  //   console.log('Slaptazodziai sutampa');
  // } else if (pswValue === 0 || pswRepeatValue) {
  //   console.log('Slaptazodziai NESUTAMPA');
  // }

  // sukuriam values objekta:
  const formValuesObj = {
    email: emailValue,
    password: pswValue,
    passwordRepeat: pswRepeatValue,
  };
  console.log('formValuesObj ===', formValuesObj);

  // tikrinam ar sutampa slaptazodziai
  // if(formValuesObj.password !== formValuesObj.passwordRepeat){
  //       console.log('Slaptazodziai NESUTAMPA');
  //       return;
  // }

  // loopinam per visa objekta ir ziurim ar 
    /* 1. nera empty values:
      2. ar netrumpesnis nei 3 simboliai
      3. ar psw sutampa
      4. ar yra @
    */

    // padarom masyva:
      const keys2 = Object.values(formValuesObj);
      
      debugger;
        for(let element of keys2){
          // console.log('element ===', element);
            if (element.length === 0){
              console.log('nera teksto')            
            } else if (element.length < 3){
                console.log(element, 'permazai simboliu')
            } else if (element === emailValue){ 
                  if (!isThereAletter(emailValue, '@')){
                    console.log('reiketu @')}
            } else if (formValuesObj.password !== formValuesObj.passwordRepeat){
                console.log('Slaptazodziai NESUTAMPA')
            }
                          
          } 
        
  // ar yra @ FUNKCIJA?

  function isThereAletter(valueToCheck, needle) {
    // ir Arrays ir STRING turi sita .includes()
    let arYra = valueToCheck.includes(needle);
    return arYra;
  }

});


