// Step 1. Create function.
// Step 2. Create a map that stores seen numbers.
// Step 3. Loop through the array.
// Step 4. Get the Current Number.
// Step 5. Find the complement.
// Step 6. Check if the complement exists.
// Step 7. Store the number.


function twoSum(nums,target){
  const map = new Map();

  for (let i = 0; i < nums.length; i++){
    neededValue = target - nums[i];
    if(map.has(needeValue)){
      return [map.get(needeValue, i)];
    }
    map.set(nums[i], i);
  }
}

const result = twoSum([2, 7, 11, 15], 9)

console.log(result)