  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  let a = [];
 
  methodsToPatch.forEach((arr,idx)=>{
    a.push(arr);
    a[idx]=arr;
  });

//   methodsToPatch.forEach((arr,idx)=>a[idx]=arr);
  methodsToPatch.forEach(
      (arr,idx)=>(a[idx]=arr)
  );
  

  
  a.forEach((arr,idx)=>{
    console.log(idx , arr);
  });

  
  a.forEach((el,idx,arr) => 
    console.log(idx, el)
  );

  



