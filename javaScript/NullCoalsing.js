/*the nullish coalescing operator is  */

function sum(b) {
    let val = b ?? "something went wrong"
    console.log(val)
}
sum(null);
sum(undefined);
sum(10);