module.exports = function transform(arr) {
  if(!(arr instanceof Array))
    throw new Error();
  
  let result = [];
  
  for(let i = 0; i < arr.length; ++i) {
   switch(arr[i]) {
     case '--discard-next':
       result.push('--deleted');
       ++i;
       break;
     case '--discard-prev':
       result.pop();
       result.push('--deleted');
       break;
     case '--double-next':
       if(i + 1 < arr.length)
         result.push(arr[i + 1])
       break;
     case '--double-prev':
       if(i - 1 >= 0)
         result.push(result[result.length - 1]);
       break;
     default:
       result.push(arr[i]);
   } 
  }
  
  const temp = [...result];
  result = [];
  
  for(const item of temp)
    if(item !== '--deleted')
      result.push(item);
  
  return result;
};
