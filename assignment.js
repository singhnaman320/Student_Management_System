let assignmentData =
    JSON.parse(localStorage.getItem("assignmentDetails")) || [];
  class Assignment {
    constructor(assignmnet) {
      this.assignmnet = assignmnet;
    }

    append(data) {
      data.forEach((el, index) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = el;
        console.log(el)

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
    assignmentData.splice(index, 1);
    localStorage.setItem("assignmentDetails", JSON.stringify(assignmentData));
    window.location.reload();
  }

  let addAssi = () => {
    let ass = document.querySelector("#assi").value;
    assignmentData.push(ass);
    localStorage.setItem("assignmentDetails", JSON.stringify(assignmentData));
  };

  if (assignmentData != "") {
    let ass = document.querySelector("#assi").value;
    let assign = new Assignment(ass);
    assign.append(assignmentData);
  }

  document.querySelector("form").addEventListener("submit", addAssi);