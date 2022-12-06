let studentData = JSON.parse(localStorage.getItem("userData")) || [];

  let Admindata = JSON.parse(localStorage.getItem("adminData")) || [];
  class User {
    constructor(name, email, password, studentId) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.studentId = studentId;
      this.assignment = 0;
      this.lecture = 0;
    }

    signUp() {
      let validate = false;
      validate = this.validateEmail() && this.validatePass();
      if (validate) {
        return true;
      } else {
        return false;
      }
    }

    // email
    validateEmail() {
      let isAdmin = document.querySelector("#adminCode").value;

      // user
      if (isAdmin == "") {
        let check = studentData.filter((el) => {
          return this.email == el.email;
        });
        if (check.length > 0) {
          alert("User already exists");
          return;
        }
        return true;
      } else {
        let check = Admindata.filter((el) => {
          return this.email == el.email;
        });
        if (check.length > 0) {
          alert("User already exists");
          return;
        }
        return true;
      }
    }

    // password
    validatePass() {
      if (
        this.password.includes("@") ||
        this.password.includes("#") ||
        this.password.includes("$") ||
        this.password.includes("%")
      ) {
        return true;
      } else {
        alert("Password must contain any one of these @ # $ % in it");
      }
    }
  }

  class student extends User {
    constructor(name, email, password, studentId, assignment, lecture) {
      super(name, email, password, studentId, assignment, lecture);
    }
  }
  // admin

  class Admin extends User {
    constructor(name, email, password, studentId) {
      super(name, email, password, studentId);
    }
  }

  //   let user = new User("anu", "anunwn@gamail.com", 123, 12);
  //   let valid = user.validateEmail();
  //   console.log(valid);

  let userFun = (el) => {
    el.preventDefault();
    // console.log('hello')
    let nm = document.querySelector("#name").value;
    let em = document.querySelector("#email").value;
    let ps = document.querySelector("#password").value;
    let stId = document.querySelector("#studentId").value;
    let isAdmin = document.querySelector("#adminCode").value;
    console.log(isAdmin == "");
    if (isAdmin == "") {
      // user
      let user = new student(nm, em, ps, stId);
      let store = user.signUp();
      if (store) {
        studentData.push(user);

        localStorage.setItem("userData", JSON.stringify(studentData));

        alert("SignUp Successful");
      }
    } else {
      if (isAdmin === "admin@012") {
        let admin = new Admin(nm, em, ps, stId);
        let store = admin.signUp();
        if (store) {
          Admindata.push(admin);
          localStorage.setItem("adminData", JSON.stringify(Admindata));

          alert("Admin SignedUp Sucessful");
        }
      } else {
        alert("Admin code incorrect");
      }
    }

    // admin
  };

  document.querySelector("form").addEventListener("submit", userFun);