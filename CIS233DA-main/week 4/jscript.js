var semesters = [
    { id: 1, name: 'Semester 1' },
    { id: 2, name: 'Semester 2' },
    { id: 3, name: 'Semester 3' }
  ];
  
  var classes = [
    { id: 1, semesterId: 1, name: 'Class A' },
    { id: 2, semesterId: 1, name: 'Class B' },
    { id: 3, semesterId: 2, name: 'Class C' },
    { id: 4, semesterId: 2, name: 'Class D' },
    { id: 5, semesterId: 3, name: 'Class E' }
  ];
  
  var students = [
    { id: 1, classId: 1, name: 'devan' },
    { id: 2, classId: 1, name: 'alan' },
    { id: 3, classId: 2, name: 'nick' },
    { id: 4, classId: 3, name: 'daniel' },
    { id: 5, classId: 3, name: 'theresa' }
  ];
  
  // Function to populate the semester select options
  function populateSemesters() {
    var semesterSelect = document.getElementById('semesterSelect');
    semesterSelect.innerHTML = '';
  
    semesters.forEach(function (semester) {
      var option = document.createElement('option');
      option.value = semester.id;
      option.text = semester.name;
      semesterSelect.appendChild(option);
    });
  }
  
  // Function to populate the class select options based on the selected semester
  function populateClasses() {
    var semesterSelect = document.getElementById('semesterSelect');
    var classSelect = document.getElementById('classSelect');
    var selectedSemesterId = parseInt(semesterSelect.value);
  
    classSelect.innerHTML = '';
  
    var filteredClasses = classes.filter(function (clss) {
      return clss.semesterId === selectedSemesterId;
    });
  
    filteredClasses.forEach(function (clss) {
      var option = document.createElement('option');
      option.value = clss.id;
      option.text = clss.name;
      classSelect.appendChild(option);
    });
  }
  
  // Function to populate the student select options based on the selected class
  function populateStudents() {
    var classSelect = document.getElementById('classSelect');
    var studentSelect = document.getElementById('studentSelect');
    var selectedClassId = parseInt(classSelect.value);
  
    studentSelect.innerHTML = '';
  
    var filteredStudents = students.filter(function (student) {
      return student.classId === selectedClassId;
    });
  
    filteredStudents.forEach(function (student) {
      var option = document.createElement('option');
      option.value = student.id;
      option.text = student.name;
      studentSelect.appendChild(option);
    });
  }
  
  // Function to delete a student
  function deleteStudent() {
    var studentSelect = document.getElementById('studentSelect');
    var selectedStudentId = parseInt(studentSelect.value);
  
    students = students.filter(function (student) {
      return student.id !== selectedStudentId;
    });
  
    // Repopulate the students list
    populateStudents();
  }
  
  // Function to add a student
  function addStudent() {
    var classSelect = document.getElementById('classSelect');
    var studentName = prompt('Enter student name:');
  
    if (studentName) {
      var newStudentId = students.length + 1;
      var newStudent = {
        id: newStudentId,
        classId: parseInt(classSelect.value),
        name: studentName
      };
  
      students.push(newStudent);
  
      // Repopulate the students list
      populateStudents();
    }
  }
  
  // Event listener for semester selection change
  document.getElementById('semesterSelect').addEventListener('change', populateClasses);
  
  // Event listener for class selection change
  document.getElementById('classSelect').addEventListener('change', populateStudents);
  
  // Event listener for delete student button click
  document.getElementById('deleteStudentBtn').addEventListener('click', deleteStudent);
  
  // Event listener for add student button click
  document.getElementById('addStudentBtn').addEventListener('click', addStudent);
  
  // Populate the semester select options on page load
  populateSemesters();
  