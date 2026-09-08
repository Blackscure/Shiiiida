function isFirstNonRepeatingCharacter(s){
  const counter = new Map();

  for(let char of s){
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for(let char of s){
    if(counter.get(char) === 1){
      return char;
    }
  }
  return null;
}

console.log(isFirstNonRepeatingCharacter("aabbcc"))
