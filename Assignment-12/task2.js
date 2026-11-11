function formatMarks(marks, callback) {
    return callback(marks);
}

console.log(
    formatMarks(76, (marks) => {
        return "Marks: " + marks + "/100";
    })
);