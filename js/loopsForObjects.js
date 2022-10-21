'use strict';
console.log('loopsForObjects.js');

    // padaro masyva, kur kiekviena reiksme eina su [0] = key; [1] = value;
      // Object.entries()

    const keys = Object.entries(formValuesObj);

      console.log('keys ===', keys);

      for(let element of keys){

        console.log(element[1]);
          if (element[1].length === 0){
          console.log('nera teksto');
      }
    }


      // padaro masyva:
        // Object.values()

      const keys2 = Object.values(formValuesObj);

        for(let element of keys2){
          // console.log('element ===', element);
            if (element.length === 0){
            // console.log('nera teksto');
          }
        }