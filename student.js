let studentDetailsFromLs = JSON.parse(localStorage.getItem("userData"));
  class studentData {
    constructor() {
      // this.name = name;
      // this.stId = id;
      // this.assignment = assignment;
      // this.lecture = lecture;
    }
    append(data) {
      data.forEach((el) => {
        let tr = document.createElement("tr");

        let name = document.createElement("td");
        name.innerText = el.name;

        let id = document.createElement("td");
        id.innerText = el.studentId;

        let assi = document.createElement("td");
        assi.innerText = JSON.parse(localStorage.getItem("assignmentDetails"))||[];;

        let lect = document.createElement("td");
        lect.innerText = JSON.parse(localStorage.getItem("lectureDetails"))||[];;

        tr.append(name, id, assi, lect);
        console.log(tr);
        document.querySelector("table > tbody").append(tr);
      });
    }
  }
  let stUser = new studentData();
  stUser.append(studentDetailsFromLs);