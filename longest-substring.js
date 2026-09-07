function longestSubstring(){
    const seen = new Set();

    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < seen.length; right++){
        while(seen.has(s[right])){
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb"));