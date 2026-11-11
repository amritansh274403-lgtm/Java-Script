let marks = [72, 85, 30, 90];

let anyFail = marks.some(function(mark) {
    return mark < 40;
});

let allAbove35 = marks.every(function(mark) {
    return mark >= 35;
});

console.log("Any mark below 40:", anyFail);
console.log("All marks 35 or more:", allAbove35);