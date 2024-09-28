let courses = [];
let editIndex = -1;

document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseName = document.getElementById('courseName').value;
    const courseDescription = document.getElementById('courseDescription').value;

    if (editIndex === -1) {
        courses.push({ name: courseName, description: courseDescription });
    } else {
        courses[editIndex] = { name: courseName, description: courseDescription };
        editIndex = -1;
    }

    renderCourses();
    document.getElementById('courseForm').reset();
});

function renderCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    courses.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editCourse(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteCourse(${index})">Delete</button>
            </td>
        `;
        courseList.appendChild(row);
    });
}

function editCourse(index) {
    document.getElementById('courseName').value = courses[index].name;
    document.getElementById('courseDescription').value = courses[index].description;
    editIndex = index;
}

function deleteCourse(index) {
    courses.splice(index, 1);
    renderCourses();
}

function searchCourses() {
    const searchText = document.getElementById('search').value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.name.toLowerCase().includes(searchText) ||
        course.description.toLowerCase().includes(searchText)
    );

    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    filteredCourses.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editCourse(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteCourse(${index})">Delete</button>
            </td>
        `;
        courseList.appendChild(row);
    });
}

