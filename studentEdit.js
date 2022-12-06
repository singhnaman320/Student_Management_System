let studentDetailsFromLs = JSON.parse(localStorage.getItem("userData"));

  class adminData {
    constructor() {}
    append(data) {
      data.forEach((el, index) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = el.name;

        let td2 = document.createElement("td");
        td2.innerText = el.email;

        let td3 = document.createElement("td");
        td3.innerText = "Change";
        td3.style.backgroundColor = "Green";
        td3.style.cursor = "pointer";

        // console.log(index)

        td3.addEventListener("click", function () {
          Changedata(index);
        });

        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr);
      });
    }
  }

  let adminCall = new adminData();
  adminCall.append(studentDetailsFromLs);

  let studentData = JSON.parse(localStorage.getItem("userData")) || [];

  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    signUp() {
      let validate = false;
      validate = this.validateEmail();
      if (validate) {
        return true;
      } else {
        return false;
      }
    }

    // email
    validateEmail() {
      let check = studentData.filter((el) => {
        return this.email == el.email;
      });
      if (check.length > 0) {
        alert("User already exists");
        return;
      }
      return true;
    }
  }

  class student extends User {
    constructor(name, email) {
      super(name, email);
    }
  }

  // Edit data
  function Changedata(index) {
    // console.log(index)
    document.querySelector("table").style.display = "none";
    document.querySelector("form").style.display = "block";

    document.querySelector("form").addEventListener("submit", function () {
      userFun(index);
    });
  }

  let userFun = (index) => {
    event.preventDefault();
    console.log(index);
    let nm = document.querySelector("#name").value;
    let em = document.querySelector("#email").value;

    let user = new student(nm, em);
    let store = user.signUp();
    console.log(store);
    if (store) {
      // studentData.push(user);
      studentData[index].email = em;
      studentData[index].name = nm;

      localStorage.setItem("userData", JSON.stringify(studentData));

      alert("Your data update Successful");
      window.location.reload();
    }
  };