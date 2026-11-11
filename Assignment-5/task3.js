let marks = [72, 85, 45, 90];

let passedMarks = marks.filter(function(mark) {
    return mark >= 60;
});

console.log(passedMarks);