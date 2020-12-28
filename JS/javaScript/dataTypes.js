/*there eight basic datatypes in javascript
1) Number   2)Big Int values are greater than (2^53 - 1) to -(2^53 -1)  are consider as big int
3) String   4) Object   5) Boolean  6) Null  7)Undefined  8)Symbol
*/

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)