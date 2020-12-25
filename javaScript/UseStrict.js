/* use strict will execute javascript in strict mode;
 it will not allow variable without declaration ; and it wont allow Deleting a variable (or object) and a function is not allowed.
 Duplicate parameters are not allowed in function
 */

'use strict';

let a = "hello";
//c = "Hi"; //error

function add(x,x){
    return x+x;
}

