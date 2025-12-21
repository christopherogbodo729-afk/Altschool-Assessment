// -------- DATA STRUCTURE -------- //
let students = [];
let idCounter = 1;

// -------- DOM ELEMENTS -------- //
const nameInput = document.getElementById("nameInput");
const gradeInput = document.getElementById("gradeInput");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const averageSpan = document.getElementById("average");
const errorMsg = document.getElementById("error");

// -------- EVENT: ADD STUDENT -------- //
addBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const grade = Number(gradeInput.value);

    // Validation
    if (name === "") {
        errorMsg.textContent = "Student name or grade cannot be empty.";
        return;
    }

    if (isNaN(grade) || grade < 0 || grade > 100) {
        errorMsg.textContent = "Grade must be between 0 and 100.";
        return;
    }

    errorMsg.textContent = "";

    // Create student object
    const student = {
        id: idCounter++,
        name: name,
        grade: grade
    };

    students.push(student);

    renderStudents();
    updateAverage();

    nameInput.value = "";
    gradeInput.value = "";
});

// -------- DISPLAY STUDENTS -------- //
function renderStudents() {
    studentList.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td><button onclick="deleteStudent(${student.id})">Delete</button></td>
        `;

        studentList.appendChild(row);
    });
}

// -------- DELETE STUDENT -------- //
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    renderStudents();
    updateAverage();
}

// -------- AVERAGE CALCULATION -------- //
function updateAverage() {
    if (students.length === 0) {
        averageSpan.textContent = 0;
        return;
    }

    const total = students.reduce((sum, s) => sum + s.grade, 0);
    const average = (total / students.length).toFixed(2);

    averageSpan.textContent = average;
}
