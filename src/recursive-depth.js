module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    
    for(let i = 0; i < arr.length; ++i) {
      if(arr[i] instanceof Array) {
        let tempDepth = this.calculateDepth(arr[i]);
        
        if(tempDepth > maxDepth)
          maxDepth = tempDepth;
      }
    }
    
    return maxDepth + 1;
  }
};
