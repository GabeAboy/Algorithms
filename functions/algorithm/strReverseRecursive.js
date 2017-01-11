var count =0;
function reverse (str) {
    count++;
    if (str === "") {
        return "";
    } else {

        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("hello world"));
// function countLetters(str, p) {
//     var pos = str.indexOf(p);
//     if (pos == -1) {
//         return 0;
//     } else {
//         return 1 + countLetters(str.substr(pos + 1), p)
//     }
// }
// console.log(countLetters('To be, ore', 'e'));
