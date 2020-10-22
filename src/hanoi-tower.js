module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = 0;
  
  for(let i = 0; i < disksNumber; ++i) {
    result += Math.pow(2, i)
  }
    
  return {
      turns: result,
      seconds: Math.floor(result / (turnsSpeed / 3600))
  };
}
