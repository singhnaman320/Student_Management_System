let studentDetailsFromLs = JSON.parse(localStorage.getItem("userData"))

    class adminData {
        constructor() {

        }
        append(data) {
            data.forEach((el,index) => {
            let tr = document.createElement('tr');

          let td1 = document.createElement('td');
          td1.innerText = el.name;

          let td2 = document.createElement('td');
          td2.innerText = el.studentId;

          // let td3 = document.createElement('td');
          // td3

         let td3 = document.createElement('td');
          td3.innerText = 'Remove';
          td3.style.backgroundColor = 'red';
          td3.style.color = 'white';
          td3.style.cursor="pointer"

          td3.addEventListener('click', function() {
            deleteData(index);
          });

        tr.append(td1,td2,td3);
        document.querySelector('tbody').append(tr);
            })

    }
    }
// remove 
    function deleteData(index) {
        //console.log(index)
    studentDetailsFromLs.splice(index,1)

    localStorage.setItem("userData", JSON.stringify(studentDetailsFromLs))
    window.location.reload();
}

// plus 
function plus(el) {
    console.log('Plus:', el)
}

    let adminCall = new adminData();
    adminCall.append(studentDetailsFromLs)
// Add student


let studentData = JSON.parse(localStorage.getItem("userData")) || [];


  class User {
    constructor(name, email, password, studentId) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.studentId = studentId;
      this.assignment = JSON.parse(localStorage.getItem("assignmentDetails"))||[];
      this.lecture = JSON.parse(localStorage.getItem("lectureDetails"))||[];
    }

    signUp() {
        
      let validate = false;
      validate = this.validateEmail() && this.validatePass();
      if (validate) {
            return true;
            }else {
                return false;
            }  
    }

 // email
    validateEmail() {
        

        // user
       

      let check = studentData.filter((el) => {
        return this.email == el.email;
      });
      if (check.length > 0) {
        alert("User already exists");
        return;
      }
      return true;
}


    // password
    validatePass() {
        if (this.password.includes('@') || this.password.includes('#') || this.password.includes('$') || this.password.includes('%')) {
            return true;
        } else {
            alert('Password must contain any one of these @ # $ in it');
        }
    }
  }

  class student extends User {
    constructor(name, email, password, studentId,assignment,lecture) {
        super(name, email, password, studentId,assignment,lecture)
        
    }
    
  }
  let userFun = (el) => {
    el.preventDefault();
    // console.log('hello')
    let nm = document.querySelector('#name').value;
    let em = document.querySelector('#email').value;
    let ps = document.querySelector('#password').value
    let stId = document.querySelector('#studentId').value
    
    let user = new student(nm,em,ps,stId);
     let store = user.signUp();
     if(store) {
        studentData.push(user);
        
        localStorage.setItem("userData", JSON.stringify(studentData));

        alert('SignUp Successful')
     }
      
    }

     // admin


let addstudent=()=>{
  document.querySelector('table').style.display = "none";
  document.querySelector('form').style.display ="block";
}


document.querySelector("#admin").addEventListener("click",addstudent)

document.querySelector('form').addEventListener('submit', userFun)
