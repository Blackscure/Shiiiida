function isAnagram(s, t){
    if (s.length !== t.length) {
        return false;
    }

  const counter = new Map();

  for(let char of s){
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for(let char of t){
    if(!counter.has(char)){
      return false;
      counter.set(char,counter.get(char) -1);
    }
    if(counter.get(char) < 0){
      return false;
    }
   
  }
   return true;
}

console.log(isAnagram("anagram", "nagaram"));