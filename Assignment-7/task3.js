function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}


Student.prototype.result = function() {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

let student1 = new Student("Shivam", 88);


console.log(student1.result());