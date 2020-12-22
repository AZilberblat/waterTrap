const assert = require('assert');

waterTrap = (heights) => {

    // we need 3 elemnts minimum to trap water
    if( heights.length < 3){
        return 0
    }

    // Declaring variabels
    let maxRight = -1 
    let maxLeft = -1 

    let right = heights.length - 1 
    let left = 0
    
    let waterTrapped = 0
  
    while (left <= right) {
        //Geting the maximum heights from both sides
        maxLeft = heights[left] > maxLeft ? heights[left] : maxLeft
        maxRight = heights[right] > maxRight? heights[right] : maxRight
        
        //Calculating the amount of water trapped in each iteration
        if (maxLeft > maxRight) {
            waterTrapped += maxRight - heights[right]
            right--
        }
        else {
            waterTrapped += maxLeft - heights[left]
            left++
        }
    }
  
    return waterTrapped
};

// Expercted 6
assert.strictEqual(waterTrap([0,1,0,2,1,0,1,3,2,1,2,1]),6)
console.log("Given [0,1,0,2,1,0,1,3,2,1,2,1] output is " + waterTrap([0,1,0,2,1,0,1,3,2,1,2,1]))
// Expercted 9
assert.strictEqual(waterTrap( [4,2,0,3,2,5]),9)
console.log("Given [4,2,0,3,2,5] output is " + waterTrap([4,2,0,3,2,5]))
// Expected 0
assert.strictEqual(waterTrap( [0,0,0,0]),0)
console.log("Given [0,0,0,0] output is " + waterTrap([0,0,0,0]))
assert.strictEqual(waterTrap( [0,1]),0)
console.log("Given [0,1] output is " + waterTrap([0,1]))
// assert should fail 
assert.strictEqual(waterTrap( [0,1]),1)

