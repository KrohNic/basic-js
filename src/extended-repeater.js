module.exports = function repeater(str, options) {
  let result;
  
  if(options.hasOwnProperty('addition')) {
    let addition;
    
    if(options.additionRepeatTimes)
      addition = new Array(options.additionRepeatTimes).fill(options.addition + '');
    else
      addition = [options.addition + ''];
    
    if(options.hasOwnProperty('additionSeparator'))
      addition = addition.join(options.additionSeparator + '');
    else
      addition = addition.join('+');
    
    result = str + addition;
  } else
    result = str;
  
  if(options.repeatTimes)
    result = new Array(options.repeatTimes).fill(result);
  else
    result = [ result ];
  
  if(options.hasOwnProperty('separator'))
    result = result.join(options.separator + '');
  else
    result = result.join('+');
  
  return result;
};
