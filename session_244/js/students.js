
let stuedntsSet = new Set();

function add(){
    let nameInput = document.getElementById("name");
    let studentListSelect = document.getElementById("studentList");

    stuedntsSet.add(nameInput.value);
    studentListSelect.innerHTML="";
    for (const n of stuedntsSet) {
        studentListSelect.innerHTML += "<option>"+n+"</option>";
    }   
}