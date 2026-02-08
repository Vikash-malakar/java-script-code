class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    display() {
        console.log(this.name, this.course);
    }
}

let s = new Student("Vikash", "Full Stack");

s.display();