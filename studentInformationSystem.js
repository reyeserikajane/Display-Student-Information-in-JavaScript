class Student {
    constructor(name, school, studentNumber, program, section, age, sex, birthDate, contactNumber, email, address) {
        this.displayStudentInfo = function () {
            console.log(
                '\nName: ' + name +
                '\nSchool: ' + school + 
                '\nStudent Number: #' + studentNumber +
                '\nProgram: ' + program +
                '\nSection: ' + section + 
                '\nAge: ' + age + 
                '\nSex: ' + sex + 
                "\nBirthdate:", birthDate, 
                '\nMobile Number: ' + contactNumber + 
                '\nEmail Address: ' + email +
                '\nAddress: ' + address
                );
        };
    }
}

const student1 = new Student("Erika Jane T. Reyes", "Polytechnic University of the Philippines - Manila", "2021-05852-MN-0", "Bachelor of Science in Computer Engineering", "2-2", "20 years old", "Female", "July 04, 2003", "09657590070", "erikajanetreyes.pup@gmail.com", "Parañaque City, Philippines");
const student2 = new Student("Dexter F. Suico", "Technological University of the Philippines - Manila", "TUPM-19-4859", "Bachelor of Science in Electrical Engineering", "NS3B", "22 years old", "Male", "October 08, 2000", "09291820000", "dexter.suico@tup.edu.ph", "Parañaque City, Philippines");

console.log('\nSTUDENT INFORMATION SYSTEM')
console.log('\nStudent #1');
student1.displayStudentInfo();
console.log('\nStudent #2');
student2.displayStudentInfo();