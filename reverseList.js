// Step 1 save next
// Step 2 Reverse current.next
// Step 3 Move Previous
// Step 4 Move current

function reversedList(head){
    let previous = null;
    let current = head;

    while(current !== null){
        let next = current.next;

        current.next = previous;

        current = next;
    }

    return previous;
}