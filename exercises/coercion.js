// Exist two types of coercion, explicit coercion and implicit coercion.
// Implicit coercion happens when Javascript help us changing the value type
let exOne = 4 + "7";
let exTwo = 4 * "7";
// Explicit coercion happens when we force to change the value type
let a = 20;
let b = a + "";
typeof b;

let c = String(a);
typeof c;

let d = Number(c);
typeof d;