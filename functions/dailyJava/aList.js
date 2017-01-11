function arrayToList(arr) {
    if(arr.length) return { value: arr.shift(), rest: arrayToList(arr) };
    return null;
}
var myList = arrayToList([1, 2, 3]);
console.log("arrayToList");
console.log(myList);
console.log("***********");

function listToArray(list, arr) {
    arr = arr || [];
    arr.push(list.value);
    if(list.rest) listToArray(list.rest, arr);
    return arr;
}
var arrFromList = listToArray(myList);

console.log("listToArray: "+arrFromList);
console.log("*****");
function prepend(elem, list) {
    return { value: elem, rest: list };
}

console.log(prepend(0,myList));

// //non recursive
// function nth(num, list) {
//     var arr = listToArray(list);
//     var i = arr.indexOf(num);
//     if(i > -1) return i;
//     return undefined;
// }
console.log(myList);
//console.log(nth(2, myList));
//
// // recursive version
function nth(num, list, count) {
    if(!count) count = 0;
    //turnary operator            if list.rest :contidtions                or
    if(num !== list.value) return (list.rest) ? nth(num, list.rest, ++count) : undefined;
    return count;
}
console.log(nth(1, myList));
