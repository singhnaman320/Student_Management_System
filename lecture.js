let lectureData = JSON.parse(localStorage.getItem("lectureDetails")) || [];
  class Lecture {
    constructor(lecture) {
      this.leclecture = lecture;
    }

    append(data) {
      data.forEach((el, index) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = el;

        let td2 = document.createElement("td");
        td2.innerText = "Remove";
        td2.addEventListener("click", function () {
          deleteData(index);
        });

        tr.append(td1, td2);
        document.getElementById("body").append(tr);
      });
    }
  }

  function deleteData(index) {
    lectureData.splice(index, 1);
    localStorage.setItem("lectureDetails", JSON.stringify(lectureData));
    window.location.reload();
  }

  let addlect = () => {
    let lec = document.querySelector("#lect").value;
    lectureData.push(lec);
    localStorage.setItem("lectureDetails", JSON.stringify(lectureData));
  };

  if (lectureData != "") {
    let lec = document.querySelector("#lect").value;
    let lectr = new Lecture(lec);
    lectr.append(lectureData);
  }

  document.querySelector("form").addEventListener("submit", addlect);