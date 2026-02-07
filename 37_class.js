class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }

    show() {
        console.log(this.name, this.course);
    }
}

let s1 = new Student("Vikash", "BCA");

s1.show();