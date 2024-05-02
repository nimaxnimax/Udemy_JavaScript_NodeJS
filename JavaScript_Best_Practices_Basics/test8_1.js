// Remove non-alphanumeric characters and convert to lowercase
var str = "test1234!@#$";
var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
console.log(str);
console.log(cleanStr);

