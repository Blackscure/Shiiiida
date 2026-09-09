 // Step 1. create dummy
 // Step 2. move previous before left
 // step 3create current is the first node to be reversed
 // reverse section
 // step 4 save next
 // Step 5 skip next
 // Step 6 put next befor current
 // Step 7 connect prev to next
 // Step 8 return dummy



function reverseBetween(head, left, right){
    //Step 1. create dummy
    const dummy = new ListNode(0);
    dummy.next = head;

    //Step 2. move previous before left
     let prev = dummy;

     for(let i = 1; i < left; i++){
        prev = prev.next;
     }
     //Step 3 current is the first node to be reversed
     let current = prev.next;

     // reverse section
     for (let i = 0; i < right - left; i++){
        // step 4 save next
        let next = current.next;

        // Step 5 skip next
        current.next = next.next;

        // Step 6 put next befor current
        next.next  = prev.next;

        // Step 7 connect prev to next
        prev.next = next;
     }

     return dummy.next;
}