
  class UserData {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }

    userlogIn() {
      let studentLogin = false;
      studentLogin =
        this.validateEmailStudent() && this.validatePasswordStudent();
      if (studentLogin) {
        return true;
      }
    }
    // email
    validateEmailStudent() {
      // user
      let check = studentDataFromLs.filter((el) => {
        return this.email == el.email;
      });
      if (check.length == 0) {
        alert("User doesnot exists");
        return;
      }
      return true;
    }

    validatePasswordStudent() {
      // user
      let check = studentDataFromLs.filter((el) => {
        return this.password == el.password;
      });
      if (check.length == 0) {
        alert("Password Incorrect");
        return;
      }
      return true;
    }
  }

  class Adminlogin extends UserData {
    constructor(email, password) {
      super(email, password);
    }

    adminlogIn() {
      let adminLogin = false;
      adminLogin = this.validateEmailadmin() && this.validatePasswordadmin();
      if (adminLogin) {
        return true;
      }
    }
    // email
    validateEmailadmin() {
      // user
      let check = AdmindataFromLs.filter((el) => {
        return this.email == el.email;
      });
      if (check.length == 0) {
        alert("Admin doesn't exists");
        return;
      }
      return true;
    }

    validatePasswordadmin() {
      // user
      let check = AdmindataFromLs.filter((el) => {
        return this.password == el.password;
      });
      if (check.length == 0) {
        alert("Password Incorrect");
        return;
      }
      return true;
    }
  }
  let studentDataFromLs = JSON.parse(localStorage.getItem("userData")) || [];
  let AdmindataFromLs = JSON.parse(localStorage.getItem("adminData")) || [];

  // function
  let loginstudent = (el) => {
    el.preventDefault();

    let em = document.querySelector("#email").value;
    let ps = document.querySelector("#password").value;
    let user1 = new UserData(em, ps);
    let login = user1.userlogIn();
    if (login) {
      alert("Login successfull");
      window.location = "Student.html";
    }
  };
  let loginadmin = (el) => {
    el.preventDefault();

    let em = document.querySelector("#email").value;
    let ps = document.querySelector("#password").value;
    let admin = new Adminlogin(em, ps);
    let login = admin.adminlogIn();
    if (login) {
      alert("Admin Login successfull");
      window.location = "Admin.html";
    }
  };

  let logs = () => {
    document.querySelector("#main").style.display = "block";
    document.querySelector("form").addEventListener("submit", loginstudent);
  };
  let logA = () => {
    document.querySelector("#main").style.display = "block";
    document.querySelector("form").addEventListener("submit", loginadmin);
  };

  document.querySelector("#Student_Login").addEventListener("click", logs);
  document.querySelector("#Admin_Login").addEventListener("click", logA);