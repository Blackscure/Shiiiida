// Step 1 create function pass s as paremeter
// Step 2 store the longest chareter so far
// Step 3 expand outward given left and right positions
// step 4 try every charecter center

function longestPalindrome(s){
    let longest = "";

    function expand(left, right){
        while(left >= 0 && right < s.lenght && s[left] == s[right]){
            left --;
            right ++;
        }
        return s.substring(left +1, right);
    }

    // try every chareter center
    for(let i = 0; i < s.length; i++){
        let odd = expand(i,i);
        let even = expand(i, i + 1);

        if(odd.length > longest.length){
            longest = odd
        }

        if(even.length > longest.length){
            longest = even;
        }
    }

    return longest;
}