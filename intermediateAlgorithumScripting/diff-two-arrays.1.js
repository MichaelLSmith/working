function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var base;
  var comp;
  var len;
  
  //use the longer array as base comparison.
  //for each val in the longer array, find a match in the second array.
  //if no match exists, push that value into new array.
  
  console.log(arr1.length);
  console.log(arr2.length);
  
    if( arr1.length > arr2.length ){ 
        console.log('arr1 = base');
        base = arr1; comp = arr2; len = arr2.length; } 
    else {
    console.log('arr2 = base');
    base = arr2; comp = arr1; len = arr1.length;
    }
    
    console.log(base);
    // console.log(comp);
    // console.log(len);

    for(var i = 0; i<len; i++){
        console.log('i: '+i);
        console.log('base: '+base[i]);
        console.log('comp: '+comp[i]);
        if(base[i] !== comp[i]){
            console.log('inIf');
            newArr.push(base[i]);
        }
    }

  
    return newArr;
}

console.log(diff( [1, "calf", 3, "piglet"], [1, "calf", 3, 4]) );