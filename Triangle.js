let a = Math.round((Math.random() + 1) * 25);
let b = Math.round((Math.random() + 1) * 25);
let c = Math.round((Math.random() + 1) * 25);
let cb = c + b;
let ab = a + b;
let ac = a + c;
if (ab > c && cb > a && ac > b) {
    document.write(`Your triangle is a=${a} x b=${b} x c=${c}, it is an existing triangle.`);
}
else if (ab > c && cb > a && ac < b) {
    document.write(`Your triangle is a=${a} x b=${b} x c=${c}, it's "b" side is too long so it does not exist, because "a" and "b" is ${ac} which is shorter than ${b}`);
}
else if (ab > c && cb < a && ac > b) {
    document.write(`Your triangle is a=${a} x b=${b} x c=${c}, it's "a" side is too long so it does not exist, because "a" and "b" is ${cb} which is shorter than ${a}`);
}
else if (ab < c && cb > a && ac > b) {
    document.write(`Your triangle is a=${a} x b=${b} x c=${c}, it's "c" side is too long so it does not exist, because "a" and "b" is ${ab} which is shorter than ${c}.`);
}
else if (ab == c | cb == a | ac == b) {
    document.write(`Your triangle is a=${a} x b=${b} x c=${c}, it is an existing triangle, non other than a isosceles triangle.`);
}
else {
    document.write(`Ilyen nincs! ${a} ${b} ${c}`)
}