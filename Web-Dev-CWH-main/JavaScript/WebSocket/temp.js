let str1 = "17";
let str2 = "21";
let xyz = ++str1 + ++str2;
console.log(xyz);   // 40 because str1 and str2 are converted to numbers before incrementing and adding them together

// str1 = 17
// str2 = 21
//str3 = ++str1 // 18
//str4 = ++str2 // 22
//str5 = str3 + str4 // 40