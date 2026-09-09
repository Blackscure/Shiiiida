// reserse = 0;

// while x !== 0:

// a). Get the last digit 
// digit = x % 10

// b). Remove the last digit
// x = trunc(x / 10)

// check wheather adding digit causes overflow

// add the digit to the reversed
// reversed = reversed * 10 + digit

// return the reversed`

function reserse(x){
    // 32 bit interger limit
    const MAX  = 2 ** 31 -1;
    const MIN =  -(2 ** 31);

    let reversed = 0;

    while (x !== 0){
        digit = x % 10;

        x = Math.trunc(x / 10);

       if(reversed > Math.trunc(MAX / 10) || (reversed === Math.trunc(Max / 10) && digit > Max % 10)){
        return 0;
       }

       if(reversed < Math.trunc(MiN / 10) || (reversed === Math.trunc(MIN / 10 && digit < MIN % 10))){
        return 0;
       }

       reversed = reversed * 10 + digit
    }

    return reversed
}